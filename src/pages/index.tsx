
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import HomeHeroSection from '@/components/sections/home/HomeHeroSection';
import WhyUsSection from '@/components/sections/common/WhyUsSection';
import ReviewSection from '@/components/sections/common/ReviewSection';
import SpecialSection from '@/components/sections/home/SpecialSection';
import OfferingSection from '@/components/sections/common/OfferingSection';
import RecruiterSection from '@/components/sections/common/RecruiterSection';
import RecognitionSection from '@/components/sections/home/RecognitionSection';
import AchievementSection from '@/components/sections/common/AchievementSection';
import CodingBootcampSection from '@/components/core/CodingBootcamp';
import CorporateProgramSection from '@/components/sections/home/CorporateProgramSection';


export default function Home() {

	return (
		<div>
			<Navbar />

			{/* Hero */}
			<HomeHeroSection />

			{/* Offerings */}
			<OfferingSection />

			{/* Special */}
			<SpecialSection />

			{/* Corporate Program */}
			<CorporateProgramSection />

			{/* Achievements */}
			<AchievementSection />

			{/* Student Reviews */}
			<ReviewSection />

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/home/coding_bootcamp_1.png'
			/>

			{/* Why us */}
			<WhyUsSection />

			{/* Recruiters */}
			<RecruiterSection />

			{/* Recognition */}
			<RecognitionSection />

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/home/coding_bootcamp_2.png'
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}
