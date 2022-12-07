import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';
import CourseAttr from "@/components/common/course-list/CourseAttr";
import Rating from "@/components/common/Rating";
import WorkshopButton from '@/components/common/button/WorkshopButton';
import RegisterButton from '@/components/common/button/RegisterButton';
import StatSection from '@/components/common/Stat';
import HeroBg from "@/components/common/HeroBg";

const CourseHeroSection: React.FC<CourseHeroSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<HeroBg>
			<div className='grid gap-8 md:w-76 mx-auto mb-32 items-center' style={{ gridTemplateColumns: '1.25fr 1fr' }}>
				<div className='flex flex-col pt-20'>
					<h1 className='text-3xl md:text-hero text-primary'>
						Master Course
					</h1>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						Full Stack Web Development:
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						Learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
					</p>
					<div className="course-rating flex content-bottom mb-14">
						<Rating />
						<p className="student-number text-desc font-normal"> 2486 students</p>
					</div>
					<div className="flex gap-14 mb-20">
						<WorkshopButton />
						<RegisterButton />
					</div>
				</div>
				<div className='flex flex-col'>
					<Image
						src='/img/course/courseDetail1.png'
						width={545}
						height={353}
						alt='Course Detail Image'
						className='mt-5 mb-14'
					/>
					<CourseAttr />
				</div>
			</div>
			{/* Stats */}
			<StatSection />
		</HeroBg>
	)
};

type CourseHeroSectionProps = {};

export default CourseHeroSection;