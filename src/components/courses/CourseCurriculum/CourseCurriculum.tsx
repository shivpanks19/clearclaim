import React from "react";
import Container from '@/components/layout/Container';
import SectionHeadline from "@/components/common/SectionHeadline";
import { useTranslation } from 'next-i18next';
import CurriculumNav from "@/components/courses/CourseCurriculum/CurriculumNav";

const CourseCurriculumSection: React.FC<CourseCurriculumSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container className='hidden md:block'>
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