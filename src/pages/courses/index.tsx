import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import SocialButtonList from '@/components/common/SocialButtonList';
import ReviewSection from '@/components/common/review-list/ReviewList';
import CourseHeroSection from '@/components/courses/CourseHeroSection';
import OfferingSection from '@/components/common/course-list/CourseList';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CourseListPageInformation } from '@/services/course/types';
import CourseService from '@/services/course';
import ReviewService from '@/services/review';

import { Course } from '@/services/course/types';
import { Review } from '@/services/review/types';

const courseListPage: NextPage<courseListPageProps> = ({ courseListPageInfo, courseList, reviewList, reviewPagination }) => {
	return (
		<div className='relative'>
			<Head>
				{courseListPageInfo.metaTitle && (
					<title>{courseListPageInfo.metaTitle}</title>
				)}
				{courseListPageInfo.metaDescription && (
					<meta name='description' content={courseListPageInfo.metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>

			{/* Course Hero */}
			<CourseHeroSection
				headline1={courseListPageInfo.headline1}
				headline2={courseListPageInfo.headline2}
				subHeadline={courseListPageInfo.subHeadline}
			/>

			{/* Offerings */}
			<OfferingSection
				headline={courseListPageInfo.courseHeadline}
				subHeadline={courseListPageInfo.courseSubHeadline}
				showDetailSection={true}
				courseList={courseList}
			/>

			{/* Why us */}
			<WhyUsSection
				headline={courseListPageInfo.whyUsHeadline}
				subHeadline={courseListPageInfo.whyUsSubHeadline}
			/>

			{/* Coding Bootcamp */}
			<CodingBootcampSection
				imgSrc='/img/coding_bootcamp_1.png'
			/>

			{/* Student Reviews */}
			<ReviewSection
				headline={courseListPageInfo.reviewHeadline}
				subHeadline={courseListPageInfo.reviewSubHeadline}
				reviewList={reviewList}
				reviewPagination={reviewPagination}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type courseListPageProps = {
	courseList: Course[];
	courseListPageInfo: CourseListPageInformation;
	reviewList: Review[];
	reviewPagination: Record<string, number>;
}

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query
}: Record<string, any>) => {
	const courseListPageInfo = await CourseService.getCourseListPageInformation(locale);
	const courseList = await CourseService.getCourseList(locale, '*', 'courseIdx');
	const reviewList = await ReviewService.getReviewList(locale, '*');

	return {
		props: {
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id
			})),
			reviewList: reviewList.data.map((review) => ({
				...review.attributes,
				id: review.id,
				studentImage: review.attributes.studentImage?.data.attributes,
			})),
			reviewPagination: reviewList.meta.pagination,
			courseListPageInfo: courseListPageInfo?.data?.attributes,
			...(await serverSideTranslations(locale, ['common', 'course-list-page']))
		}
	};
};

export default courseListPage;
