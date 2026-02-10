import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CometCardDemo from '@/components/ui/comet-card-demo';
import TeamSection from '@/components/ui/team-section';
import { BookIcon, TargetIcon, LightbulbIcon, XCircleIcon, CheckCircleIcon, RocketIcon, HeartIcon } from '@/components/ui/icon-components';
import './about.css';

export const metadata = {
    title: 'About Us - Reka Creative Labs',
    description: 'Learn about Reka Creative Labs, our mission, vision, and the team behind India\'s best digital agency for growth and innovation.',
};

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <section className="about-hero section">
                    <div className="container">
                        <div className="text-center">
                            <div className="badge">About Us</div>
                            <h1>We Build Success Stories, Not Just Websites</h1>
                            <p className="hero-description">
                                Reka Creative Labs is more than a digital agency—we&apos;re your growth partner in the digital landscape.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '3rem 0', textAlign: 'center' }}>
                    <div className="container">
                        <CometCardDemo />
                    </div>
                </section>


                <TeamSection />

                <section className="section story-section">
                    <div className="container">
                        <div className="story-card">
                            <BookIcon className="story-icon" size={48} />
                            <h2>Our Story</h2>
                            <p className="story-text">
                                Founded with a vision to help businesses thrive in the digital age, Reka Creative Labs has grown into one of India&apos;s most trusted digital agencies. We started with a simple belief: great design and smart technology can transform businesses.
                            </p>
                            <p className="story-text">
                                Today, we&apos;ve helped over <span className="highlight-stat">50+ businesses</span> achieve their digital goals, from startups taking their first steps online to established brands looking to scale their digital presence.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section mission-section">
                    <div className="container">
                        <div className="mission-content">
                            <TargetIcon className="mission-icon" size={48} />
                            <h2>Our Mission</h2>
                            <blockquote className="mission-quote">
                                To empower businesses with innovative digital solutions that drive real growth, build authentic connections with their audience, and create lasting impact in their industries.
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className="section philosophy-section">
                    <div className="container">
                        <div className="philosophy-header">
                            <LightbulbIcon className="philosophy-icon" size={48} />
                            <h2>Our Philosophy</h2>
                        </div>
                        <div className="problem-solution-grid">
                            <div className="problem-side">
                                <h3 className="side-title">The Problem</h3>
                                <ul className="philosophy-list">
                                    <li>
                                        <XCircleIcon className="icon-cross" size={20} />
                                        <span>Beautiful websites that don&apos;t convert</span>
                                    </li>
                                    <li>
                                        <XCircleIcon className="icon-cross" size={20} />
                                        <span>Social media that doesn&apos;t grow</span>
                                    </li>
                                    <li>
                                        <XCircleIcon className="icon-cross" size={20} />
                                        <span>Ads that bring clicks but no customers</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="gradient-divider"></div>
                            <div className="solution-side">
                                <h3 className="side-title">Our Solution</h3>
                                <ul className="philosophy-list">
                                    <li>
                                        <CheckCircleIcon className="icon-check" size={20} />
                                        <span>Reka Creative Labs exists to close this gap</span>
                                    </li>
                                    <li>
                                        <CheckCircleIcon className="icon-check" size={20} />
                                        <span>Growth should be simple, creative, and measurable</span>
                                    </li>
                                    <li>
                                        <CheckCircleIcon className="icon-check" size={20} />
                                        <span>Every solution generates outcomes — not vanity metrics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="text-center section-header">
                            <h2>What Makes Us Different</h2>
                        </div>
                        <div className="grid grid-3">
                            <div className="card text-center">
                                <TargetIcon className="feature-icon" size={48} />
                                <h3>Results-Focused</h3>
                                <p>We measure our success by your growth. Every strategy is designed to deliver measurable results and ROI.</p>
                            </div>
                            <div className="card text-center">
                                <RocketIcon className="feature-icon" size={48} />
                                <h3>Innovation-Driven</h3>
                                <p>We stay ahead of trends, using cutting-edge tools and strategies to give you a competitive advantage.</p>
                            </div>
                            <div className="card text-center">
                                <HeartIcon className="feature-icon" size={48} />
                                <h3>Client-Centric</h3>
                                <p>Your vision is our mission. We listen, understand, and deliver solutions tailored to your unique needs.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="text-center section-header">
                            <h2>Our Values</h2>
                        </div>
                        <div className="values-grid">
                            <div className="value-item">
                                <div className="value-number">01</div>
                                <h3>Excellence</h3>
                                <p>We never settle for good enough. Every project gets our best work.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-number">02</div>
                                <h3>Integrity</h3>
                                <p>Honest communication, transparent pricing, and ethical practices.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-number">03</div>
                                <h3>Growth</h3>
                                <p>We grow when you grow. Your success is our success.</p>
                            </div>
                            <div className="value-item">
                                <div className="value-number">04</div>
                                <h3>Innovation</h3>
                                <p>Always learning, always improving, always pushing boundaries.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container text-center">
                        <h2>Ready to Work Together?</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)' }}>
                            Let&apos;s discuss how we can help your business grow.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
