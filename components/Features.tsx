"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
    {
        icon: "🧠",
        title: "Interactive Simulations",
        description: "Realistic training environments that improve learning retention and reduce costs across industries.",
        tags: ["Realistic Physics", "Multi-user", "Progress Tracking"],
        gradient: "from-sky-500/20 to-blue-600/5",
        border: "hover:border-sky-500/40",
        href: "/services/interactive-simulations",
    },
    {
        icon: "🏛️",
        title: "3D Architectural Visualization",
        description: "Transform blueprints into immersive 3D experiences for better client presentations and planning.",
        tags: ["Real-time Rendering", "CAD Integration", "VR Walkthroughs"],
        gradient: "from-blue-400/20 to-cyan-600/5",
        border: "hover:border-blue-400/40",
        href: "/services/3d-visualization",
    },
    {
        icon: "🌐",
        title: "Virtual Collaboration",
        description: "Enable remote teams to collaborate in shared virtual spaces with natural, spatial interactions.",
        tags: ["Spatial Audio", "Gesture Recognition", "Cross-platform"],
        gradient: "from-cyan-400/20 to-sky-500/5",
        border: "hover:border-cyan-400/40",
        href: "/services/virtual-collaboration",
    },
    {
        icon: "🚀",
        title: "Digital Development",
        description: "Custom application development tailored for modern industry demands and future-ready platforms.",
        tags: ["Unity / Unreal", "WebXR", "Mobile Apps"],
        gradient: "from-sky-600/20 to-blue-400/5",
        border: "hover:border-sky-600/40",
        href: "/services/digital-development",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

export default function Features() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-500/4 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-label">⚡ Core Capabilities</span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        What We{" "}
                        <span className="text-gradient-sky">Build</span>
                    </h2>
                    <p className="text-white/45 text-lg max-w-xl mx-auto font-light">
                        Cutting-edge technologies engineered to drive innovation across every industry.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {capabilities.map((item, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Link href={item.href} className="block h-full">
                                <div
                                    className={`relative group glass rounded-2xl p-8 border border-white/5 ${item.border} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.15)] cursor-pointer overflow-hidden h-full`}
                                >
                                    {/* Hover glow */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <span className="text-4xl">{item.icon}</span>
                                            <div className="w-8 h-8 rounded-full border border-sky-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-sky-500/60 group-hover:bg-sky-500/10">
                                                <ArrowRight size={14} className="text-sky-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-100 transition-colors">{item.title}</h3>
                                        <p className="text-white/45 text-sm leading-relaxed mb-6">{item.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 rounded-full border border-sky-500/15 text-sky-400/70 bg-sky-500/5 group-hover:border-sky-500/30 group-hover:text-sky-400 transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <Link href="/solutions">
                        <button className="btn-outline flex items-center gap-2">
                            All Solutions <ArrowRight size={16} />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
