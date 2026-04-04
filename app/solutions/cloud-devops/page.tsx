"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

const features = [
    { title: "Cloud Architecture Design", desc: "AWS, GCP, and Azure multi-cloud and hybrid architectures designed for resilience and cost-efficiency." },
    { title: "CI/CD Pipelines", desc: "Automated build, test, and deploy workflows using GitHub Actions, GitLab CI, Jenkins, and ArgoCD." },
    { title: "Kubernetes & Container Orchestration", desc: "Production-grade Kubernetes clusters with auto-scaling, rolling deployments, and health checks." },
    { title: "Microservices Architecture", desc: "Decompose monoliths into independently deployable services with proper service mesh and observability." },
    { title: "Infrastructure as Code (IaC)", desc: "Terraform, Pulumi, and AWS CDK for reproducible, version-controlled cloud infrastructure." },
    { title: "Monitoring & Observability", desc: "End-to-end visibility with Prometheus, Grafana, OpenTelemetry, and centralized log management." },
];

const useCases = [
    { icon: "🚀", title: "Startup Scale-up", desc: "From MVP to millions of users — we architect systems that grow gracefully without accumulating debt." },
    { icon: "🏢", title: "Enterprise Migration", desc: "Lift-and-shift and re-architecture strategies to move legacy workloads to modern cloud platforms." },
    { icon: "🎮", title: "Game Backend Infrastructure", desc: "Low-latency global game servers, matchmaking, state sync, and live event infrastructure." },
    { icon: "🔒", title: "Security & Compliance", desc: "SOC 2, GDPR, and HIPAA-compliant cloud architectures with automated security scanning and patching." },
];

const stats = [
    { v: "99.99%", l: "Infrastructure uptime" },
    { v: "70%", l: "Avg cloud cost savings" },
    { v: "10min", l: "Avg deployment time" },
    { v: "0", l: "Major outages last 12mo" },
];

export default function CloudDevOpsPage() {
    return (
        <div className="pt-28 pb-24 px-6 min-h-screen">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)" }} />
            </div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-white/40 hover:text-sky-400 text-sm mb-12 transition-colors group">
                        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
                    <span className="section-label">☁️ Cloud & DevOps</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ship Faster,<br /><span className="text-gradient">Scale Further</span>
                    </h1>
                    <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
                        We design cloud-native infrastructure and DevOps pipelines that give your team velocity, confidence, and the ability to scale to any demand.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-sky-500/10 bg-sky-500/8 mb-24">
                    {stats.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center py-8 px-4 bg-[#080a0f]/90 hover:bg-sky-500/5 transition-colors text-center group">
                            <span className="text-3xl md:text-4xl font-black mb-1 group-hover:scale-110 transition-transform"
                                style={{ background: "linear-gradient(120deg,#fff 0%,#38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Space Grotesk', sans-serif" }}>{s.v}</span>
                            <span className="text-white/35 text-xs uppercase tracking-widest">{s.l}</span>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our <span className="text-gradient-sky">Services</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
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
                    <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Who We <span className="text-gradient-sky">Help</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {useCases.map((u, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
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
                        Ready to <span className="text-gradient">Move to Cloud?</span>
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto mb-8 font-light">We&#39;ll audit your current infrastructure and design a cloud strategy that cuts costs and boosts reliability.</p>
                    <Link href="/contact"><button className="btn-primary"><span>Get a Free Cloud Audit</span></button></Link>
                </motion.div>
            </div>
        </div>
    );
}
