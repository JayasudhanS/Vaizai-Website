"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const stats = [
    { value: "1M+", label: "Users Impacted", icon: Globe },
    { value: "1000+", label: "Projects Delivered", icon: Zap },
    { value: "50+", label: "Enterprise Clients", icon: Sparkles },
    { value: "10+", label: "Countries Served", icon: Globe },
];

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">

            {/* Rich dark radial gradient overlay */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(14,165,233,0.15),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_80%,rgba(2,132,199,0.07),transparent)]" />
                <div className="grid-bg absolute inset-0 opacity-30" />
                {/* Horizontal glow line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-6xl">
                {/* Animated badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/8 text-sky-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6 md:mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    Deep Tech Innovation Company
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 md:mb-8 px-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Engineering the{" "}
                    <span className="block">
                        Future of{" "}
                        <span
                            className="relative inline-block"
                            style={{
                                background: "linear-gradient(120deg, #ffffff 0%, #38bdf8 45%, #0ea5e9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Intelligence
                        </span>
                    </span>
                    <span className="block text-white/80 font-light">& Reality</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                    className="text-white/55 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-2"
                >
                    We build next-generation ecosystems powered by{" "}
                    <span className="text-sky-400 font-medium">AI</span>,{" "}
                    <span className="text-sky-400 font-medium">XR</span>, and{" "}
                    <span className="text-sky-400 font-medium">cloud technologies</span>{" "}
                    to transform industries and redefine human interaction.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 md:mb-24 px-4"
                >
                    <Link href="/contact">
                        <button className="btn-primary group flex items-center gap-2 w-full sm:w-auto justify-center">
                            <span>Connect with Us</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <Link href="/solutions">
                        <button className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
                            Explore Solutions
                        </button>
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-sky-500/10 bg-sky-500/10 mx-2 sm:mx-0"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center py-6 px-4 bg-[#080a0f]/80 backdrop-blur-sm hover:bg-sky-500/5 transition-colors duration-300 group"
                        >
                            <span
                                className="text-3xl md:text-4xl font-black mb-1 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: "linear-gradient(120deg, #fff 0%, #38bdf8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontFamily: "'Space Grotesk', sans-serif"
                                }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-sky-500/30 flex items-start justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-2 rounded-full bg-sky-400"
                    />
                </div>
            </motion.div>
        </section>
    );
}
