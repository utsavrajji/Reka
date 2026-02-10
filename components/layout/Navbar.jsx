'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    // Transform navbar background opacity based on scroll
    const navbarBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{ backgroundColor: navbarBg }}
        >
            {/* <div className="navbar-glow"></div> */}
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link href="/" className="navbar-logo">
                        <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                            className="logo-container"
                        >
                            <Image
                                src="/logos/logo.png"
                                alt="Reka Creative Labs"
                                width={180}
                                height={50}
                                priority
                                className="logo-image"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                custom={index}
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link
                                    href={link.href}
                                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="nav-link-text">{link.label}</span>
                                    {pathname === link.href && (
                                        <motion.div
                                            className="active-indicator"
                                            layoutId="activeIndicator"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}

                        {/* CTA Button in Nav */}
                        <motion.a
                            href="/contact"
                            className="nav-cta-btn"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get Started</span>
                            <span className="nav-cta-arrow">→</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
