import React from 'react';
import Image from 'next/image';
import PlacementCard from '@/components/common/placement-list/PlacementCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Placement } from '@/services/placement/types';

const PlacementList: React.FC<PlacementListProps> = ({ headline, subHeadline, placementList, showReadMore = true }) => {
	return (
		<>
			<a id='success-stories' />
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-14 md:mb-20 pt-10">
				{showReadMore && (
					<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
						<p className="text-tertiary">Read more</p>
						<Image
							src='/img/arrow_right_blue.png'
							width={20}
							height={20}
							alt='Right arrow'
						/>
					</div>
				)}

				<div className="cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 place-items-center">
					{placementList?.length > 0 && placementList.map((placement) => (
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
					))}
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
};

export default PlacementList;