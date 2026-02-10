"use client";

import { motion } from 'framer-motion';
import './CTASection.css';

export default function CTASection() {
    const features = [
        { icon: '⚡', text: 'Quick Response' },
        { icon: '💯', text: 'Quality Guaranteed' },
        { icon: '🎯', text: 'Goal-Oriented' },
        { icon: '🔒', text: 'Secure & Reliable' },
    ];

    return (
        <section className="cta-section">
            {/* Animated Background Elements */}
            <div className="cta-bg-shapes">
                <div className="cta-shape cta-shape-1"></div>
                <div className="cta-shape cta-shape-2"></div>
                <div className="cta-shape cta-shape-3"></div>
            </div>

            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="cta-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        🚀 Start Your Journey
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Let's Build Something <span className="highlight">Amazing</span> Together
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="cta-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ready to transform your business? Get a free consultation and discover
                        how we can help you achieve your digital goals.
                    </motion.p>

                    {/* Features */}
                    <motion.div
                        className="cta-features"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="cta-feature-item"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="feature-icon">{feature.icon}</span>
                                <span className="feature-text">{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.a
                            href="/contact"
                            className="btn btn-primary btn-lg cta-btn-main"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get Free Consultation</span>
                            <span className="btn-arrow">→</span>
                        </motion.a>
                        <motion.a
                            href="tel:+918368508556"
                            className="btn btn-outline btn-lg cta-btn-secondary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="phone-icon">📞</span>
                            <span>Call +91 836 850 8556</span>
                        </motion.a>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.p
                        className="cta-trust"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        ⭐ Trusted by 200+ businesses across India
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
