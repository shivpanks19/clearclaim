import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';

const CourseHeroSection: React.FC<CourseHeroSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left;',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className='grid gap-8 md:w-76 mx-auto mb-32 items-center' style={{ gridTemplateColumns: '1.25fr 1fr' }}>
				<div className='flex flex-col pt-20'>
					<h1 className='text-3xl md:text-hero text-primary'>
						Tap Academy&apos;s
					</h1>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						Campus to Corporate Program
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						Tap Academy is a skilling organization trains students to sync with current IT needs. Our Specialized Job Guarantee Coding Courses transform from campus students to corporate employee.
					</p>
				</div>
				<div className='flex flex-col'>
					<Image
						src='/img/course/course_hero.png'
						width={556}
						height={349}
						alt='Hero Image'
					/>
				</div>
			</div>
		</div>
	)
};

type CourseHeroSectionProps = {};

export default CourseHeroSection;