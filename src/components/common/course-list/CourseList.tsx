import React from "react";
import CourseCard from '@/components/common/course-list/CourseCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Course } from '@/services/course/types';

const OfferingSection: React.FC<OfferingSectionProps> = ({ showDetailSection, headline, subHeadline, courseList }) => {
	return (
		<div className='flex flex-col mb-3 md:mb-28 mx-5'>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4'
			/>
			{courseList?.length > 0 && courseList.map((course) => (
				<CourseCard
					key={course.id}
					courseName={course.courseName}
					description={course.description}
					numberOfStudents={course.numberOfStudents}
					contentHours={course.contentHours}
					slug={course.slug}
					heroImage={course.heroImage.url}
					isFree={course.isFree}
					showDetailSection={showDetailSection}
				/>
			))}
		</div>
	)
};

type OfferingSectionProps = {
	showDetailSection?: boolean;
	headline: string;
	subHeadline: string;
	courseList: Course[];
};

export default OfferingSection;
