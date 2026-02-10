import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HorizonHero from '@/components/ui/horizon-hero-section';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import ContactPopup from '@/components/ui/ContactPopup';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HorizonHero />
                <ServicesPreview />
                <WhyChooseUs />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
            <ContactPopup />
        </>
    );
}
