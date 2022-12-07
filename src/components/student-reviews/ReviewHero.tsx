import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';

const ReviewHeroSection: React.FC<ReviewHeroSectionProps> = () => {
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
			<div className='grid gap-8 md:w-76 mx-auto mb-32 items-center' style={{ gridTemplateColumns: '1.25fr 1fr' }}>
				<div className='flex flex-col pt-20'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						That’s what our super achievers say about us
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						Tap Academy is a skilling organization trains students to sync with current IT needs. Our Specialized Job Guarantee Coding Courses transform from campus students to corporate employee.
					</p>
				</div>
				<div className='flex flex-col'>

				</div>
			</div>
		</div>
	)
};

type ReviewHeroSectionProps = {};

export default ReviewHeroSection;