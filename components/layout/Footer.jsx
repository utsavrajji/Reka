import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const services = [
        'Web Design & Development',
        'Digital Marketing & SEO',
        'Social Media Marketing',
        'Branding & Graphic Design',
        'Video Editing',
        'Business Growth Solutions',
    ];

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
            ),
            href: 'https://www.facebook.com/profile.php?id=61575890836343'
        },
        {
            name: 'Instagram',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ),
            href: 'https://www.instagram.com/rekacreativelabs/'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            href: 'https://www.linkedin.com/company/reka-creative-labs/posts/?feedView=all'
        },
        {
            name: 'Twitter',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            ),
            href: '#'
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text">Reka</span>
                            <span className="logo-accent">Creative Labs</span>
                        </div>
                        <p className="footer-description">
                            Building brands. Crafting code. Driving growth. We&apos;re your partner in digital transformation.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Our Services</h3>
                        <ul className="footer-links">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="footer-link">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Get In Touch</h3>
                        <div className="contact-info">
                            <p className="contact-item">
                                <span className="contact-icon">📧</span>
                                <a href="mailto:rekacreativelabs@gmail.com" className="footer-link">
                                    rekacreativelabs@gmail.com
                                </a>
                            </p>
                            <p className="contact-item">
                                <span className="contact-icon">📞</span>
                                <a href="tel:+918368508556" className="footer-link">
                                    +91 8368508556
                                    <br />
                                    +91 7634923630
                                </a>
                            </p>
                            <p className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Delhi, India</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Reka Creative Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
