
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import ReviewSection from '@/components/common/review-list/ReviewList';
import OfferingSection from '@/components/common/course-list/CourseList';
import CourseHeroSection from '@/components/courses/CourseHeroSection';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';

export default function Home() {

	return (
		<div>
			<Navbar />

			{/* Course Hero */}
			<CourseHeroSection />

			{/* Offerings */}
			<OfferingSection
				showDetailSection={true}
			/>

			{/* Why us */}
			<WhyUsSection />

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/home/coding_bootcamp_1.png'
			/>

			{/* Student Reviews */}
			<ReviewSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
