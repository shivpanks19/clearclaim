import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlacementCard from '@/components/common/placement-list/PlacementCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Placement } from '@/services/placement/types';
import Routes from '@/utils/routes';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';

const PlacementList: React.FC<PlacementListProps> = ({ headline, subHeadline, placementList, showReadMore = true, largeGrid = false }) => {
	const [options, setOptions] = useState<Record<string, any>>(null);

	useEffect(() => {
		if (largeGrid) {
			setOptions({
				perPage: 3,
				breakpoints: {
					3500: {
						perPage: 1,
						grid: {
							rows: 3,
							cols: 3
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
				perPage: 3,
				breakpoints: {
					1200: { perPage: 2 },
					800: { perPage: 1 }
				},
				autoplay: true,
				rewind: true
			})
		}
	}, [largeGrid])

	return (
		<>
			<a id='success-stories' href='#this-is-a-success-story' />
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative pt-10 mb-14 md:mb-20">
				{showReadMore && (
					<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
						<Link href={Routes.studentReviews()}>
							<p className="text-tertiary">See more placements</p>
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
							hasTrack={false}
							extensions={{ Grid }}
							options={options} aria-label="Team Members">
							<div className="custom-wrapper relative place-items-center">
								<SplideTrack>
									{placementList?.length > 0 && placementList.map((placement) => (
										<SplideSlide key={placement.id}>
											<div className="mb-10 mx-auto">
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
								</SplideTrack>
								<div className="splide__arrows absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 mx-auto" />
							</div>
						</Splide>
					)}
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
	largeGrid?: boolean;
	placementPagination: Record<string, number>;
};

export default PlacementList;