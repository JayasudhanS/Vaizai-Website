"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StellarBlueBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate orbs and rings with a gentle floating motion
            gsap.to(".floating-element", {
                y: -30,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 1.5,
                    from: "random"
                }
            });

            // Make the orbit rings rotate slowly
            gsap.to(".orbit-ring", {
                rotation: 360,
                duration: 120,
                repeat: -1,
                ease: "linear",
            });
        }, containerRef);

        // Canvas Stars setup
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext('2d');
        if (!c) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; radius: number; vx: number; vy: number; opacity: number; pulseSpeed: number }[] = [];

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars();
        };

        const createStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Responsive star count
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random(),
                    pulseSpeed: Math.random() * 0.02 + 0.005,
                });
            }
        };

        const drawStars = () => {
            c.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                c.beginPath();
                c.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                c.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                c.fill();

                // Move stars slightly
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around edges
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Twinkle effect
                star.opacity += star.pulseSpeed;
                if (star.opacity > 1 || star.opacity < 0.1) {
                    star.pulseSpeed = -star.pulseSpeed;
                }
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        initCanvas();
        drawStars();

        window.addEventListener('resize', initCanvas);

        return () => {
            ctx.revert(); // Clean up GSAP
            window.removeEventListener('resize', initCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-[#050814] pointer-events-none">
            {/* Deep Blue Base Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#022c54_0%,_#050814_100%)] opacity-80 mix-blend-multiply"></div>

            {/* Canvas for small stars */}
            <canvas ref={canvasRef} className="absolute inset-0 mix-blend-screen opacity-60"></canvas>

            {/* Glowing Nebulae / Orbs */}
            <div className="floating-element absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
            <div className="floating-element absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
            <div className="floating-element absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-blue-900/40 rounded-full blur-[100px] mix-blend-screen"></div>

            {/* Central Main Glow (like the purple globe but blue) */}
            <div className="floating-element absolute bottom-10 right-10 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-[radial-gradient(circle_at_center,_#0ea5e9_0%,_transparent_70%)] opacity-40 mix-blend-screen blur-[50px]"></div>

            {/* Custom SVG Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen">
                <svg
                    className="orbit-ring absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] max-w-[1200px] max-h-[1200px]"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}
                >
                    <ellipse cx="50" cy="50" rx="48" ry="48" stroke="url(#paint0_linear)" strokeWidth="0.2" strokeDasharray="2 4" />
                    <ellipse cx="50" cy="50" rx="35" ry="35" stroke="url(#paint1_linear)" strokeWidth="0.4" strokeDasharray="4 8" />
                    <ellipse cx="50" cy="50" rx="20" ry="20" stroke="url(#paint2_linear)" strokeWidth="0.1" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="1" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0ea5e9" />
                            <stop offset="1" stopColor="#022c54" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7dd3fc" stopOpacity="0.5" />
                            <stop offset="1" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Overlay grid to give it depth */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-repeat opacity-[0.07] mix-blend-overlay"></div>
        </div>
    );
}
