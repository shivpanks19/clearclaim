import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DriveCard from '@/components/drive/DriveCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Drive } from '@/services/upcoming-drives/types';
import Pagination from '@/components/common/Pagination';
import Routes from '@/utils/routes';

const DriveList: React.FC<DriveListProps> = ({ headline, subHeadline, driveList, showReadMore = true }) => {
	const [currentList, setCurrentList] = useState([]);

	return (
		<div className='mb-16 lg:mb-32'>
			<a id='success-stories' />
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative pt-10 mb-4">
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

				<div className="cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 place-items-center">
					{currentList?.length > 0 && currentList.map((drive) => (
						<DriveCard
							key={drive.id}
							position={drive.position}
							company={drive.company}
							location={drive.location}
							date={drive.date}
							ctc={drive.ctc}
							numberOfApplicants={drive.numberOfApplicants}
							numberOfApplicantsSelected={drive.numberOfApplicantsSelected}
							driveImage={drive.driveImage}
						/>
					))}
				</div>
			</div>
			<Pagination
				fullList={driveList}
				pageSize={3}
				setCurrentList={setCurrentList}
			/>
		</div>
	)
};

type DriveListProps = {
	headline: string;
	subHeadline: string;
	driveList: Drive[];
	showReadMore?: boolean;
	drivePagination: Record<string, number>;
};

export default DriveList;