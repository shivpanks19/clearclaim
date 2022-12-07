
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHeroSection from '@/components/contact-us/ContactHero';
import ContactOptionSection from '@/components/contact-us/ContactOption';
import ContactFindUsSection from '@/components/contact-us/ContactFindUs';

export default function Home() {

	return (
		<div>
			<Navbar />

			{/* Course Hero */}
			<ContactHeroSection />

			{/* Contact Map */}
			<ContactOptionSection />

			{/* Contact Form */}
			<ContactFindUsSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
