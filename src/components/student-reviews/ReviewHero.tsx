import React from "react";
import Image from "next/image";
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
			<div className='xl:w-76 grid md:grid-cols-2 md:gap-8 px-5 mx-auto mb-12 md:mb-32 items-center'>
				<div className='flex flex-col md:pt-20'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						That’s what our super achievers say about us
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						Tap Academy is a skilling organization trains students to sync with current IT needs. Our Specialized Job Guarantee Coding Courses transform from campus students to corporate employee.
					</p>
				</div>
				<div className='mb-10'>
					<Image
						src='/img/achiever.png'
						width={577}
						height={466}
						alt='Hero Image'
					/>
				</div>
			</div>
		</div>
	)
};

type ReviewHeroSectionProps = {};

export default ReviewHeroSection;