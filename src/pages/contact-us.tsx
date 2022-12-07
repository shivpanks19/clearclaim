
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactOptionSection from '@/components/sections/contact/ContactOptionSection';
import ContactFindUsSection from '@/components/sections/contact/ContactFindUsSection';

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
