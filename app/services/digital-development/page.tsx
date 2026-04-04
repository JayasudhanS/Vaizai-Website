"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

const features = [
    { title: "Unity & Unreal Engine Development", desc: "AAA-quality interactive experiences built with the world's leading real-time engines." },
    { title: "WebXR Applications", desc: "Browser-based XR experiences that require no app download — just a link." },
    { title: "Cross-platform Mobile Apps", desc: "iOS and Android applications built with React Native or native Swift/Kotlin." },
    { title: "Cloud-connected Backends", desc: "Scalable API and database architecture that powers real-time data in your applications." },
    { title: "CI/CD & DevOps Pipelines", desc: "Automated testing, build, and deployment pipelines for continuous delivery." },
    { title: "AR SDK Integration", desc: "ARKit, ARCore, and Vuforia integration for marker-based and markerless AR apps." },
];

const useCases = [
    { icon: "🏋️", title: "Fitness & Health Apps", desc: "AR-guided workout apps and personalized wellness platforms with real-time biometric feedback." },
    { icon: "🛒", title: "Retail & E-Commerce", desc: "Try-before-you-buy AR apps that let customers visualize products in their own space." },
    { icon: "🏫", title: "EdTech Platforms", desc: "Interactive learning apps with gamified content, AR textbooks, and adaptive AI tutors." },
    { icon: "🏭", title: "Industrial IoT Dashboards", desc: "Real-time monitoring apps that overlay sensor data on physical equipment using AR." },
];

const stats = [
    { v: "50+", l: "Apps shipped" },
    { v: "4.8★", l: "Average App Store rating" },
    { v: "10M+", l: "End-user downloads" },
    { v: "99.5%", l: "Crash-free sessions" },
];

export default function DigitalDevelopmentPage() {
    return (
        <div className="pt-28 pb-24 px-6 min-h-screen">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)" }} />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-sky-400 text-sm mb-12 transition-colors group">
                        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
                    <span className="section-label">🚀 Digital Development</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 mt-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Built for the<br />
                        <span className="text-gradient">Digital Future</span>
                    </h1>
                    <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
                        We design and engineer high-performance applications — from immersive XR experiences to scalable cloud-connected platforms — built to last and built to grow.
                    </p>
                </motion.div>

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

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        What We <span className="text-gradient-sky">Deliver</span>
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

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Industries We <span className="text-gradient-sky">Serve</span>
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

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="glass rounded-3xl p-10 md:p-14 border border-sky-500/15 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
                    <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Have an App <span className="text-gradient">Idea?</span>
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto mb-8 font-light">
                        Share your concept and our engineering team will help you architect and build it from the ground up.
                    </p>
                    <Link href="/contact">
                        <button className="btn-primary"><span>Start Building</span></button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
