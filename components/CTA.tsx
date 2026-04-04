"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative glass rounded-3xl p-12 md:p-20 overflow-hidden border border-sky-500/15 text-center"
                >
                    {/* Background glows */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
                    {/* Grid pattern */}
                    <div className="absolute inset-0 grid-bg opacity-20 rounded-3xl" />
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                        >
                            <Zap className="text-black" size={26} strokeWidth={2.5} />
                        </motion.div>

                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Ready to Build the{" "}
                            <span className="text-gradient">Future?</span>
                        </h2>
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Join forward-thinking companies that leverage our cutting-edge AI, XR, and cloud solutions to drive digital innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="btn-primary group flex items-center gap-2">
                                    <span>Start a Project</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/solutions">
                                <button className="btn-outline">
                                    Explore Solutions
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
