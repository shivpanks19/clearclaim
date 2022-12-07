import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Rating: React.FC<RatingProps> = ({ className }) => {
	return (
		<div className={classNames('stars flex gap-1 mr-3', className)}>
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

type RatingProps = {
	className?: string;
};

export default Rating;