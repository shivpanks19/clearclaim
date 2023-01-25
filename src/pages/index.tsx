import { GetStaticProps, NextPage } from 'next';

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
import DemoVideo from '@/components/index/DemoVideo';
import TestimonialCard from '@/components/common/TestimonialCard';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomePageInformation } from '@/services/home/types';
import HomeService from '@/services/home';

const Home: NextPage<HomePageProps> = ({ homeInfo }) => {

	return (
		<div>
			<Navbar />

			{/* Hero */}
			<HomeHeroSection
				headline={homeInfo.headline}
				subHeadline={homeInfo.subHeadline}
			/>
			{/* How we teach */}
			<DemoVideo />

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

			{/* Testimonials */}
			{/* <TestimonialCard /> */}

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/home/coding_bootcamp_2.png'
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type HomePageProps = {
	homeInfo: HomePageInformation
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const homeInfo = await HomeService.getHomePageInformation(locale);
	return {
		props: {
			homeInfo: homeInfo?.data?.attributes,
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default Home;