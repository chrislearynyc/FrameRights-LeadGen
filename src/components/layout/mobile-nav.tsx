"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { href: "#why", label: "Why" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#waitlist", label: "Join Waitlist" },
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden relative z-50 p-2 -mr-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-slate-900 origin-center"
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-0.5 w-6 bg-slate-900"
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-slate-900 origin-center"
                        transition={{ duration: 0.2 }}
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 sm:hidden"
                            onClick={() => setIsOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed top-16 left-0 right-0 bg-white border-b border-slate-100 shadow-lg z-50 sm:hidden"
                        >
                            <nav className="max-w-5xl mx-auto px-6 py-6">
                                <ul className="space-y-4">
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.href}>
                                            <a
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors py-2"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
