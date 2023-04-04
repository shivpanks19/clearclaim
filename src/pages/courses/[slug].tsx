import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ValueForMoney from '@/components/common/banner/ValueForMoneyBanner';
import CourseFAQ from '@/components/courses/CourseFAQ';
import CourseInfoNav from '@/components/courses/CourseInfoNav';
import CourseCurriculumSection from '@/components/courses/CourseCurriculum/CourseCurriculum';
import CourseDetailHeroSection from '@/components/courses/CourseDetailHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import PlacementList from '@/components/common/placement-list/PlacementList';
import AboutCourse from "@/components/courses/AboutCourse";
import CourseSummary from "@/components/courses/CourseSummary";
import FooterFaqList from "@/components/courses/[slug]/FooterFaqList";
import BasePaySection from "@/components/courses/[slug]/BasePaySection";
import SocialButtonList from '@/components/common/SocialButtonList';


import { CourseDetailPageInformation } from '@/services/course/types';
import CourseService from '@/services/course';
import PlacementService from '@/services/placement';

import { Course } from '@/services/course/types';
import { Placement } from '@/services/placement/types';
import { FAQ } from '@/services/course/types';

const CourseDetailPage: NextPage<CourseDetailPageProps> = ({ course, courseDetailPageInfo, placementList, faqList1, faqList2, placementPagination, courseList }) => {
	return (
		<div className='relative'>
			<Head>
				{course?.metaTitle && (
					<title>{course?.metaTitle}</title>
				)}
				{course?.metaDescription && (
					<meta name='description' content={course?.metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>
			{/* Hero */}
			<CourseDetailHeroSection
				headline={course.courseName}
				subHeadline={course.description}
				heroVideo={course.heroVideo}
				heroImage={course.heroImage?.url}
				numberOfStudents={course.numberOfStudents}
				studentsTrained={courseDetailPageInfo.studentsTrained}
				workshopsConducted={courseDetailPageInfo.workshopsConducted}
				placementDrives={courseDetailPageInfo.placementDrives}
			/>

			{/* Course Info Navigation */}
			<CourseInfoNav />

			{/* Course Overview */}
			<AboutCourse aboutCourse={course.aboutCourse} contentHours={course.contentHours} />

			{/* What will you learn? */}
			{course.courseSummary && <CourseSummary summaryList={course.courseSummary} />}

			{/* Base pay */}
			<BasePaySection glassdoorSalaryData={course.glassdoorSalaryData} />

			{/* Why Full Stack Development */}
			{course.courseFAQ &&
				<CourseFAQ
					courseName={course.courseName}
					faqList={course.courseFAQ}
				/>
			}

			{/* Course Curriculum */}
			<CourseCurriculumSection
				courseName={course.courseName}
				curriculumList={course.curriculumList}
				curriculumPdfUrl={course.curriculumPdf?.url}
			/>

			{/* Why us */}
			<WhyUsSection
				headline={courseDetailPageInfo.whyUsHeadline}
				subHeadline={courseDetailPageInfo.whyUsSubHeadline}
			/>

			{/* Achievements */}
			<PlacementList
				headline={courseDetailPageInfo.achievementHeadline}
				subHeadline={courseDetailPageInfo.achievementSubHeadline}
				placementList={placementList}
				placementPagination={placementPagination}
			/>

			{/* Value for money */}
			<ValueForMoney
				imgSrc='/img/price-tag.png'
				price={course.price}
			/>

			{/* FAQs */}
			<FooterFaqList
				headline={courseDetailPageInfo.faqHeadline}
				subHeadline={courseDetailPageInfo.faqSubHeadline}
				faqList1={faqList1}
				faqList2={faqList2}
			/>

			{/* Footer */}
			<Footer showFooterTop={true} />
		</div>
	);
};

type CourseDetailPageProps = {
	course: Course;
	courseDetailPageInfo: CourseDetailPageInformation;
	placementList: Placement[];
	placementPagination: Record<string, number>;
	faqList1: FAQ[];
	faqList2: FAQ[];
	courseList: Course[];
};

export const getStaticProps: GetStaticProps = async ({
	locale,
	params
}: Record<string, any>) => {
	const courseDetailPageInfo = await CourseService.getCourseDetailPageInformation(locale);
	const course = await CourseService.getCourseBySlug(params.slug, locale, '*');
	const placementList = await PlacementService.getPlacementList(locale, '*');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			course: {
				...course?.data?.attributes,
				id: course.data.id,
				heroImage: { id: course.data.attributes.heroImage.data.id, url: course.data.attributes.heroImage?.data.attributes.url  },
				courseSummary: course.data.attributes.courseSummary?.data ?? null,
				courseFAQ: course.data.attributes.courseFAQ?.data ?? null,
				curriculumPdf: course.data.attributes.curriculumPdf?.data.attributes ?? null,
			},
			placementList: placementList.data.map((placement) => ({
				...placement.attributes,
				id: placement.id,
				companyImage: placement.attributes.companyImage?.data.attributes,
				studentImage: placement.attributes.studentImage?.data.attributes,
			})),
			placementPagination: placementList.meta.pagination,
			courseDetailPageInfo: courseDetailPageInfo?.data?.attributes,
			faqList1: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[0] : [],
			faqList2: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[1] : [],
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
		},
		revalidate: 60
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const courses = await CourseService.getCourseList();
	const paths = courses.data.map((course) => ({
		params: { slug: course.attributes.slug },
	}));
	return { paths, fallback: false };
};

export default CourseDetailPage;
