import React from 'react';
import Image from 'next/image';

const PlacementCard: React.FC<PlacementCardProps> = () => {
	return (
		<div className="card rounded shadow w-96 flex flex-col items-center py-8">
			<Image
				src='/img/home/priya.png'
				className='mb-4'
				width={114}
				height={114}
				alt='Priya'
			/>
			<p className='studentName mb-4 text-2xl text-primary font-semibold'>Priya Munot</p>
			<p className='courseName text-tertiary font-medium'>BE CSE 2022</p>
			<p className='collegeName text-desc mb-10'>SP JAIN College of Engineering</p>
			<Image
				src='/img/home/accenture.png'
				className='mb-10'
				width={152}
				height={39}
				alt='Priya'
			/>
			<p className='designation text-primary font-semibold'>Associate Engineer</p>
			<p className='ctc text-2xl text-tertiary font-bold'>7.5 LPA</p>
		</div>
	)
};

type PlacementCardProps = {};

export default PlacementCard;