import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';

const RecordHeroSection: React.FC<RecordHeroSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className='grid md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center md:grid-cols-2'>
				<div className='flex flex-col md:pt-20 mb-7 md:mb-10'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						That’s what our super achievers say about us
					</h1>
					<p className='text-aphonic text-lg'>
						Tap Academy is a skilling organization trains students to sync with current IT needs. Our Specialized Job Guarantee Coding Courses transform from campus students to corporate employee.
					</p>
				</div>
				<div className='flex flex-col mb-8'>
					<Image
						src='/img/trophy.png'
						width={552}
						height={461}
						alt='Hero Image'
					/>
				</div>
			</div>
		</div>
	)
};

type RecordHeroSectionProps = {};

export default RecordHeroSection;