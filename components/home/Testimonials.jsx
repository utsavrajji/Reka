"use client";

import { motion } from 'framer-motion';
import './Testimonials.css';

export default function Testimonials() {
    const handleMouseEnter = (videoElement) => {
        videoElement.muted = false;
        videoElement.play();
    };

    const handleMouseLeave = (videoElement) => {
        videoElement.pause();
        videoElement.currentTime = 0;
    };
    const testimonials = [
        {
            id: 1,
            name: 'Client Name 1',
            role: 'CEO, Company Name',
            videoUrl: '/videos/testimonial-1.mp4', // Upload your video here
            thumbnail: '/images/testimonial-1-thumb.jpg', // Optional thumbnail
            quote: 'Working with Reka Creative Labs transformed our business. Their expertise in digital marketing helped us grow 300%!',
        },
        {
            id: 2,
            name: 'Client Name 2',
            role: 'Founder, Startup XYZ',
            videoUrl: '/videos/testimonial-2.mp4',
            thumbnail: '/images/testimonial-2-thumb.jpg',
            quote: 'The team at Reka delivered beyond our expectations. Professional, creative, and results-driven!',
        },
        {
            id: 3,
            name: 'Client Name 3',
            role: 'Marketing Director, Brand ABC',
            videoUrl: '/videos/testimonial-3.mp4',
            thumbnail: '/images/testimonial-3-thumb.jpg',
            quote: 'Best digital agency we\'ve worked with. They understand business growth and deliver real results.',
        },
        {
            id: 4,
            name: 'Client Name 4',
            role: 'Owner, E-commerce Store',
            videoUrl: '/videos/testimonial-4.mp4',
            thumbnail: '/images/testimonial-4-thumb.jpg',
            quote: 'Our online sales doubled within 3 months. Reka Creative Labs knows how to drive real business results!',
        },
        {
            id: 5,
            name: 'Client Name 5',
            role: 'Director, Tech Company',
            videoUrl: '/videos/testimonial-5.mp4',
            thumbnail: '/images/testimonial-5-thumb.jpg',
            quote: 'Exceptional service and outstanding results. They truly care about their clients\' success.',
        },
        {
            id: 6,
            name: 'Client Name 6',
            role: 'Founder, Digital Brand',
            videoUrl: '/videos/testimonial-6.mp4',
            thumbnail: '/images/testimonial-6-thumb.jpg',
            quote: 'From branding to digital marketing, Reka handled everything perfectly. Highly recommended!',
        },
    ];

    return (
        <section className="section testimonials">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="badge">Client Success Stories</div>
                    <h2>What Our Clients Say</h2>
                    <p className="section-description">
                        Don't just take our word for it. Hear from the businesses we've helped grow.
                    </p>
                </motion.div>

                {/* Video Testimonials Grid */}
                <div className="testimonials-video-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-video-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Video Container */}
                            <div
                                className="video-container"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    handleMouseEnter(video);
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    handleMouseLeave(video);
                                }}
                            >
                                <video
                                    className="testimonial-video"
                                    playsInline
                                    preload="metadata"
                                >
                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Hover Overlay */}
                                <div className="video-overlay">
                                    <div className="play-button">
                                        <svg
                                            width="64"
                                            height="64"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                            <path d="M23 9 L23 15 M20 10 L20 14"></path>
                                        </svg>
                                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                                            Hover for Sound
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="testimonials-cta text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>Ready to Join Our Success Stories?</h3>
                    <a href="/contact" className="btn btn-primary btn-lg">
                        Get Started Today
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
