
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import WhyUsSection from '@/components/sections/common/WhyUsSection';
import ReviewSection from '@/components/sections/common/ReviewSection';
import OfferingSection from '@/components/sections/common/OfferingSection';
import CourseHeroSection from '@/components/sections/course/CourseHeroSection';
import CodingBootcampSection from '@/components/sections/common/CodingBootcampSection';

export default function Home() {

	return (
		<div className='font-sans'>
			<Navbar />

			{/* Course Hero */}
			<CourseHeroSection />

			{/* Offerings */}
			<OfferingSection />

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
