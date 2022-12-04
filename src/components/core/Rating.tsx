import React from 'react';
import Image from 'next/image';

const Rating: React.FC<RatingProps> = () => {
	return (
		<div className="stars flex gap-1 mr-3">
			<Image
				src='/img/home/star.png'
				height={20}
				width={22}
				alt='Course thumbnail'
			/>
			<Image
				src='/img/home/star.png'
				height={20}
				width={22}
				alt='Course thumbnail'
			/>
			<Image
				src='/img/home/star.png'
				height={20}
				width={22}
				alt='Course thumbnail'
			/>
			<Image
				src='/img/home/star.png'
				height={20}
				width={22}
				alt='Course thumbnail'
			/>
		</div>
	)
};

type RatingProps = {};

export default Rating;