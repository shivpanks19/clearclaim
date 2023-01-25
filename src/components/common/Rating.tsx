import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Rating: React.FC<RatingProps> = ({ className }) => {
	return (
		<div className={classNames('stars flex gap-1 mr-3', className)}>
			<div className="relative w-3 h-3 md:w-5 md:h-5">
				<Image
					src='/img/home/star.png'
					fill
					alt='Course thumbnail'
				/>
			</div>
			<div className="relative w-3 h-3 md:w-5 md:h-5">
				<Image
					src='/img/home/star.png'
					fill
					alt='Course thumbnail'
				/>
			</div>
			<div className="relative w-3 h-3 md:w-5 md:h-5">
				<Image
					src='/img/home/star.png'
					fill
					alt='Course thumbnail'
				/>
			</div>
			<div className="relative w-3 h-3 md:w-5 md:h-5">
				<Image
					src='/img/home/star.png'
					fill
					alt='Course thumbnail'
				/>
			</div>
			<div className="relative w-3 h-3 md:w-5 md:h-5">
				<Image
					src='/img/home/star.png'
					fill
					alt='Course thumbnail'
				/>
			</div>
		</div>
	)
};

type RatingProps = {
	className?: string;
};

export default Rating;