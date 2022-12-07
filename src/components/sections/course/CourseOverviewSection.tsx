import React from "react";
import Container from '@/components/core/Container';
import SectionHeadline from "@/components/core/SectionHeadline";
import AboutCourseSection from "@/components/sections/course/AboutCourseSection";
import WhatLearnSection from "@/components/sections/course/WhatLearnSection";
import { useTranslation } from 'next-i18next';

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<SectionHeadline
				title='Course Overview'
				subtitle='Know the details of the course'
				className='mb-8'
			/>
			<AboutCourseSection />
			<WhatLearnSection />
		</Container>
	)
};

type CourseOverviewSectionProps = {};

export default CourseOverviewSection;