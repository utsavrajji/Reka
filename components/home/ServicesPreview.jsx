import './ServicesPreview.css';
import GlowingEffect from '../ui/GlowingEffect';

export default function ServicesPreview() {
    const services = [
        {
            icon: '💻',
            title: 'Website Development',
            description: 'High-performance, responsive websites built for speed, scalability, and conversions.',
        },
        {
            icon: '🎨',
            title: 'Web Design',
            description: 'Creative, modern, and user-friendly designs that reflect your brand identity.',
        },
        {
            icon: '📱',
            title: 'Social Media Marketing',
            description: 'Engaging content and campaigns to increase reach, awareness, and customer engagement.',
        },
        {
            icon: '🚀',
            title: 'Digital Marketing & SEO',
            description: 'Data-driven strategies to boost your online visibility and drive qualified traffic.',
        },
        {
            icon: '🎬',
            title: 'Video Editing & Creative Content',
            description: 'Compelling videos and visuals that tell your brand story and grab attention.',
        },
        {
            icon: '📊',
            title: 'Business Growth Solutions',
            description: 'Strategic planning and execution to accelerate your business growth and revenue.',
        },
    ];

    return (
        <section className="section services-preview">
            <div className="container">
                <div className="section-header text-center">
                    <div className="badge">Our Services</div>
                    <h2>India's Best Digital Agency for Growth, Creativity, and Results</h2>
                    <p className="section-description">
                        We offer comprehensive digital solutions to help your business thrive in the digital landscape.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-wrapper">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={2}
                            />
                            <div className="service-card card hover-lift">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <a href="/services" className="btn btn-primary btn-lg">
                        View All Services
                    </a>
                </div>
            </div>
        </section>
    );
}
