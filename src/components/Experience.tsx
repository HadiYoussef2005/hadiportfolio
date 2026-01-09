"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const Experience = () => {
    const experiences = [
        {
            company: "IDSL",
            role: "ML Research Intern",
            period: "May 2025 - Sep 2025",
            location: "London, Ontario",
            description: [
                "Built a secure MCP Server with FastAPI & JWT-scoped access control.",
                "Developed async client-server architecture using Python and OpenAI tools API.",
                "Designed scoped JWT permissions for fine-grained agent workflow access.",
            ],
        },
        {
            company: "SwarmZero",
            role: "Software Engineer",
            period: "May 2025 - Aug 2025",
            location: "Toronto, Ontario",
            description: [
                "Engineered agentic workflows (summarizer, research) using SwarmZero SDK.",
                "Implemented FastAPI endpoints for chat functionality.",
                "Contributed to public launch, onboarding 100+ users in the first week.",
            ],
        },
        {
            company: "Western University",
            role: "ML Research Intern",
            period: "May 2024 - Sep 2024",
            location: "Western University",
            description: [
                "Won NSERC scholarship. Optimized Corrective RAG systems.",
                "Engineered RESTful APIs and Front-end systems.",
            ],
        },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight drop-shadow-sm">Experience</h2>
                    <p className="text-blue-200/60 text-lg font-light">My fluid professional journey.</p>
                </motion.div>

                <div ref={containerRef} className="max-w-4xl mx-auto relative ml-4 md:ml-0 md:pl-0 space-y-12">
                    {/* Background Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-transparent">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="bg-gradient-to-b from-indigo-500 to-transparent w-full origin-top"
                        />
                    </div>


                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot (Liquid Drop) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10"
                            />

                            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                                <div className="md:col-span-4 md:text-right mb-2 md:mb-0">
                                    <h3 className="text-xl font-medium text-white tracking-tight">{exp.company}</h3>
                                    <div className="flex items-center md:justify-end gap-2 text-sm text-cyan-100/70 mt-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <div className="md:col-span-8 group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05] hover:border-white/40 hover:shadow-[0_20px_60px_-10px_rgba(31,38,135,0.4)]">
                                    {/* Liquid Highlight */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]" />

                                    <h4 className="text-lg font-medium text-cyan-300 mb-3 flex items-center gap-2 relative z-10">
                                        <Briefcase className="w-4 h-4" />
                                        {exp.role}
                                    </h4>
                                    <ul className="space-y-3 text-blue-100/80 text-sm leading-relaxed relative z-10">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 text-cyan-400">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
