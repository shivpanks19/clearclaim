import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Rating: React.FC<RatingProps> = ({ className, rating, large }) => {
	return (
		<div className={classNames('stars flex gap-1 mr-3', className)}>
			{rating && Array.apply(null, Array(rating)).map((r) => (
				<div
					key={r}
					className={classNames({
						'relative  ': true,
						'w-5 h-5 md:h-9 md:w-9': large,
						'w-3 h-3 md:w-5 md:h-5': !large
					})}
				>
					<Image
						src='/img/home/star.png'
						fill
						alt='Course thumbnail'
					/>
				</div>
			))}
		</div>
	)
};

type RatingProps = {
	className?: string;
	rating?: number;
	large?: boolean;
};

export default Rating;