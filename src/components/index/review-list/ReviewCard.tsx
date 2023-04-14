import React from 'react';
import Image from 'next/image';
import { ImageType } from '@/utils/types';

const ReviewCard: React.FC<ReviewCardProps> = ({
	customerName,
	planName,
	reviewText,
	customerImage
}) => {
	return (
		<div className='card w-full flex gap-3 md:gap-8 md:w-120 my-3 md:my-8 shadow-reviewCard rounded-2xl p-5 bg-white h-56 mx-auto'>
			<div className="flex-none relative w-9 h-9 md:w-16 md:h-16 rounded-full overflow-hidden">
				<Image
					src='/img/home/customerImage.png'
					className='pfp'
					width={114}
					height={114}
					alt={customerName}
					style={{ zIndex: -1 }}
				/>
			</div>

			<div className='textSection flex flex-col gap-3 md:gap-5' style={{ zIndex: 1 }}>
				<div className='flex justify-between'>
					<div className='studentIntro flex flex-col'>
						<p className='studentName text-sm md:text-xl text-primary font-semibold'>{customerName}</p>
						<p className='studentName text-sm md:text-xl text-primary font-semibold'>{planName}</p>
					</div>
				</div>
				<p className='reviewText text-aphonic text-xs md:text-sm'>{reviewText.split(' ').slice(0, 120).join(' ')}...</p>
			</div>
		</div>
	)
};

type ReviewCardProps = {
	customerName: string;
	planName: string;
	reviewText: string;
	customerImage?: ImageType;
};

export default ReviewCard;