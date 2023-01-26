import React from 'react';
import Image from 'next/image';

const NewsCard: React.FC<NewsCardProps> = () => {
	return (
		<div className='card shadow rounded w-full flex-col md:flex-row gap-3 md:gap-8 place-items-center text-center mb-5 md:mb-0 p-5'>
			<Image
				src='/img/times_now.png'
				className='pfp mb-4 mx-auto'
				width={115}
				height={53}
				alt='Times Now'
			/>

			<p className="text-lg text-primary font-bold mb-2">
				TIMES NOW
			</p>
			<p>Tap Academy gains 1000000 subscribers on YouTube!</p>
			<p className='text-tertiary'>Read More</p>
		</div>
	)
};

type NewsCardProps = {};

export default NewsCard;