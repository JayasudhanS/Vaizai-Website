"use client";

import { motion } from "framer-motion";

const timeline = [
    { year: "2023", title: "Concept & Research", desc: "Began exploring immersive web technologies and building the core architecture for an interactive digital platform." },
    { year: "2024", title: "Prototype Release", desc: "Launched first working prototype featuring real-time collaboration tools and AI-assisted workflows." },
    { year: "2025", title: "Creative Studio Suite", desc: "Introduced a powerful online studio enabling teams to design, share, and manage projects in one unified workspace." },
    { year: "2026", title: "Global Expansion", desc: "Scaling with advanced automation, global user access, and next-generation interactive web experiences." },
];

const metrics = [
    { v: "1M+", l: "Users Impacted" },
    { v: "1000+", l: "Projects Delivered" },
    { v: "50+", l: "Enterprise Clients" },
    { v: "10+", l: "Countries Served" },
];

const industries = [
    "Healthcare", "Education", "Architecture & Construction",
    "Manufacturing", "Gaming & Entertainment", "Smart Cities", "Logistics & Transportation"
];

export default function AboutPage() {
    return (
        <div className="pt-28 pb-20 px-6 min-h-screen">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-500/4 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-6xl">
                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <span className="section-label">🏢 About Vaizai</span>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Our <span className="text-gradient">Vision</span>
                    </h1>
                    <p className="text-white/55 text-xl md:text-2xl leading-relaxed font-light">
                        To build the immersive infrastructure of the future, enabling humanity to{" "}
                        <span className="text-sky-400 font-medium">connect</span>,{" "}
                        <span className="text-sky-400 font-medium">create</span>, and{" "}
                        <span className="text-sky-400 font-medium">elevate</span>{" "}
                        beyond physical boundaries.
                    </p>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-sky-500/10 bg-sky-500/8 mb-32">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center py-8 px-4 bg-[#080a0f]/90 hover:bg-sky-500/5 transition-colors group text-center"
                        >
                            <span
                                className="text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                                style={{
                                    background: "linear-gradient(120deg, #fff 0%, #38bdf8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                {m.v}
                            </span>
                            <span className="text-white/40 text-xs uppercase tracking-widest font-medium">{m.l}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black text-center mb-14"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    The Vaizai <span className="text-gradient-sky">Journey</span>
                </motion.h2>

                <div className="relative max-w-3xl mx-auto mb-32">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-sky-500/20 to-transparent -translate-x-px" />

                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                        >
                            {/* Node */}
                            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#080a0f] shadow-[0_0_12px_rgba(56,189,248,0.8)] -translate-x-1.5 top-4" />

                            <div className="md:w-5/12 pl-14 md:pl-0">
                                <div className={`glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/20 transition-colors ${i % 2 === 0 ? "" : "md:text-right"}`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest mb-3">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-5/12" />
                        </motion.div>
                    ))}
                </div>

                {/* Industries */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-10 md:p-14 border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/4 to-blue-600/4 pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-black mb-10 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Industries We <span className="text-gradient-sky">Serve</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 relative z-10">
                        {industries.map((ind) => (
                            <span
                                key={ind}
                                className="px-5 py-2.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-white/60 hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-300 text-sm font-medium cursor-default"
                            >
                                {ind}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
