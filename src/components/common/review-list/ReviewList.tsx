import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReviewCard from '@/components/common/review-list/ReviewCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Review } from '@/services/review/types';
import Pagination from '@/components/common/Pagination';
import Routes from '@/utils/routes';

const ReviewSection: React.FC<ReviewSectionProps> = ({ headline, subHeadline, reviewList, showReadMore = true, reviewPagination }) => {
	const [page, setPage] = useState(reviewPagination.page);
	const router = useRouter();

	const handlePageChange = (pageNumber) => {
		router.push({ query: { ...router.query, reviewPage: pageNumber } }, undefined, { scroll: false });
		setPage(pageNumber)
	};

	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative pt-5 md:pt-10 mb-4">
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
				<div className="cardContainer w-42 md:grid-cols-2 gap-9 mx-5 grid">
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
			<Pagination
				className='mb-5 md:mb-20'
				totalPageCount={reviewPagination.pageCount}
				currentPage={page}
				onPageChange={handlePageChange}
			/>
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