import React from "react";
import CourseCard from '@/components/common/course-list/CourseCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const OfferingSection: React.FC<OfferingSectionProps> = ({ showDetailSection }) => {
	return (
		<div className='flex flex-col mb-3 md:mb-28 mx-5'>
			<SectionHeadline
				title='Our offerings'
				subtitle='Designed for your career growth'
				className='mb-4'
			/>
			<CourseCard
				isFree={true}
				showDetailSection={showDetailSection}
			/>
			<CourseCard
				showDetailSection={showDetailSection}
			/>
			<CourseCard
				showDetailSection={showDetailSection}
			/>
		</div>
	)
};

type OfferingSectionProps = {
	showDetailSection?: boolean;
};

export default OfferingSection;
