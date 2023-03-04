import { GetServerSideProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeHeroSection from '@/components/index/HomeHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import ReviewSection from '@/components/common/review-list/ReviewList';
import SpecialSection from '@/components/index/Special';
import OfferingSection from '@/components/common/course-list/CourseList';
import RecruiterSection from '@/components/common/RecruiterList';
import RecognitionSection from '@/components/index/Recognition';
import PlacementList from '@/components/common/placement-list/PlacementList';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';
import CorporateProgramSection from '@/components/index/CorporateProgram/CorporateProgram';
import DemoVideo from '@/components/index/DemoVideo';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomeService from '@/services/home';
import CourseService from '@/services/course';
import PlacementService from '@/services/placement';
import ReviewService from '@/services/review';
import RecruiterService from '@/services/recruiter';

import { Course } from '@/services/course/types';
import { Placement } from '@/services/placement/types';
import { HomePageInformation } from '@/services/home/types';
import { Review } from '@/services/review/types';
import { Recruiter } from '@/services/recruiter/types';

const Home: NextPage<HomePageProps> = ({ homeInfo, courseList, placementList, reviewList, recruiterList, reviewPagination, placementPagination }) => {

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<HomeHeroSection
				headline={homeInfo.headline}
				subHeadline={homeInfo.subHeadline}
				studentsTrained={homeInfo.studentsTrained}
				workshopsConducted={homeInfo.workshopsConducted}
				placementDrives={homeInfo.placementDrives}
				nextBatchDate={homeInfo.nextBatchDate}
			/>
			{/* How we teach */}
			<DemoVideo
				headline={homeInfo.demoVideoHeadline}
				subHeadline={homeInfo.demoVideoSubHeadline}
				url={homeInfo.videoURL}
			/>

			{/* Offerings */}
			<OfferingSection
				headline={homeInfo.courseHeadline}
				subHeadline={homeInfo.courseSubHeadline}
				courseList={courseList}
			/>

			{/* Special */}
			<SpecialSection
				headline={homeInfo.specialSectionHeadline}
				subHeadline={homeInfo.specialSectionSubHeadline}
			/>

			{/* Corporate Program */}
			<CorporateProgramSection />

			{/* Achievements */}
			{placementList?.length > 0 && (
				<PlacementList
					headline={homeInfo.achievementHeadline}
					subHeadline={homeInfo.achievementSubHeadline}
					placementList={placementList}
					placementPagination={placementPagination}
				/>
			)}

			{/* Student Reviews */}
			<ReviewSection
				headline={homeInfo.reviewHeadline}
				subHeadline={homeInfo.reviewSubHeadline}
				reviewList={reviewList}
				reviewPagination={reviewPagination}
			/>

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/coding_bootcamp_1.png'
			/>

			{/* Why us */}
			<WhyUsSection
				headline={homeInfo.whyUsHeadline}
				subHeadline={homeInfo.whyUsSubHeadline}
			/>

			{/* Recruiters */}
			{recruiterList?.length > 0 && <RecruiterSection
				headline={homeInfo.recruiterHeadline}
				subHeadline={homeInfo.recruiterSubHeadline}
				recruiterList={recruiterList}
			/>}

			{/* Recognition */}
			<RecognitionSection
				headline={homeInfo.recognitionHeadline}
				subHeadline={homeInfo.recognitionSubHeadline}
			/>

			{/* Testimonials */}
			{/* <TestimonialCard /> */}

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/coding_bootcamp_2.png'
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type HomePageProps = {
	homeInfo: HomePageInformation;
	courseList: Course[];
	placementList: Placement[];
	placementPagination: Record<string, number>;
	reviewList: Review[];
	reviewPagination: Record<string, number>;
	recruiterList: Recruiter[];
}

export const getServerSideProps: GetServerSideProps = async ({
	locale, query
}: Record<string, any>) => {
	const homeInfo = await HomeService.getHomePageInformation(locale);
	const courseList = await CourseService.getCourseList(locale, '*', 'courseIdx');
	const placementList = await PlacementService.getPlacementList(locale, '*', query?.placementPage);
	const reviewList = await ReviewService.getReviewList(locale, '*', query?.reviewPage);
	const recruiterList = await RecruiterService.getRecruiterList(locale, '*');

	return {
		props: {
			homeInfo: homeInfo?.data?.attributes,
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			placementList: placementList.data.map((placement) => ({
				...placement.attributes,
				id: placement.id,
				companyImage: placement.attributes.companyImage?.data.attributes,
				studentImage: placement.attributes.studentImage?.data.attributes,
			})),
			placementPagination: placementList.meta.pagination,
			reviewList: reviewList.data.map((review) => ({
				...review.attributes,
				id: review.id,
				studentImage: review.attributes.studentImage?.data.attributes,
			})),
			reviewPagination: reviewList.meta.pagination,
			recruiterList: recruiterList.data.map((recruiter) => ({
				...recruiter.attributes,
				id: recruiter.id,
				recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		}
	};
};

export default Home;