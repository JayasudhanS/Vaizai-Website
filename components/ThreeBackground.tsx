"use client";

import { useRef, useEffect } from "react";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    pulsePhase: number;
}

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let points: Point[] = [];

        const POINT_COUNT = Math.floor((width * height) / 14000);
        const CONNECTION_DIST = 160;
        const MOUSE_REPEL_DIST = 120;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const initPoints = () => {
            points = [];
            const count = Math.floor((width * height) / 14000);
            for (let i = 0; i < count; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    size: Math.random() * 1.5 + 0.5,
                    alpha: Math.random() * 0.6 + 0.2,
                    pulsePhase: Math.random() * Math.PI * 2,
                });
            }
        };

        resize();
        initPoints();

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        const onMouseLeave = () => {
            mouse.current.x = -9999;
            mouse.current.y = -9999;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("resize", () => { resize(); initPoints(); });

        let t = 0;

        const draw = () => {
            animId = requestAnimationFrame(draw);
            t += 0.008;

            // Clear with very subtle trail for motion blur feel
            ctx.fillStyle = "rgba(8, 10, 15, 0.18)";
            ctx.fillRect(0, 0, width, height);

            // Update and draw points
            for (let i = 0; i < points.length; i++) {
                const p = points[i];

                // Mouse repel
                const dx = p.x - mouse.current.x;
                const dy = p.y - mouse.current.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);
                if (distToMouse < MOUSE_REPEL_DIST) {
                    const force = (MOUSE_REPEL_DIST - distToMouse) / MOUSE_REPEL_DIST;
                    p.vx += (dx / distToMouse) * force * 0.6;
                    p.vy += (dy / distToMouse) * force * 0.6;
                }

                // Dampen velocity
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Wrap edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Pulse alpha
                const pulse = Math.sin(t * 1.5 + p.pulsePhase) * 0.15 + 0.85;
                const a = p.alpha * pulse;

                // Draw point
                const isBlue = i % 3 !== 0;
                const color = isBlue
                    ? `rgba(56, 189, 248, ${a})`   // sky blue
                    : `rgba(255, 255, 255, ${a * 0.6})`; // white

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();

                // Connect nearby points
                for (let j = i + 1; j < points.length; j++) {
                    const q = points[j];
                    const ddx = p.x - q.x;
                    const ddy = p.y - q.y;
                    const dist = Math.sqrt(ddx * ddx + ddy * ddy);

                    if (dist < CONNECTION_DIST) {
                        const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse glow
            if (mouse.current.x > 0) {
                const grad = ctx.createRadialGradient(
                    mouse.current.x, mouse.current.y, 0,
                    mouse.current.x, mouse.current.y, 100
                );
                grad.addColorStop(0, "rgba(56, 189, 248, 0.06)");
                grad.addColorStop(1, "rgba(56, 189, 248, 0)");
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(mouse.current.x, mouse.current.y, 100, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <>
            {/* CSS Aurora gradient layers */}
            <div className="fixed inset-0 z-[-2] bg-[#080a0f]" />
            <div
                className="fixed inset-0 z-[-2] pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 40% at 20% -10%, rgba(14,165,233,0.12) 0%, transparent 60%),
                        radial-gradient(ellipse 60% 50% at 80% 110%, rgba(2,132,199,0.09) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 30% at 50% 50%, rgba(56,189,248,0.03) 0%, transparent 60%)
                    `
                }}
            />
            {/* Canvas constellation */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[-1] pointer-events-none"
                style={{ width: "100vw", height: "100vh" }}
            />
        </>
    );
}
