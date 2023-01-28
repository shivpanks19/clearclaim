import { GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import ReviewSection from '@/components/common/review-list/ReviewList';
import OfferingSection from '@/components/common/course-list/CourseList';
import CourseHeroSection from '@/components/courses/CourseHeroSection';
import CodingBootcampSection from '@/components/common/banner/CodingBootcampBanner';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CourseListPageInformation } from '@/services/course/types';
import CourseService from '@/services/course';
import ReviewService from '@/services/review';

import { Course } from '@/services/course/types';
import { Review } from '@/services/review/types';

const courseListPage: NextPage<courseListPageProps> = ({ courseListPageInfo, courseList, reviewList }) => {
	return (
		<div>
			<Navbar />

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
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const courseListPageInfo = await CourseService.getCourseListPageInformation(locale);
	const courseList = await CourseService.getCourseList(locale, '*');
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
			courseListPageInfo: courseListPageInfo?.data?.attributes,
			...(await serverSideTranslations(locale, ['common', 'course-list-page']))
		},
		revalidate: 60
	};
};

export default courseListPage;
