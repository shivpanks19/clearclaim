import { NextPage } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ValueForMoney from '@/components/common/banner/ValueForMoneyBanner';
import WhyFSDSection from '@/components/courses/WhyFSD';
import CourseInfoSection from '@/components/courses/CourseInfo';
import CourseCurriculumSection from '@/components/courses/CourseCurriculum/CourseCurriculum';
import CourseDetailHeroSection from '@/components/courses/CourseDetailHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import AchievementSection from '@/components/common/placement-list/PlacementList';

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
