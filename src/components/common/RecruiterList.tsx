import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Recruiter } from '@/services/recruiter/types';
import Pagination from '@/components/common/Pagination';

const RecruiterSection: React.FC<RecruiterSectionProps> = ({ headline, subHeadline, recruiterList }) => {
	const [page, setPage] = useState(1);
	const [currentList, setCurrentList] = useState([]);

	useEffect(() => {
		// setInterval(() => {
		// 	setCurrentList(recruiterList.slice(page * 8, (page + 1) * 8));
		// 	setPage(page + 1);
		// }, 2000)
	}, [])

	return (
		<>
			<SectionHeadline
				className='mb-5 md:mb-12 mx-5'
				title={headline}
				subtitle={subHeadline}
			/>
			<div className="cards xl:w-76 mb-11 md:mb-20 mx-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-8 place-items-center md:gap-14">
				{currentList?.length > 0 && currentList.map((recruiter) => (
					<div
						key={recruiter.id}
						className="relative w-36 md:w-60 h-9 md:h-16 mb-4"
					>
						<Image
							src={recruiter.recruiterImage.url}
							fill
							alt={recruiter.recruiterName}
						/>
					</div>
				))}
				<Pagination
					fullList={recruiterList}
					pageSize={8}
					setCurrentList={setCurrentList}
				/>
			</div>
		</>
	)
};

type RecruiterSectionProps = {
	headline: string;
	subHeadline: string;
	recruiterList: Recruiter[];
};

export default RecruiterSection;