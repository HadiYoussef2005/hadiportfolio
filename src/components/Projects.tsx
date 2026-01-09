"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code, Trophy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Projects = () => {
    const items = [
        {
            type: "Publication",
            title: "SCMRAG: Self-Corrective Multihop RAG",
            description: "A system for large language model agents that improves retrieval accuracy through self-correction mechanisms.",
            tech: ["LangChain", "LLMs", "RAG", "Research"],
            link: "#",
            icon: BookOpen,
            featured: true,
        },
        {
            type: "Project",
            title: "SwarmZero Agent Workflows",
            description: "Engineered agentic workflows including summarizer and research agents using the SwarmZero SDK. Contributed to a successful product launch.",
            tech: ["Python", "FastAPI", "AI Agents", "SwarmZero SDK"],
            link: "#",
            icon: Code,
        },
        {
            type: "Hackathon Win",
            title: "AI Presentation Builder",
            description: "Winner of WaffleHacks. An AI-powered tool that automatically generates presentations from text prompts.",
            tech: ["HTML/CSS", "JavaScript", "Flask", "Python", "LangChain", "Google Cloud Platform"],
            link: "#",
            icon: Trophy,
        },
        {
            type: "Project",
            title: "Kumon Tracker",
            description: "Built and deployed a barcode-based attendance and time-tracking system for a Kumon center, improving operational efficiency and adopted by 400+ active students and staff.",
            tech: ["React", "Node", "Express", "MongoDB", "TypeScript", "Firebase", "Vercel"],
            link: "#",
            icon: Code,
        },
    ];

    return (
        <section id="projects" className="py-24 bg-secondary/20">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects & Research</h2>
                    <p className="text-muted-foreground">Building and publishing cutting-edge work.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${index * 100}ms` }}
                            className={cn(
                                "group relative bg-card hover:bg-card/80 border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col animate-fadeIn opacity-0",
                                item.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
                            )}
                        >
                            <div className="p-8 flex flex-col h-full justify-between w-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
                                            <item.icon className="w-4 h-4" />
                                            {item.type}
                                        </div>
                                        {item.link !== "#" && (
                                            <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {item.featured && (
                                <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
