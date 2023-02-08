import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ValueForMoney from '@/components/common/banner/ValueForMoneyBanner';
import CourseFAQ from '@/components/courses/CourseFAQ';
import CourseInfoNav from '@/components/courses/CourseInfoNav';
import CourseCurriculumSection from '@/components/courses/CourseCurriculum/CourseCurriculum';
import CourseDetailHeroSection from '@/components/courses/CourseDetailHero';
import WhyUsSection from '@/components/common/why-us/WhyUs';
import AchievementSection from '@/components/common/placement-list/PlacementList';
import AboutCourse from "@/components/courses/AboutCourse";
import CourseSummary from "@/components/courses/CourseSummary";
import FooterFaqList from "@/components/courses/[slug]/FooterFaqList";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CourseDetailPageInformation } from '@/services/course/types';
import CourseService from '@/services/course';
import PlacementService from '@/services/placement';

import { Course } from '@/services/course/types';
import { Placement } from '@/services/placement/types';
import { FAQ } from '@/services/course/types';

const CourseDetailPage: NextPage<CourseDetailPageProps> = ({ course, courseDetailPageInfo, placementList, faqList1, faqList2 }) => {
	return (
		<div>
			<Navbar />
			{/* Hero */}
			<CourseDetailHeroSection
				headline={course.courseName}
				subHeadline={course.description}
				heroVideo={course.heroVideo}
				heroImage={course.heroImage?.data[0].attributes.url}
				numberOfStudents={course.numberOfStudents}
				studentsTrained={courseDetailPageInfo.studentsTrained}
				workshopsConducted={courseDetailPageInfo.workshopsConducted}
				placementDrives={courseDetailPageInfo.placementDrives}
			/>

			{/* Course Info Navigation */}
			<CourseInfoNav />

			{/* Course Overview */}
			<AboutCourse aboutCourse={course.aboutCourse} />

			{/* What will you learn? */}
			{course.courseSummary && <CourseSummary summaryList={course.courseSummary} />}

			{/* Course Curriculum */}
			<CourseCurriculumSection />

			{/* Why Full Stack Development */}
			{course.courseFAQ &&
				<CourseFAQ
					courseName={course.courseName}
					faqList={course.courseFAQ}
				/>
			}

			{/* Why us */}
			<WhyUsSection
				headline={courseDetailPageInfo.whyUsHeadline}
				subHeadline={courseDetailPageInfo.whyUsSubHeadline}
			/>

			{/* Achievements */}
			<AchievementSection
				headline={courseDetailPageInfo.achievementHeadline}
				subHeadline={courseDetailPageInfo.achievementSubHeadline}
				placementList={placementList}
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
			<Footer />
		</div>
	);
};

type CourseDetailPageProps = {
	course: Course;
	courseDetailPageInfo: CourseDetailPageInformation;
	placementList: Placement[];
	faqList1: FAQ[];
	faqList2: FAQ[];
};

export const getStaticProps: GetStaticProps = async ({
	locale,
	params
}: Record<string, any>) => {
	const courseDetailPageInfo = await CourseService.getCourseDetailPageInformation(locale);
	const course = await CourseService.getCourseBySlug(params.slug, locale);
	const placementList = await PlacementService.getPlacementList(locale, '*');
	console.log('course', course);
	return {
		props: {
			course: {
				...course?.data?.attributes,
				id: course.data.id,
				courseSummary: course.data.attributes.courseSummary?.data ?? null,
				courseFAQ: course.data.attributes.courseFAQ?.data ?? null,
			},
			placementList: placementList.data.map((placement) => ({
				...placement.attributes,
				id: placement.id,
				companyImage: placement.attributes.companyImage?.data.attributes,
				studentImage: placement.attributes.studentImage?.data.attributes,
			})),
			courseDetailPageInfo: courseDetailPageInfo?.data?.attributes,
			faqList1: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[0] : [],
			faqList2: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[1] : [],
			...(await serverSideTranslations(locale, ['common', 'course-detail-page']))
		},
		revalidate: 60
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	let paths = [];
	try {
		const courseList = await CourseService.getCourseList();
		paths = courseList.data.map((course) => ({ params: { slug: course.attributes.slug } }))
	} catch (error) {
		console.log(error);
	}
	return {
		paths,
		fallback: false
	}
};

export default CourseDetailPage;
