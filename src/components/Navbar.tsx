"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 w-auto min-w-[320px] max-w-2xl px-6 z-50 transition-all duration-300 rounded-full",
                scrolled
                    ? "bg-white/[0.05] backdrop-blur-[30px] border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] py-3"
                    : "bg-transparent py-6 border border-transparent"
            )}
        >
            <div className="flex justify-between items-center w-full gap-8">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tighter hover:text-white/80 transition-opacity flex items-center justify-center h-full leading-none"
                >
                    HY.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 border-l border-white/20 pl-6 h-6">
                        <Link href="https://github.com/HadiYoussef2005" target="_blank" className="hover:text-white/80 transition-colors opacity-80 hover:opacity-100">
                            <Github className="w-[18px] h-[18px]" />
                        </Link>
                        <Link href="https://linkedin.com/in/hadiy" target="_blank" className="hover:text-white/80 transition-colors opacity-80 hover:opacity-100">
                            <Linkedin className="w-[18px] h-[18px]" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white/90 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-4 bg-black/40 backdrop-blur-[40px] border border-white/20 rounded-[2rem] overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                    >
                        <div className="flex flex-col items-center py-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-6 mt-2 border-t border-white/10 pt-4 w-full justify-center">
                                <Link href="https://github.com/HadiYoussef2005" target="_blank" className="hover:text-white transition-colors opacity-80">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com/in/hadiy" target="_blank" className="hover:text-white transition-colors opacity-80">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
