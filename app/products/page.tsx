"use client";

import { motion } from "framer-motion";

const products = [
    {
        title: "NovaFlow Studio",
        tagline: "Design, Build & Collaborate",
        description: "A cloud-based platform empowering teams to plan, design, and manage digital projects with automation and real-time collaboration.",
        stats: [{ v: "850K+", l: "Projects" }, { v: "+38%", l: "Efficiency" }],
        color: "from-sky-500 to-blue-600",
        badge: "🚀 Productivity",
    },
    {
        title: "VisionGrid Analytics",
        tagline: "Transform Data into Insights",
        description: "Convert complex datasets into interactive dashboards that power faster, smarter business decisions.",
        stats: [{ v: "5B+", l: "Data Points" }, { v: "+60%", l: "Decision Speed" }],
        color: "from-blue-500 to-cyan-500",
        badge: "📊 Analytics",
    },
    {
        title: "NeuroSync AI",
        tagline: "Human-like AI Decision Engine",
        description: "Advanced predictive analytics and autonomous decision-making systems designed for mission-critical industries.",
        stats: [],
        color: "from-cyan-400 to-sky-600",
        badge: "🧠 AI Core",
    },
    {
        title: "HoloVerse Platform",
        tagline: "Next-Gen Metaverse Infrastructure",
        description: "Multi-user immersive virtual world platform enabling avatar-based collaboration and digital twin environments.",
        stats: [],
        color: "from-indigo-500 to-blue-500",
        badge: "🌐 Metaverse",
    },
    {
        title: "AstraMind Engine",
        tagline: "AI-Powered AR Smart Assistant",
        description: "An augmented reality assistant with voice and gesture interaction for real-world guidance and field operations.",
        stats: [],
        color: "from-sky-400 to-blue-500",
        badge: "🥽 AR/XR",
    },
    {
        title: "QuantumOps Cloud",
        tagline: "High-Performance AI & Simulation Cloud",
        description: "GPU-powered cloud infrastructure optimized for AI model training and real-time high-fidelity simulations.",
        stats: [],
        color: "from-blue-600 to-cyan-400",
        badge: "☁️ Cloud",
    },
    {
        title: "Sentinel Vision AI",
        tagline: "Intelligent Computer Vision System",
        description: "Computer vision solution for advanced surveillance, object detection, and behavior analysis.",
        stats: [],
        color: "from-sky-600 to-blue-400",
        badge: "👁️ Vision AI",
    },
    {
        title: "EduXR Suite",
        tagline: "Immersive Learning Ecosystem",
        description: "VR-based education platform offering gamified learning experiences and AI-powered adaptive tutoring.",
        stats: [],
        color: "from-cyan-500 to-sky-400",
        badge: "🎓 EdTech",
    },
    {
        title: "FlowMesh DevKit",
        tagline: "No-Code XR App Builder",
        description: "A drag-and-drop development toolkit that empowers teams to build, deploy, and iterate XR and web applications without writing a single line of code.",
        stats: [{ v: "500+", l: "Apps Built" }, { v: "10×", l: "Faster Dev" }],
        color: "from-violet-500 to-sky-500",
        badge: "🛠️ DevTools",
    },
];

export default function ProductsPage() {
    return (
        <div className="pt-28 pb-20 px-6 min-h-screen">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="section-label">🛠 Products</span>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Our <span className="text-gradient">Products</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
                        A suite of revolutionary digital platforms designed to scale your operations and redefine your industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                            className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-sky-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.15)]"
                        >
                            {/* Card header gradient */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${product.color}`} />

                            <div className="p-7">
                                <div className="flex items-start justify-between mb-5">
                                    <span className="text-xs px-3 py-1 rounded-full border border-sky-500/20 text-sky-400/80 bg-sky-500/5 font-medium">
                                        {product.badge}
                                    </span>
                                    {product.stats.length > 0 && (
                                        <div className="flex gap-4">
                                            {product.stats.map((s, si) => (
                                                <div key={si} className="text-right">
                                                    <div
                                                        className="text-lg font-black"
                                                        style={{
                                                            background: `linear-gradient(120deg, #fff 0%, #38bdf8 100%)`,
                                                            WebkitBackgroundClip: "text",
                                                            WebkitTextFillColor: "transparent",
                                                            backgroundClip: "text",
                                                            fontFamily: "'Space Grotesk', sans-serif"
                                                        }}
                                                    >
                                                        {s.v}
                                                    </div>
                                                    <div className="text-white/30 text-[10px] uppercase tracking-wider">{s.l}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-100 transition-colors"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {product.title}
                                </h3>
                                <p className="text-sky-400/70 text-xs font-semibold tracking-wide uppercase mb-4">{product.tagline}</p>
                                <p className="text-white/40 text-sm leading-relaxed">{product.description}</p>

                                <div className={`mt-6 h-px w-full bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
