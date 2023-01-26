import React from 'react';
import Image from 'next/image';

const PlacementCard: React.FC<PlacementCardProps> = () => {
	return (
		<div className="card rounded shadow md:w-96 flex flex-col items-center py-7 md:py-8">
			<Image
				src='/img/home/priya.png'
				className='mb-4'
				width={114}
				height={114}
				alt='Priya'
			/>
			<p className='studentName mb-4 md:text-2xl text-primary font-semibold'>Priya Munot</p>
			<p className='courseName text-tertiary text-sm md:text-base font-medium'>BE CSE 2022</p>
			<p className='collegeName text-desc text-xs md:text-base mb-5 md:mb-10'>SP JAIN College of Engineering</p>
			<Image
				src='/img/home/accenture.png'
				className='mb-6 md:mb-10'
				width={152}
				height={39}
				alt='Priya'
			/>
			<p className='designation text-primary text-sm md:text-base font-semibold'>Associate Engineer</p>
			<p className='ctc md:text-2xl text-tertiary font-bold'>7.5 LPA</p>
		</div>
	)
};

type PlacementCardProps = {};

export default PlacementCard;