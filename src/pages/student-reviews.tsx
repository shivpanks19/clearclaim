
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import ReviewSection from '@/components/sections/common/ReviewSection';
import RecruiterSection from '@/components/sections/common/RecruiterSection';
import ReviewHeroSection from '@/components/sections/review/ReviewHeroSection';
import CodingBootcampSection from '@/components/core/CodingBootcamp';
import AchievementSection from '@/components/sections/common/AchievementSection';

export default function Home() {

	return (
		<div>
			<Navbar />

			{/* Review Hero */}
			<ReviewHeroSection />

			{/* Achievements */}
			<AchievementSection
				largeFormat={true}
			/>

			{/* Student Reviews */}
			<ReviewSection
				largeFormat={true}
			/>

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/home/coding_bootcamp_1.png'
			/>

			{/* Recruiters */}
			<RecruiterSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
