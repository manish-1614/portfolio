'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Experience', href: '/experience' },
        { label: 'Knowledge', href: '/knowledge' },
        { label: 'Insights', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
            <div className="container mx-auto flex h-16 items-center px-4 max-w-6xl justify-between">
                <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                    Manish<span className="text-blue-500">.</span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 md:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

