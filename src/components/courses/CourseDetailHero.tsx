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
			<div className='grid md:grid-cols-2 md:gap-8 xl:w-76 mx-5 md:mx-auto mb-6 md:mb-32 items-center'>
				<div className='flex flex-col md:pt-20'>
					<h1 className='text-3xl md:text-hero text-primary'>
						Master Course
					</h1>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						Full Stack Web Development:
					</h1>
					<p className='text-aphonic text-lg md:text-2xl mb-4 md:mb-10'>
						Learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
					</p>
					<div className="course-rating flex place-items-center mb-6 md:mb-14">
						<Rating />
						<p className="student-number text-desc font-normal"> 2486 students</p>
					</div>
					<div className="hidden md:flex md:flex-row md:gap-14 md:mb-20 pr-8">
						<WorkshopButton />
						<RegisterButton />
					</div>
				</div>
				<div className='flex flex-col'>
					<div className="relative w-80 h-52 md:w-auto md:h-96 max-w-full md:mt-5 mb-6 md:mb-14">
						<Image
							src='/img/course/courseDetail1.png'
							alt='Course Detail Image'
							fill
						/>
					</div>
					<div className="flex-col md:hidden gap-10 mb-6 md:mb-10">
						<WorkshopButton />
						<RegisterButton />
					</div>
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