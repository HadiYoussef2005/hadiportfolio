"use client";
import { useScroll, useVelocity, useSpring, useTransform, motion } from "framer-motion";
import React from "react";

export default function JellyScroll({ children }: { children: React.ReactNode }) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Smooth out the velocity so the skew isn't jittery
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Map velocity to skew degrees
    // Faster scroll = more skew
    const skewY = useTransform(smoothVelocity, [-2000, 2000], [-10, 10]);

    return (
        <motion.div style={{ skewY, transformOrigin: "center center" }} className="w-full will-change-transform">
            {children}
        </motion.div>
    );
}
