import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReviewCard from '@/components/common/review-list/ReviewCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Review } from '@/services/review/types';
import Routes from '@/utils/routes';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ReviewSection: React.FC<ReviewSectionProps> = ({ headline, subHeadline, reviewList, showReadMore = true }) => {
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
							<p className="text-xs md:text-base text-tertiary">Read more</p>
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
					<Splide options={{ perPage: 2, autoplay: true, rewind: true, gap: 100, padding: 50 }} aria-label="Team Members">
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
	showReadMore?: boolean;
	reviewPagination: Record<string, number>;
};

export default ReviewSection;