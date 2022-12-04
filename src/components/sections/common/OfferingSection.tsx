import React from "react";
import CourseCard from '@/components/course/CourseCard';
import SectionHeadline from '@/components/core/SectionHeadline';

const OfferingSection: React.FC<OfferingSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Our offerings'
				subtitle='Designed for your career growth'
			/>
			<CourseCard />
			<CourseCard />
			<CourseCard />
		</>
	)
};

type OfferingSectionProps = {};

export default OfferingSection;
