import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecruiterSection from '@/components/common/RecruiterList';
import SocialButtonList from '@/components/common/SocialButtonList';
import ReviewSection from '@/components/common/review-list/ReviewList';
import ReviewHeroSection from '@/components/student-reviews/ReviewHero';
import PlacementList from '@/components/common/placement-list/PlacementList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';

import StudentReviewPageService from '@/services/student-reviews-page';
import PlacementService from '@/services/placement';
import ReviewService from '@/services/review';
import RecruiterService from '@/services/recruiter';
import CourseService from '@/services/course';

import { Course } from '@/services/course/types';
import { Placement } from '@/services/placement/types';
import { Review } from '@/services/review/types';
import { Recruiter } from '@/services/recruiter/types';
import { ImageType } from '@/utils/types';

const StudentReviewPage: NextPage<StudentReviewPageProps> = ({
	headline,
	subHeadline,
	metaTitle,
	metaDescription,
	heroImage,
	placementList,
	reviewList,
	recruiterList,
	achievementHeadline,
	achievementSubHeadline,
	recruiterHeadline,
	recruiterSubHeadline,
	reviewHeadline,
	reviewSubHeadline,
	placementPagination,
	reviewPagination,
	courseList
}) => {

	return (
		<div className='relative'>
			<Head>
				{metaTitle && (
					<title>{metaTitle}</title>
				)}
				{metaDescription && (
					<meta name='description' content={metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>

			{/* Review Hero */}
			<ReviewHeroSection
				headline={headline}
				subHeadline={subHeadline}
				heroImage={heroImage}
			/>

			{/* Achievements */}
			<PlacementList
				headline={achievementHeadline}
				subHeadline={achievementSubHeadline}
				placementList={placementList}
				showReadMore={false}
				placementPagination={placementPagination}
			/>

			{/* Student Reviews */}
			<ReviewSection
				headline={reviewHeadline}
				subHeadline={reviewSubHeadline}
				reviewList={reviewList}
				showReadMore={false}
				reviewPagination={reviewPagination}
			/>

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/coding_bootcamp_1.png'
			/>

			{/* Recruiters */}
			<RecruiterSection
				headline={recruiterHeadline}
				subHeadline={recruiterSubHeadline}
				recruiterList={recruiterList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
};

type StudentReviewPageProps = {
	headline: string;
	subHeadline: string;
	metaTitle: string;
	metaDescription: string;
	heroImage: ImageType;
	achievementHeadline: string;
	achievementSubHeadline: string;
	reviewHeadline: string,
	reviewSubHeadline: string,
	recruiterHeadline: string,
	recruiterSubHeadline: string,
	placementList: Placement[];
	reviewList: Review[];
	recruiterList: Recruiter[];
	placementPagination: Record<string, number>;
	reviewPagination: Record<string, number>;
	recruiterPagination: Record<string, number>;
	courseList: Course[];
};

export const getStaticProps: GetStaticProps = async ({locale}: Record<string, any>) => {
	const studentReviewPageInfo = await StudentReviewPageService.getStudentReviewPageInformation(locale, '*');
	const placementList = await PlacementService.getPlacementList(locale, '*');
	const reviewList = await ReviewService.getReviewList(locale, '*');
	const recruiterList = await RecruiterService.getRecruiterList(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			...studentReviewPageInfo.data.attributes,
			heroImage: studentReviewPageInfo.data.attributes.heroImage?.data.attributes,
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
				recruiterImage: recruiter.attributes.recruiterImage?.data.attributes,
			})),
			recruiterPagination: recruiterList.meta.pagination,
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		},
		revalidate: 60
	};
};

export default StudentReviewPage;