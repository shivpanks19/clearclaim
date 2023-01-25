
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecruiterSection from '@/components/common/RecruiterList';
import RecordHeroSection from '@/components/records/RecordHero';
import SalarySection from '@/components/records/SalarySection';
import NewsSection from '@/components/records/NewsSection';

export default function Home() {

	return (
		<div>
			<Navbar />

			{/* Record Hero */}
			<RecordHeroSection />

			{/* Recruiters */}
			<RecruiterSection />

			{/* Salary */}
			<SalarySection />

			{/* News */}
			<NewsSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
