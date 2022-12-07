import React from "react";
import Container from '@/components/core/Container';
import SectionHeadline from "@/components/core/SectionHeadline";
import { useTranslation } from 'next-i18next';
import CurriculumNav from "@/components/corporate/CurriculumNav";

const CourseCurriculumSection: React.FC<CourseCurriculumSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container>
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