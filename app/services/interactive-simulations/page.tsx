"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

const features = [
    { title: "Realistic Physics Engine", desc: "Powered by advanced physics simulation for true-to-life training scenarios." },
    { title: "Multi-user Environments", desc: "Up to 100 concurrent trainees in a single shared virtual space." },
    { title: "Progress Tracking & Analytics", desc: "Real-time dashboards to monitor trainee performance and skill acquisition." },
    { title: "Scenario Authoring Tool", desc: "No-code builder to create and customize training scenarios without developer help." },
    { title: "Cross-platform Deployment", desc: "Runs on VR headsets, desktops, tablets, and web browsers." },
    { title: "AI-driven Adaptive Difficulty", desc: "Scenarios adjust difficulty based on individual learner performance metrics." },
];

const useCases = [
    { icon: "🏥", title: "Medical Training", desc: "Surgical procedures, emergency response, and patient care simulations used by leading hospitals." },
    { icon: "✈️", title: "Aviation & Defense", desc: "Pilot and crew training with cockpit fidelity and realistic weather systems." },
    { icon: "🏗️", title: "Industrial Safety", desc: "Construction and manufacturing safety drills that reduce workplace accidents by 60%." },
    { icon: "🔬", title: "Science & Research", desc: "Virtual lab environments for experiments without physical equipment or risk." },
];

const stats = [
    { v: "72%", l: "Higher retention vs. classroom training" },
    { v: "60%", l: "Reduction in training costs" },
    { v: "3×", l: "Faster skill acquisition" },
    { v: "50+", l: "Enterprise clients globally" },
];

export default function InteractiveSimulationsPage() {
    return (
        <div className="pt-28 pb-24 px-6 min-h-screen">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)" }} />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-sky-400 text-sm mb-12 transition-colors group">
                        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
                    <span className="section-label">🧠 Interactive Simulations</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 mt-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Train Smarter,<br />
                        <span className="text-gradient">Not Harder</span>
                    </h1>
                    <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
                        Immersive simulation environments that transform how people learn — reducing cost, increasing retention, and making training safer and more effective than ever.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-sky-500/10 bg-sky-500/8 mb-24">
                    {stats.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center py-8 px-4 bg-[#080a0f]/90 hover:bg-sky-500/5 transition-colors text-center group">
                            <span className="text-3xl md:text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                                style={{ background: "linear-gradient(120deg,#fff 0%,#38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Space Grotesk', sans-serif" }}>
                                {s.v}
                            </span>
                            <span className="text-white/35 text-xs uppercase tracking-widest">{s.l}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Features */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Platform <span className="text-gradient-sky">Features</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/20 transition-colors group flex gap-4">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-white/90 font-semibold text-sm mb-1 group-hover:text-sky-100 transition-colors">{f.title}</h3>
                                    <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Use Cases */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Industry <span className="text-gradient-sky">Use Cases</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {useCases.map((u, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass rounded-2xl p-7 border border-white/5 hover:border-sky-500/20 transition-colors group">
                                <div className="text-3xl mb-4">{u.icon}</div>
                                <h3 className="font-bold text-white/90 text-base mb-2 group-hover:text-sky-100 transition-colors">{u.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{u.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="glass rounded-3xl p-10 md:p-14 border border-sky-500/15 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
                    <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ready to <span className="text-gradient">Transform Training?</span>
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto mb-8 font-light">
                        Let us build a custom simulation environment tailored to your industry and workforce.
                    </p>
                    <Link href="/contact">
                        <button className="btn-primary"><span>Start a Project</span></button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
