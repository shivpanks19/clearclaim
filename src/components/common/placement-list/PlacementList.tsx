import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlacementCard from '@/components/common/placement-list/PlacementCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Placement } from '@/services/placement/types';
import Pagination from '@/components/common/Pagination';
import Routes from '@/utils/routes';

const PlacementList: React.FC<PlacementListProps> = ({ headline, subHeadline, placementList, showReadMore = true }) => {
	const [currentList, setCurrentList] = useState([]);

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

				<div className="cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 mb-4">
					{currentList?.length > 0 && currentList.map((placement) => (
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
				<Pagination
					fullList={placementList}
					pageSize={3}
					setCurrentList={setCurrentList}
					autoScroll={3000}
				/>
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