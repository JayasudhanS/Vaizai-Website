"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    className?: string;
    triggerId?: string;
    /** 'fade' = simple fade, 'slide' = directional slide+fade, 'scale' = scale up, 'clip' = clip from bottom, 'flip' = 3D flip */
    variant?: "fade" | "slide" | "scale" | "clip" | "flip";
    ease?: string;
    once?: boolean;
}

export default function GsapReveal({
    children,
    direction = "up",
    distance = 50,
    duration = 0.8,
    delay = 0,
    stagger = 0.12,
    className = "",
    triggerId,
    variant = "slide",
    ease = "power3.out",
    once = true,
}: GsapRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = Array.from(containerRef.current.children) as HTMLElement[];
        if (elements.length === 0) return;

        let fromVars: gsap.TweenVars = { opacity: 0 };
        let toVars: gsap.TweenVars = {
            opacity: 1,
            duration,
            delay,
            stagger,
            ease,
        };

        switch (variant) {
            case "slide": {
                let x = 0, y = 0;
                if (direction === "up") y = distance;
                else if (direction === "down") y = -distance;
                else if (direction === "left") x = distance;
                else if (direction === "right") x = -distance;
                fromVars = { opacity: 0, x, y };
                toVars = { ...toVars, opacity: 1, x: 0, y: 0 };
                break;
            }
            case "scale": {
                fromVars = { opacity: 0, scale: 0.85, y: distance * 0.5 };
                toVars = { ...toVars, opacity: 1, scale: 1, y: 0 };
                break;
            }
            case "clip": {
                // Clip-path reveal from bottom
                elements.forEach(el => {
                    el.style.overflow = "hidden";
                    el.style.display = "block";
                });
                fromVars = { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 };
                toVars = { ...toVars, clipPath: "inset(0% 0% 0% 0%)", opacity: 1 };
                break;
            }
            case "flip": {
                fromVars = { opacity: 0, rotationX: -40, y: distance * 0.8, transformOrigin: "top center" };
                toVars = { ...toVars, opacity: 1, rotationX: 0, y: 0 };
                break;
            }
            case "fade":
            default: {
                fromVars = { opacity: 0 };
                toVars = { ...toVars, opacity: 1 };
                break;
            }
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(elements, fromVars, {
                ...toVars,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 88%",
                    toggleActions: once ? "play none none none" : "play none none reset",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [direction, distance, duration, delay, stagger, variant, ease, once]);

    return (
        <div ref={containerRef} className={className} id={triggerId}>
            {children}
        </div>
    );
}
