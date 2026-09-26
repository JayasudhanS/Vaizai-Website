"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, Linkedin } from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@vaizai.in", href: "mailto:contact@vaizai.in" },
    { icon: Phone, label: "Phone", value: "+91 7418976102", href: "tel:+917418976102" },
    { icon: MapPin, label: "Address", value: "Kinathukadavu, Coimbatore, Tamil Nadu 642109", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vaizai-solutions", href: "https://www.linkedin.com/in/vaizai-solutions-02602b3b8/" },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
    };

    return (
        <div className="pt-28 pb-20 px-6 min-h-screen">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-sky-500/4 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-label">📞 Contact</span>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Let&#39;s <span className="text-gradient">Talk</span>
                    </h1>
                    <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
                        Whether you have a question about pricing, platforms, or want to start a project — our team is ready.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/3 flex flex-col gap-4"
                    >
                        {contactInfo.map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/20 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                                        <Icon size={16} className="text-sky-400" />
                                    </div>
                                    <div>
                                        <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-white/80 text-sm hover:text-sky-400 transition-colors font-medium">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-white/60 text-sm leading-relaxed">{value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Extra info card */}
                        <div className="glass rounded-2xl p-6 border border-sky-500/15 bg-sky-500/4 flex-1">
                            <h4 className="text-sky-400 font-semibold text-sm mb-3">Response Time</h4>
                            <p className="text-white/50 text-sm leading-relaxed">
                                We aim to respond within <strong className="text-white/70">24 hours</strong> on business days (Mon–Fri, 9am–6pm IST).
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:w-2/3 glass rounded-2xl p-8 md:p-10 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

                        <h2 className="text-2xl font-bold text-white mb-8 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Send a Message
                        </h2>

                        <form className="relative z-10 flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    { id: "firstName", label: "First Name", placeholder: "Jane", type: "text" },
                                    { id: "lastName", label: "Last Name", placeholder: "Doe", type: "text" },
                                ].map(({ id, label, placeholder, type }) => (
                                    <div key={id} className="flex flex-col gap-2">
                                        <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">{label}</label>
                                        <input
                                            type={type}
                                            required
                                            placeholder={placeholder}
                                            value={form[id as keyof typeof form]}
                                            onChange={e => setForm({ ...form, [id]: e.target.value })}
                                            className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 focus:bg-sky-500/3 transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="jane@company.com"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 focus:bg-sky-500/3 transition-all placeholder:text-white/20"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="Tell us about your project..."
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 focus:bg-sky-500/3 transition-all placeholder:text-white/20 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary flex items-center justify-center gap-2 mt-2"
                            >
                                <span>Send Message</span>
                                <Send size={15} />
                            </button>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm"
                                >
                                    <CheckCircle size={18} className="shrink-0" />
                                    Message sent! We&#39;ll get back to you within 24 hours.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
