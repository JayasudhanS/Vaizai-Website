"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Artificial Intelligence",
        description: "Intelligent systems that automate decisions, learn from data, and scale your operations exponentially.",
        features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "AI Automation Systems"],
        icon: "🧠",
        href: "/solutions/artificial-intelligence",
    },
    {
        number: "02",
        title: "AR / VR / XR",
        description: "Immersive digital realities that bridge physical and virtual worlds, creating transformative user experiences.",
        features: ["VR Training Simulations", "AR Navigation Systems", "Metaverse Development", "Digital Twin Solutions"],
        icon: "🥽",
        href: "/solutions/ar-vr-xr",
    },
    {
        number: "03",
        title: "Software Development",
        description: "Robust, scalable, and future-ready software solutions built for enterprise-level performance.",
        features: ["Web Applications", "Mobile Applications", "Enterprise Software", "SaaS Platforms"],
        icon: "💻",
        href: "/solutions/software-development",
    },
    {
        number: "04",
        title: "Game Development",
        description: "Engaging, visually rich games and interactive experiences for both entertainment and serious training.",
        features: ["Unity & Unreal Development", "Multiplayer Systems", "Simulation Games", "Serious Games"],
        icon: "🎮",
        href: "/solutions/game-development",
    },
    {
        number: "05",
        title: "Cloud & DevOps",
        description: "Resilient, high-availability cloud infrastructure with automated pipelines for continuous delivery.",
        features: ["Cloud Architecture", "CI/CD Pipelines", "Microservices", "Scalable Backend Systems"],
        icon: "☁️",
        href: "/solutions/cloud-devops",
    },
];

const smartSolutions = [
    {
        title: "Smart Infrastructure Systems",
        items: ["Digital Twin for Smart Cities", "Infrastructure Monitoring Dashboards", "Real-time IoT Data Visualization", "Urban Planning Simulations"],
        icon: "🏙️",
    },
    {
        title: "Education & Training Platforms",
        items: ["VR-based Skill Training", "Interactive Learning Systems", "Gamified Education Platforms", "Virtual Labs & Classrooms"],
        icon: "🎓",
    },
    {
        title: "Retail & E-Commerce Innovation",
        items: ["Virtual Shopping Experiences", "AR Product Visualization", "AI Recommendation Systems", "Customer Behavior Analytics"],
        icon: "🛍️",
    },
    {
        title: "Industrial & Manufacturing",
        items: ["Smart Factory Monitoring", "Predictive Maintenance (AI)", "Process Optimization Systems", "Worker Safety Simulation"],
        icon: "🏭",
    },
    {
        title: "Business Automation Systems",
        items: ["Workflow Automation Tools", "AI Chatbots & Assistants", "CRM & ERP Solutions", "Data-driven Decision Systems"],
        icon: "⚙️",
    },
];

export default function SolutionsPage() {
    return (
        <div className="pt-28 pb-20 px-6 min-h-screen">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="section-label">🌍 Services</span>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Our{" "}
                        <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
                        Advanced technological solutions customized for your industry, pioneering digital realities.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="space-y-5 mb-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                        >
                            <Link href={service.href} className="block">
                                <div className="group glass rounded-2xl p-8 border border-white/5 hover:border-sky-500/25 transition-all duration-400 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.12)] cursor-pointer">
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex items-center gap-5 md:w-80 shrink-0">
                                            <span className="text-white/15 font-black text-5xl font-mono">{service.number}</span>
                                            <div>
                                                <div className="text-3xl mb-1">{service.icon}</div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors">{service.title}</h3>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/45 text-sm leading-relaxed mb-4">{service.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.features.map((f) => (
                                                    <span key={f} className="text-xs px-3 py-1 rounded-full border border-sky-500/15 text-sky-400/70 bg-sky-500/5 group-hover:border-sky-500/30 group-hover:text-sky-400 transition-all duration-300">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="hidden md:flex items-center">
                                            <div className="w-10 h-10 rounded-full border border-sky-500/20 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-sky-500/10 transition-all duration-300">
                                                <ArrowRight size={16} className="text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Smart Digital Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <span className="section-label">🔹 Smart Digital Solutions</span>
                        <h2
                            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Industry-Specific <span className="text-gradient-sky">Innovation</span>
                        </h2>
                        <p className="text-white/45 max-w-xl mx-auto font-light">Specialized solutions for modern operational domains.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {smartSolutions.map((sol, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="glass p-7 rounded-2xl border border-white/5 hover:border-sky-500/20 transition-colors group"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{sol.icon}</span>
                                    <h3 className="text-base font-bold text-white group-hover:text-sky-100 transition-colors">{sol.title}</h3>
                                </div>
                                <ul className="space-y-2.5">
                                    {sol.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                                            <span className="text-sky-500 mt-0.5 shrink-0">▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
