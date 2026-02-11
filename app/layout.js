import Script from 'next/script';
import './globals.css';

export const metadata = {
    title: 'Reka Creative Labs - Digital Agency for Growth & Innovation',
    description: 'Reka Creative Labs offers cutting-edge digital solutions, specializing in web design, digital marketing, branding, and business growth. Transform your brand with our creative expertise.',
    keywords: 'digital agency, web design, digital marketing, branding, SEO, social media marketing, video editing, business growth',
    icons: {
        icon: '/icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-KKVNZD3SQ6"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-KKVNZD3SQ6');
                    `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Reka Creative Labs",
                            url: "https://rekacreativelabs.com",
                            logo: "https://rekacreativelabs.com/icon.png"
                        }),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
