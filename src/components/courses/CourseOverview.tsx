import React from "react";
import Container from '@/components/layout/Container';
import SectionHeadline from "@/components/common/SectionHeadline";
import AboutCourse from "@/components/courses/AboutCourse";
import WhatLearn from "@/components/courses/WhatLearn";
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
			<AboutCourse />
			<WhatLearn />
		</Container>
	)
};

type CourseOverviewSectionProps = {};

export default CourseOverviewSection;