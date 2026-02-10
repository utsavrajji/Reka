"use client";

import { motion } from 'framer-motion';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
    const stats = [
        { number: '200+', label: 'Happy Clients', icon: '😊' },
        { number: '500+', label: 'Projects Completed', icon: '🚀' },
        { number: '98%', label: 'Success Rate', icon: '📈' },
        { number: '24/7', label: 'Support Available', icon: '💬' },
    ];

    const features = [
        {
            icon: '🎯',
            title: 'Result-Driven Approach',
            description: 'We focus on delivering measurable results that directly impact your business growth and ROI.',
            color: '#036A3A',
        },
        {
            icon: '✨',
            title: 'Creative + Technical Expertise',
            description: 'Perfect blend of creative design thinking and cutting-edge technical implementation.',
            color: '#8CF665',
        },
        {
            icon: '💬',
            title: 'Transparent Communication',
            description: "Clear, honest communication at every step. You'll always know what's happening.",
            color: '#F6A965',
        },
        {
            icon: '💰',
            title: 'Affordable Pricing',
            description: 'Premium quality services at competitive prices. Great value for startups.',
            color: '#036A3A',
        },
        {
            icon: '🤝',
            title: 'Long-Term Partnership',
            description: "We're your growth partners committed to your long-term success.",
            color: '#8CF665',
        },
        {
            icon: '⚡',
            title: 'Fast Turnaround',
            description: 'Efficient processes ensure quick delivery without compromising quality.',
            color: '#F6A965',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="section why-choose-us">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="badge">Why Choose Us</div>
                    <h2 className="section-title">We Don't Just Market Brands,<br />We Build Success Stories</h2>
                    <p className="section-description">
                        India's best digital agency for growing businesses. We combine creativity,
                        technology, and strategy to deliver exceptional results.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            variants={statVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="feature-icon-wrapper" style={{ '--accent-color': feature.color }}>
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-accent" style={{ background: feature.color }}></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="why-choose-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3>Ready to Transform Your Business?</h3>
                    <p>Join 200+ successful businesses that trust Reka Creative Labs</p>
                    <motion.a
                        href="/contact"
                        className="btn btn-primary btn-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Today →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
