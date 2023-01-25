import React from 'react';
import Image from 'next/image';
import ReviewCard from '@/components/common/review-list/ReviewCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const ReviewSection: React.FC<ReviewSectionProps> = ({ largeFormat }) => {
	return (
		<>
			<SectionHeadline
				title='Student Reviews'
				subtitle='Top placement records at Tap Academy'
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-5 md:mb-20 pt-10">
				<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
					<p className="text-tertiary">Read more</p>
					<Image
						src='/img/arrow_right_blue.png'
						width={20}
						height={20}
						alt='Right arrow'
					/>
				</div>
				<div className="cardContainer md:w-42 md:grid-cols-2 gap-9 mx-5 md:hidden grid">
					<ReviewCard />
					<ReviewCard />
				</div>
				<div className="cardContainer md:w-42 md:grid-cols-2 gap-9 mx-5 hidden md:grid">
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					{largeFormat && (
						<>
							<ReviewCard />
							<ReviewCard />
						</>
					)}
				</div>
			</div>
		</>
	)
};

type ReviewSectionProps = {
	largeFormat?: boolean;
};

export default ReviewSection;