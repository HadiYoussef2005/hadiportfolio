"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

            {/* Simplified Background Blobs (no SVG filter) */}
            <div className="absolute inset-0 bg-background overflow-hidden flex justify-center items-center">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob will-change-transform" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob will-change-transform" style={{ animationDelay: '2s' }} />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob will-change-transform" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative backdrop-blur-3xl bg-white/[0.02] border border-white/20 p-12 rounded-[3rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden"
                >
                    {/* Gloss Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] relative z-10">
                        Hadi Youssef.
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide relative z-10">
                        Software Engineering @ Western + HBA @ Ivey.
                        <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 font-medium"> fluid</span> thinking for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 font-medium">solid</span> results.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <Link
                                href="#experience"
                                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 font-medium text-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-white/20"
                            >
                                <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                                <span className="relative flex items-center">
                                    Explore Work
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#contact"
                                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 font-medium text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
