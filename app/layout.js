import './globals.css';

export const metadata = {
    title: 'Reka Creative Labs - Digital Agency for Growth & Innovation',
    description: 'Reka Creative Labs offers cutting-edge digital solutions, specializing in web design, digital marketing, branding, and business growth. Transform your brand with our creative expertise.',
    keywords: 'digital agency, web design, digital marketing, branding, SEO, social media marketing, video editing, business growth',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
