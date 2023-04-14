import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReviewCard from '@/components/index/review-list/ReviewCard';
import { Review } from '@/services/review/types';
import Routes from '@/utils/routes';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviewList, showReadMore = false }) => {
	return (
		<div className='bg-secondary relative lg:pb-32' style={{ zIndex: -1 }} >
			<Image
				src='/img/home/video_bg_artifact.png'
				width={800}
				height={535}
				alt='Video Bg Artifact'
				className="absolute top-16 xl:-top-0 left-0 w-1/2 mb-4"
				style={{ zIndex: -1 }}
			/>
			<div className='relative text-primary text-xl font-bold lg:text-4xl justify-center mb-1 lg:mb-2 flex align-center' >
				What our customers
				<span>
					<div className="relative w-20 mx-1 h-8 md:w-32 md:h-12">
						<Image
							src='/img/home/customerReviewPhoto.png'
							fill
							alt='Customer Review Photo'
							className="mb-4"
						/>
					</div>
				</span>
				say
			</div>
			<div className="xl:w-76 mx-auto relative pt-5 md:pt-10 ">
				{showReadMore && (
					<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
						<Link href={Routes.studentReviews()}>
							<p className="text-xs md:text-base text-tertiary">Read more reviews</p>
						</Link>
						<Image
							src='/img/arrow_right_blue.png'
							width={20}
							height={20}
							alt='Right arrow'
						/>
					</div>
				)}
				<div className="cardContainer w-full md:mx-0 mb-4">
					<Splide
						options={{
							perPage: 2,
							type: 'loop',
							arrows: false,
							breakpoints: {
								1200: {
									perPage: 1,
								},
							},
							autoplay: true,
							rewind: true,
							gap: 50,
							padding: '10%'
						}}
						aria-label="Reviews">

						{reviewList?.length > 0 && reviewList.map((review) => (
							<SplideSlide key={review.id}>
								<ReviewCard
									key={review.id}
									customerName={review.customerName}
									planName={review.planName}
									reviewText={review.reviewText}
									customerImage={review.customerImage}
								/>
							</SplideSlide>
						))}

					</Splide>
				</div>
			</div >

		</div>
	)
};

type ReviewSectionProps = {
	largeFormat?: boolean;
	reviewList: Review[];
	showReadMore?: boolean;
};

export default ReviewSection;