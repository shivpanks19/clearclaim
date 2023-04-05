import { useState, useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DemoVideo from '@/components/index/DemoVideo';
import SpecialSection from '@/components/index/Special';
import HomeHeroSection from '@/components/index/HomeHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import RecognitionSection from '@/components/index/Recognition';
import RecruiterSection from '@/components/common/RecruiterList';
import SocialButtonList from '@/components/common/SocialButtonList';
import ReviewSection from '@/components/common/review-list/ReviewList';
import OfferingSection from '@/components/common/course-list/CourseList';
import PlacementList from '@/components/common/placement-list/PlacementList';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';
import CorporateProgramSection from '@/components/index/CorporateProgram/CorporateProgram';

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

const Home: NextPage<HomePageProps> = ({ homeInfo, courseList, reviewPagination, placementPagination }) => {
	const [placementList, setPlacementList] = useState([]);
	const [reviewList, setReviewList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	useEffect(() => {
		(async () => {
			const placementList = await PlacementService.getPlacementList('', '*');
			const reviewList = await ReviewService.getReviewList('', '*');
			const recruiterList = await RecruiterService.getRecruiterList('', '*');
			setPlacementList(placementList.data.map((placement) => ({
				...placement.attributes,
				id: placement.id,
				companyImage: { id: placement.attributes.companyImage?.data.id, url: placement.attributes.companyImage?.data.attributes.url, alt: placement.attributes.companyImage?.data.attributes.alternativeText },
				studentImage: { id: placement.attributes.studentImage?.data.id, url: placement.attributes.studentImage?.data.attributes.url },
			})))
			setReviewList(reviewList.data.map((review) => ({
				...review.attributes,
				id: review.id,
				studentImage: { id: review.attributes.studentImage?.data.id, url: review.attributes.studentImage?.data.attributes.url }
			})))
			setRecruiterList(recruiterList.data.map((recruiter) => ({
				...recruiter.attributes,
				id: recruiter.id,
				recruiterImage: { id: recruiter.attributes.recruiterImage?.data.id, url: recruiter.attributes.recruiterImage?.data.attributes.url }
			})))
		})()
	}, [])
	return (
		<div className='relative'>
			<Head>
				{homeInfo.metaTitle && (
					<title>{homeInfo.metaTitle}</title>
				)}
				{homeInfo.metaDescription && (
					<meta name='description' content={homeInfo.metaDescription} />
				)}
			</Head>
			<SocialButtonList />
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
				riverImages={homeInfo.riverImages}
				riverImagesLv2={homeInfo.riverImagesLv2}
				riverImagesLv3={homeInfo.riverImagesLv3}
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
			<CorporateProgramSection corporateProgramPics={homeInfo.corporateProgramPics} />

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
	placementPagination: Record<string, number>;
	reviewPagination: Record<string, number>;
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const homeInfo = await HomeService.getHomePageInformation(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*', 'courseIdx');

	return {
		props: {
			homeInfo: {
				...homeInfo?.data?.attributes,
				riverImages: homeInfo.data.attributes.riverImages?.data.map((img) => ({ id: img.id, url: img.attributes.url })),
				riverImagesLv2: homeInfo.data.attributes.riverImagesLv2?.data.map((img) => ({ id: img.id, url: img.attributes.url })),
				riverImagesLv3: homeInfo.data.attributes.riverImagesLv3?.data.map((img) => ({ id: img.id, url: img.attributes.url })),
				corporateProgramPics: homeInfo.data.attributes.corporateProgramPics?.data.map((img) => ({ id: img.id, url: img.attributes.url }))
			},
			courseList: courseList.data.map((course) => ({
				courseName: course.attributes.courseName,
				description: course.attributes.description,
				numberOfStudents: course.attributes.numberOfStudents,
				contentHours: course.attributes.contentHours,
				slug: course.attributes.slug,
				isFree: course.attributes.isFree,
				showDetailSection: false, 
				heroImage: { id: course.attributes.heroImage.data.id, url: course.attributes.heroImage?.data.attributes.url },
				id: course.id,
			})),
		},
		revalidate: 60
	};
};

export default Home;