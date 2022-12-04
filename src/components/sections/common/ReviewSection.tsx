import React from 'react';
import Image from 'next/image';
import ReviewCard from '@/components/ReviewCard';
import SectionHeadline from '@/components/core/SectionHeadline';

const ReviewSection: React.FC<ReviewSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Student Reviews'
				subtitle='Top placement records at Tap Academy'
				className='mb-10'
			/>
			<div className="w-76 mx-auto relative mb-20 pt-10">
				<div className='read_more absolute right-0 top-0 flex gap-3 align-middle'>
					<p className="text-tertiary">Read more</p>
					<Image
						src='/img/arrow_right_blue.png'
						width={20}
						height={20}
						alt='Right arrow'
					/>
				</div>
				<div className="cardContainer w-42 grid grid-cols-2 gap-9">
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</div>
			</div>
		</>
	)
};

type ReviewSectionProps = {};

export default ReviewSection;