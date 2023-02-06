import React from "react";
import Container from '@/components/layout/Container';
import SectionHeadline from "@/components/common/SectionHeadline";
import CurriculumNav from "@/components/courses/CourseCurriculum/CurriculumNav";

const CourseCurriculumSection: React.FC<CourseCurriculumSectionProps> = () => {
	return (
		<Container className='hidden xl:block'>
			<a id='course-curriculum' />
			<SectionHeadline
				title='Course Curriculum'
				subtitle='Dowload the course curriculum'
				className='mb-8'
			/>
			<CurriculumNav />
		</Container>
	)
};

type CourseCurriculumSectionProps = {};

export default CourseCurriculumSection;