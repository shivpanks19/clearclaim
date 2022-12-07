import React from "react";
import CourseCard from '@/components/common/course-list/CourseCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const OfferingSection: React.FC<OfferingSectionProps> = ({ showDetailSection }) => {
	return (
		<div className='mb-28'>
			<SectionHeadline
				title='Our offerings'
				subtitle='Designed for your career growth'
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
