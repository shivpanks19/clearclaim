import { NextPage } from 'next';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import ValueForMoney from '@/components/core/ValueForMoney';
import WhyFSDSection from '@/components/sections/course/WhyFSDSection';
import CourseInfoSection from '@/components/sections/course/CourseInfoSection';
import CourseCurriculumSection from '@/components/sections/course/CourseCurriculumSection';
import CourseDetailHeroSection from '@/components/sections/course/CourseDetailHeroSection';
import WhyUsSection from '@/components/sections/common/WhyUsSection';
import AchievementSection from '@/components/sections/common/AchievementSection';

const CourseDetailPage: NextPage = () => {

	return (
		<div>
			<Navbar />

			{/* Hero */}
			<CourseDetailHeroSection />

			{/* Course Info */}
			<CourseInfoSection />

			{/* Why Full Stack Development */}
			<WhyFSDSection />

			{/* Course Curriculum */}
			<CourseCurriculumSection />

			{/* Why us */}
			<WhyUsSection />

			{/* Achievements */}
			<AchievementSection />

			{/* Value for money */}
			<ValueForMoney
				imgSrc='/img/price-tag.png'
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CourseDetailPage;
	// export function getServerSideProps() {

	// }
