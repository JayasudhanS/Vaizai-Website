"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const perks = [
    { icon: "🌍", title: "Remote-First Culture", desc: "Work from anywhere with flexible scheduling and async-friendly processes." },
    { icon: "📚", title: "Continuous Learning", desc: "Annual stipend for courses, conferences, certifications, and books." },
    { icon: "❤️", title: "Health & Wellness", desc: "Comprehensive health coverage and dedicated mental wellness programs." },
    { icon: "⚡", title: "Innovation Time", desc: "20% of every sprint dedicated to exploratory side projects and research." },
];

const jobs = [
    { role: "Senior Frontend Engineer", dept: "Engineering", type: "Remote", level: "Senior" },
    { role: "Fullstack Developer", dept: "Engineering", type: "Remote", level: "Mid-Senior" },
    { role: "Cloud Engineer", dept: "Infrastructure", type: "Remote", level: "Mid" },
    { role: "3D Technical Artist", dept: "Design", type: "Hybrid", level: "Mid" },
    { role: "AI Research Scientist", dept: "R&D", type: "Remote", level: "Senior" },
    { role: "Product Manager", dept: "Product", type: "Remote", level: "Mid-Senior" },
    { role: "XR Developer", dept: "Engineering", type: "Remote", level: "Mid" },
    { role: "DevOps Engineer", dept: "Infrastructure", type: "Remote", level: "Mid" },
    { role: "Game Designer", dept: "Design", type: "Flexible", level: "Mid" },
    { role: "Robotics Engineer", dept: "Hardware", type: "On-site", level: "Senior" },
];

const deptBadge: Record<string, { color: string; bg: string }> = {
    Engineering:    { color: "#38bdf8", bg: "rgba(56,189,248,0.12)" },
    Design:         { color: "#818cf8", bg: "rgba(129,140,248,0.12)" },
    "R&D":          { color: "#34d399", bg: "rgba(52,211,153,0.12)" },
    Product:        { color: "#f0abfc", bg: "rgba(240,171,252,0.12)" },
    Infrastructure: { color: "#7dd3fc", bg: "rgba(125,211,252,0.12)" },
    Hardware:       { color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
};

export default function CareersPage() {
    return (
        <div className="pt-28 pb-28 px-6 min-h-screen">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }} />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)" }} />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <span className="section-label">💼 Careers</span>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Build the <span className="text-gradient">Future</span>{" "}
                        <span className="text-white/40 font-light">With Us</span>
                    </h1>
                    <p className="text-white/45 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        We&#39;re always looking for visionary thinkers and fearless builders to join our mission.
                    </p>
                </motion.div>

                {/* ── Perks — Apple Liquid Glass cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-28">
                    {perks.map((perk, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
                            className="relative group text-center cursor-default"
                            style={{ perspective: "800px" }}
                        >
                            {/* Liquid glass surface */}
                            <div
                                className="relative rounded-[22px] overflow-hidden p-7 h-full"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(28px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(28px) saturate(180%)",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    boxShadow: `
                                        inset 0 1px 0 rgba(255,255,255,0.12),
                                        inset 0 -1px 0 rgba(0,0,0,0.08),
                                        0 8px 32px rgba(0,0,0,0.28),
                                        0 2px 8px rgba(0,0,0,0.15)
                                    `,
                                }}
                            >
                                {/* Specular sheen — top light catch */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[44%] rounded-t-[22px] pointer-events-none opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.01) 100%)",
                                    }}
                                />
                                {/* Side light catch */}
                                <div
                                    className="absolute top-0 left-0 bottom-0 w-[30%] rounded-l-[22px] pointer-events-none"
                                    style={{
                                        background: "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
                                    }}
                                />
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="text-4xl mb-5 drop-shadow-lg">{perk.icon}</div>
                                    <h3 className="text-sm font-semibold text-white/90 mb-2 tracking-tight leading-snug">{perk.title}</h3>
                                    <p className="text-white/38 text-xs leading-relaxed font-light">{perk.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Open Positions ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-4xl font-black text-center mb-12"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Open <span className="text-gradient-sky">Positions</span>
                    </h2>

                    <div className="flex flex-col gap-3">
                        {jobs.map((job, i) => {
                            const badge = deptBadge[job.dept] ?? { color: "#38bdf8", bg: "rgba(56,189,248,0.12)" };
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.45, ease: "easeOut" }}
                                    whileHover={{ scale: 1.012 }}
                                    className="group relative"
                                >
                                    {/* Liquid glass job row */}
                                    <div
                                        className="relative rounded-2xl overflow-hidden flex items-center justify-between gap-4 px-6 py-5 transition-all duration-400"
                                        style={{
                                            background: "rgba(255,255,255,0.035)",
                                            backdropFilter: "blur(20px) saturate(160%)",
                                            WebkitBackdropFilter: "blur(20px) saturate(160%)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            boxShadow: `
                                                inset 0 1px 0 rgba(255,255,255,0.09),
                                                0 4px 20px rgba(0,0,0,0.22)
                                            `,
                                        }}
                                    >
                                        {/* Top sheen */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                                            }}
                                        />
                                        {/* Sky blue left border highlight on hover */}
                                        <div className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400"
                                            style={{ background: `linear-gradient(180deg, transparent, ${badge.color}, transparent)` }} />

                                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                                            <div>
                                                <h3 className="text-[0.95rem] font-semibold text-white/85 group-hover:text-white transition-colors duration-300 mb-1.5">
                                                    {job.role}
                                                </h3>
                                                <div className="flex items-center gap-2.5 flex-wrap">
                                                    {/* Dept badge — liquid glass */}
                                                    <span
                                                        className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide"
                                                        style={{
                                                            color: badge.color,
                                                            background: badge.bg,
                                                            border: `1px solid ${badge.color}30`,
                                                            backdropFilter: "blur(8px)",
                                                        }}
                                                    >
                                                        {job.dept}
                                                    </span>
                                                    <span className="text-white/25 text-[11px]">{job.type}</span>
                                                    <span className="text-white/18 text-[11px]">·</span>
                                                    <span className="text-white/25 text-[11px]">{job.level}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/contact" className="relative z-10 shrink-0">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.96 }}
                                                className="text-[11px] font-semibold px-5 py-2 rounded-full transition-all duration-300"
                                                style={{
                                                    color: "#38bdf8",
                                                    background: "rgba(56,189,248,0.08)",
                                                    border: "1px solid rgba(56,189,248,0.20)",
                                                    backdropFilter: "blur(12px)",
                                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                                                }}
                                                onMouseEnter={e => {
                                                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(56,189,248,0.90)";
                                                    (e.currentTarget as HTMLButtonElement).style.color = "#000";
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(56,189,248,0.45)";
                                                }}
                                                onMouseLeave={e => {
                                                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(56,189,248,0.08)";
                                                    (e.currentTarget as HTMLButtonElement).style.color = "#38bdf8";
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.08)";
                                                }}
                                            >
                                                Apply Now
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
