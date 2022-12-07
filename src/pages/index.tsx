
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeHeroSection from '@/components/index/HomeHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import ReviewSection from '@/components/common/review-list/ReviewList';
import SpecialSection from '@/components/index/Special';
import OfferingSection from '@/components/common/course-list/CourseList';
import RecruiterSection from '@/components/common/RecruiterList';
import RecognitionSection from '@/components/index/Recognition';
import AchievementSection from '@/components/common/placement-list/PlacementList';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';
import CorporateProgramSection from '@/components/index/CorporateProgram/CorporateProgram';


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
