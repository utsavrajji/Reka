import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingCard from '@/components/ui/PricingCard';
import './services.css';

export const metadata = {
    title: 'Our Services - Reka Creative Labs',
    description: 'Comprehensive digital solutions including web design, development, digital marketing, SEO, social media, branding, and business growth strategies.',
};

export default function Services() {
    const pricingPlans = [
        {
            name: "Starter Boost",
            price: "₹15,000",
            description: "Content + AI-powered basic growth support",
            features: [
                "ReelCraft™ Video Editing Suite",
                "PixelPerfect™ Photo Enhancement",
                "AI Caption + Hashtag Engine",
                "Weekly Content Direction Plan"
            ],
            buttonText: "Get Started",
            buttonStyle: "primary"
        },
        {
            name: "Growth Accelerator",
            price: "₹25,000",
            description: "Leads + AI brand scaling systems",
            features: [
                "AdReels Pro™ Short-Form Ads",
                "LeadFlow™ Funnel Strategy Setup",
                "AI Audience Targeting Blueprint",
                "Conversion Boost Support",
                "Sales Follow-Up Optimization"
            ],
            buttonText: "Get Started",
            buttonStyle: "primary",
            featured: true
        },
        {
            name: "Premium Domination",
            price: "₹40,000",
            description: "End-to-end AI growth & content machine",
            features: [
                "Full Content Engine + Ads Support",
                "AI Script Writing & Viral Hooks Lab",
                "CreatorShoot™ Lighting & Shooting Training",
                "Sales Conversion Optimization System",
                "Smart Retargeting Growth Strategy"
            ],
            buttonText: "Get Started",
            buttonStyle: "primary"
        },
        {
            name: "Custom Empire Plan",
            price: "Contact Us",
            description: "High-end business automation + website + AI consulting",
            features: [
                "Custom SEO Website Development",
                "AI Automation & Business Workflows",
                "Personal Brand Scaling Masterplan",
                "Dedicated Growth Manager Support",
                "Advanced Ads + Funnel Architecture",
                "1-on-1 Consulting & Team Training"
            ],
            buttonText: "Contact Us",
            buttonStyle: "secondary"
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            ),
            title: 'Web Design & Development',
            description: 'High-performance, responsive websites that convert visitors into customers.',
            features: [
                'Custom Website Design',
                'Responsive Mobile-First Development',
                'E-commerce Solutions',
                'Content Management Systems',
                'Website Maintenance & Support',
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                    <path d="M8 12h8" />
                </svg>
            ),
            title: 'Digital Marketing & SEO',
            description: 'Data-driven strategies to increase your online visibility and drive qualified traffic.',
            features: [
                'Search Engine Optimization (SEO)',
                'Google Ads & PPC Campaigns',
                'Content Marketing Strategy',
                'Email Marketing Campaigns',
                'Analytics & Reporting',
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h.01M12 10h.01M16 10h.01" />
                </svg>
            ),
            title: 'Social Media Marketing',
            description: 'Engaging content and campaigns that build your brand and grow your audience.',
            features: [
                'Social Media Strategy',
                'Content Creation & Scheduling',
                'Community Management',
                'Influencer Partnerships',
                'Paid Social Advertising',
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
            title: 'Branding & Graphic Design',
            description: 'Creative designs that reflect your brand identity and resonate with your audience.',
            features: [
                'Logo & Brand Identity Design',
                'Marketing Collateral',
                'Packaging Design',
                'Brand Guidelines',
                'Print & Digital Design',
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
            ),
            title: 'Video Editing & Creative Content',
            description: 'Compelling videos and visuals that tell your brand story.',
            features: [
                'Promotional Videos',
                'Social Media Content',
                'Product Demonstrations',
                'Motion Graphics',
                'Video Ads',
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9M13 17V5M8 17v-3" />
                </svg>
            ),
            title: 'Lead Generation & Growth Strategy',
            description: 'Strategic planning and execution to accelerate your business growth.',
            features: [
                'Growth Strategy Development',
                'Lead Generation Campaigns',
                'Conversion Rate Optimization',
                'Sales Funnel Design',
                'Marketing Automation',
            ],
        },
    ];

    return (
        <>
            <Navbar />
            <main>
                <section className="services-hero section">
                    <div className="container text-center">
                        <div className="badge">Our Services</div>
                        <h1>Comprehensive Digital Solutions for Your Business</h1>
                        <p className="hero-description">
                            From web design to digital marketing, we offer everything you need to succeed online.
                        </p>
                    </div>
                </section>

                {/* AI Growth Engagement Plans Pricing Section */}
                <section className="pricing-section section">
                    <div className="container">
                        <div className="text-center section-header">
                            <h2>Reka Creative Labs – AI Growth Engagement Plans</h2>
                            <p className="section-subtitle">Modern content + AI systems to scale your brand 🚀</p>
                        </div>
                        <div className="pricing-grid">
                            {pricingPlans.map((plan, index) => (
                                <PricingCard key={index} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section services-section">
                    <div className="container">
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container text-center">
                        <h2>Ready to Get Started?</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)', color: 'var(--dark-text-secondary)' }}>
                            Let&apos;s discuss which services are right for your business.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Request a Consultation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
