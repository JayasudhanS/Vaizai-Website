"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
    Services: [
        { label: "Artificial Intelligence", href: "/solutions" },
        { label: "AR / VR / XR", href: "/solutions" },
        { label: "Software Development", href: "/solutions" },
        { label: "Game Development", href: "/solutions" },
        { label: "Cloud & DevOps", href: "/solutions" },
    ],
    Products: [
        { label: "NovaFlow Studio", href: "/products" },
        { label: "VisionGrid Analytics", href: "/products" },
        { label: "NeuroSync AI", href: "/products" },
        { label: "HoloVerse Platform", href: "/products" },
        { label: "EduXR Suite", href: "/products" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-sky-500/10 pt-20 pb-10 px-6">
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center mb-6 group w-fit">
                            <Image 
                                src="/images/Logos/VaizAi-removebg-preview.png" 
                                alt="Vaizai Logo" 
                                width={300} 
                                height={85} 
                                className="w-auto h-16 sm:h-[5.5rem] transition-transform duration-300 group-hover:scale-[1.02]" 
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
                            Building the future beyond reality — next-gen digital ecosystems powered by AI, XR, and cloud technologies (Mostly remote).
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-white/50">
                            <a href="mailto:contact@vaizai.in" className="flex items-center gap-2 hover:text-sky-400 transition-colors group">
                                <Mail size={14} className="text-sky-500" />
                                contact@vaizai.in
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="tel:+917418976102" className="flex items-center gap-2 hover:text-sky-400 transition-colors group">
                                <Phone size={14} className="text-sky-500" />
                                +91 7418976102
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <p className="flex items-start gap-2">
                                <MapPin size={14} className="text-sky-500 mt-0.5 shrink-0" />
                                Kinathukadavu, Coimbatore, Tamil Nadu 642109
                            </p>
                            <a
                                href="https://www.linkedin.com/in/vaizai-solutions-02602b3b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-sky-400 transition-colors group w-fit mt-1"
                            >
                                <Linkedin size={14} className="text-sky-500" />
                                linkedin.com/in/vaizai-solutions
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide uppercase">{category}</h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-white/40 text-sm hover:text-sky-400 transition-colors hover:translate-x-1 inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} Vaizai Technologies. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/vaizai-solutions-02602b3b8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={14} />
                        </a>
                        <p className="text-white/20 text-xs flex items-center gap-1">
                            Building the future beyond reality
                            <span className="text-sky-500">✦</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
