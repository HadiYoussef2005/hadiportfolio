"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="container px-6 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About Me</h2>
                            <div className="text-muted-foreground space-y-4 leading-relaxed">
                                <p>
                                    I&apos;m <strong>Hadi Youssef</strong>, a Software Engineering and Business student at Western University and the Ivey Business School with a passion for building at the intersection of technology, research, and entrepreneurship.
                                </p>
                                <p>
                                    In my previous experience, I gained hands-on experience as a Machine Learning Research Intern, co-authoring peer-reviewed work on improving large language model accuracy, and as a Software Engineering Intern at SwarmZero, contributing to agent workflows and infrastructure for a successful product launch.
                                </p>
                                <p>
                                    Beyond internships, I’ve explored projects that combine creativity with technical execution, from winning WaffleHacks with an AI-powered presentation builder to designing productivity tools that streamline task management.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Education</h3>
                            <div className="space-y-8">
                                <div className="relative pl-6 border-l border-primary/20">
                                    <h4 className="font-semibold text-lg">Ivey Business School</h4>
                                    <p className="text-primary font-medium">HBA, Honours Business Administration</p>
                                    <p className="text-sm text-muted-foreground mt-1">July 2025 - June 2027</p>
                                </div>
                                <div className="relative pl-6 border-l border-primary/20">
                                    <h4 className="font-semibold text-lg">Western University</h4>
                                    <p className="text-primary font-medium">BESc, Software Engineering</p>
                                    <p className="text-sm text-muted-foreground mt-1">September 2023 - June 2027</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            Top Skills
                        </h3>
                        <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Languages</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["Java", "Python", "Go", "JavaScript", "TypeScript", "C#", "SQL", "Kotlin", "Rust"].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "FastAPI", "Spring Boot", "MongoDB", "Docker", "PostgreSQL", "Express.js", "LangChain", "Linux"].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
