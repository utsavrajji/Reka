import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './blog.css';

export const metadata = {
    title: 'Blog - Reka Creative Labs',
    description: 'Digital marketing insights, web design tips, and business growth strategies from Reka Creative Labs.',
};

export default function Blog() {
    const blogPosts = [
        {
            title: '10 Web Design Trends to Watch in 2026',
            excerpt: 'Discover the latest web design trends that will dominate the digital landscape this year.',
            category: 'Web Design',
            date: 'Feb 1, 2026',
            readTime: '5 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
        },
        {
            title: 'SEO Best Practices for Small Businesses',
            excerpt: 'Learn practical SEO strategies that can help your small business rank higher on Google.',
            category: 'Digital Marketing',
            date: 'Jan 28, 2026',
            readTime: '7 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                </svg>
            ),
        },
        {
            title: 'How to Create Engaging Social Media Content',
            excerpt: 'Tips and tricks for creating social media content that resonates with your audience.',
            category: 'Social Media',
            date: 'Jan 25, 2026',
            readTime: '6 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h.01M12 10h.01M16 10h.01" />
                </svg>
            ),
        },
        {
            title: 'The Power of Brand Identity',
            excerpt: 'Why strong brand identity matters and how to build one that stands out.',
            category: 'Branding',
            date: 'Jan 20, 2026',
            readTime: '8 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
        {
            title: 'Video Marketing: A Complete Guide',
            excerpt: 'Everything you need to know about using video to grow your business.',
            category: 'Video Marketing',
            date: 'Jan 15, 2026',
            readTime: '10 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
            ),
        },
        {
            title: 'Lead Generation Strategies That Work',
            excerpt: 'Proven tactics to generate more qualified leads for your business.',
            category: 'Business Growth',
            date: 'Jan 10, 2026',
            readTime: '9 min read',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9M13 17V5M8 17v-3" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Navbar />
            <main>
                <section className="blog-hero section">
                    <div className="container text-center">
                        <div className="badge">Blog</div>
                        <h1>Insights & Resources</h1>
                        <p className="hero-description">
                            Expert tips on digital marketing, web design, and business growth.
                        </p>
                    </div>
                </section>

                <section className="section blog-section">
                    <div className="container">
                        <div className="blog-grid">
                            {blogPosts.map((post, index) => (
                                <article key={index} className="blog-card">
                                    <div className="blog-icon">{post.icon}</div>
                                    <div className="blog-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <h2 className="blog-title">{post.title}</h2>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-footer">
                                        <span className="read-time">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2v20M2 12h20" />
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                        <a href="#" className="read-more">
                                            Read More
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section cta-section">
                    <div className="container text-center">
                        <h2>Want More Insights?</h2>
                        <p className="cta-description">
                            Subscribe to our newsletter for the latest tips and strategies.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Subscribe Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
