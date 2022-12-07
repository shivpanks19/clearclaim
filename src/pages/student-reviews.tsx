
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReviewSection from '@/components/common/review-list/ReviewList';
import RecruiterSection from '@/components/common/RecruiterList';
import ReviewHeroSection from '@/components/student-reviews/ReviewHero';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';
import AchievementSection from '@/components/common/placement-list/PlacementList';

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
