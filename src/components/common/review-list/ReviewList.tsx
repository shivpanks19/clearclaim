import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReviewCard from '@/components/common/review-list/ReviewCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Review } from '@/services/review/types';
import Routes from '@/utils/routes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';

const ReviewSection: React.FC<ReviewSectionProps> = ({ headline, subHeadline, reviewList, showReadMore = true, largeGrid = false }) => {
	const [options, setOptions] = useState<Record<string, any>>(null);

	useEffect(() => {
		if (largeGrid) {
			setOptions({
				perPage: 2,
				breakpoints: {
					3500: {
						perPage: 1,
						grid: {
							rows: 3,
							cols: 2
						},
					},
					1300: {
						perPage: 1,
						grid: {
							rows: 2,
							cols: 2
						},
					},
					800: {
						perPage: 1,
						grid: {
							rows: 1,
							cols: 1
						},
					},
				},
				autoplay: true,
				rewind: true,
			})
		} else {
			setOptions({
				perPage: 2,
				breakpoints: {
					1000: { perPage: 1 },
				},
				autoplay: true,
				rewind: true,
				gap: 100,
				padding: 50
			})
		}
	}, [largeGrid])

	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative pt-5 md:pt-10 mb-14 md:mb-20">
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
					{options && (
						<Splide
							extensions={{ Grid }}
							options={options}
							aria-label="Team Members">
							{reviewList?.length > 0 && reviewList.map((review) => (
								<SplideSlide key={review.id}>
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
								</SplideSlide>
							))}
						</Splide>
					)}
				</div>
			</div >
		</>
	)
};

type ReviewSectionProps = {
	largeFormat?: boolean;
	headline: string;
	subHeadline: string;
	reviewList: Review[];
	showReadMore?: boolean;
	largeGrid?: boolean;
	reviewPagination: Record<string, number>;
};

export default ReviewSection;