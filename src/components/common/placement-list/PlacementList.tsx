import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlacementCard from '@/components/common/placement-list/PlacementCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Placement } from '@/services/placement/types';
import Routes from '@/utils/routes';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const PlacementList: React.FC<PlacementListProps> = ({ headline, subHeadline, placementList, showReadMore = true }) => {
	return (
		<>
			<a id='success-stories' />
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative pt-10 mb-14 md:mb-20">
				{showReadMore && (
					<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
						<Link href={Routes.studentReviews()}>
							<p className="text-tertiary">Read more</p>
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
					<Splide options={{
						perPage: 3,
						breakpoints: {
							1200: { perPage: 2 },
							800: { perPage: 1 }
						},
						autoplay: true,
						rewind: true
					}} aria-label="Team Members">
						{placementList?.length > 0 && placementList.map((placement) => (
							<SplideSlide key={placement.id}>
								<div className="mb-10">
									<PlacementCard
										key={placement.id}
										studentName={placement.studentName}
										collegeCourseName={placement.collegeCourseName}
										collegeName={placement.collegeName}
										designation={placement.designation}
										ctc={placement.ctc}
										companyImage={placement.companyImage}
										studentImage={placement.studentImage}
									/>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</>
	)
};

type PlacementListProps = {
	headline: string;
	subHeadline: string;
	placementList: Placement[];
	showReadMore?: boolean;
	placementPagination: Record<string, number>;
};

export default PlacementList;