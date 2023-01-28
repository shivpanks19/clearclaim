import React from 'react';
import Image from 'next/image';
import ReviewCard from '@/components/common/review-list/ReviewCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Review } from '@/services/review/types';

const ReviewSection: React.FC<ReviewSectionProps> = ({ headline, subHeadline, reviewList }) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-5 md:mb-20 pt-5 md:pt-10">
				<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
					<p className="text-xs md:text-base text-tertiary">Read more</p>
					<Image
						src='/img/arrow_right_blue.png'
						width={20}
						height={20}
						alt='Right arrow'
					/>
				</div>
				<div className="cardContainer md:w-42 md:grid-cols-2 gap-9 mx-5 hidden md:grid">
					{reviewList?.length > 0 && reviewList.map((review) => (
						<ReviewCard
							key={review.id}
							studentName={review.studentName}
							designation={review.designation}
							companyName={review.companyName}
							ctc={review.ctc}
							reviewText={review.reviewText}
							rating={review.rating}
							studentImage={review.studentImage}
						/>
					))}
				</div>
			</div>
		</>
	)
};

type ReviewSectionProps = {
	largeFormat?: boolean;
	headline: string;
	subHeadline: string;
	reviewList: Review[];
};

export default ReviewSection;