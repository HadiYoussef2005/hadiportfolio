"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import React from "react";

const Contact = () => {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setEmail("");
                setMessage("");
                // Reset status after 3 seconds
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                console.error(data.error);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Liquid Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-blob" />

            <div className="container px-6 mx-auto text-center max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-3xl bg-white/[0.02] border border-white/20 p-8 md:p-12 rounded-[3rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.2)]"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white animate-shimmer bg-[length:200%_auto]">
                        Get in Touch
                    </h2>
                    <p className="text-blue-100/70 mb-10 text-lg font-light">
                        Building something cool? Let's chat.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div className="relative group">
                            <div className="absolute left-4 top-4 text-cyan-400/50 group-focus-within:text-cyan-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                disabled={status === "sending"}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.03] transition-all duration-300 disabled:opacity-50"
                            />
                        </div>

                        <div className="relative group">
                            <textarea
                                required
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message..."
                                disabled={status === "sending"}
                                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.03] transition-all duration-300 resize-none disabled:opacity-50"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:animate-wobble disabled:opacity-70 disabled:pointer-events-none"
                        >
                            <div className="relative bg-black/20 backdrop-blur-md rounded-2xl px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                                <div className="flex items-center justify-center gap-2 text-white font-medium text-lg">
                                    {status === "sending" ? (
                                        <span>Sending...</span>
                                    ) : status === "success" ? (
                                        <span className="text-green-300">Message Sent!</span>
                                    ) : status === "error" ? (
                                        <span className="text-red-300">Error - Try Again</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.button>

                        <p className="text-center text-sm text-white/30 mt-4">
                            Direct Email: <a href="mailto:hyoussef.hba2027@ivey.ca" className="text-cyan-400 hover:underline">hyoussef.hba2027@ivey.ca</a>
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
