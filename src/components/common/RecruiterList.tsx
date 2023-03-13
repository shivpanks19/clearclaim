import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Recruiter } from '@/services/recruiter/types';
import Pagination from '@/components/common/Pagination';
import animation from '@/styles/animation.module.scss';

const RecruiterSection: React.FC<RecruiterSectionProps> = ({ headline, subHeadline, recruiterList }) => {
	const [currentList, setCurrentList] = useState([]);

	return (
		<div>
			<SectionHeadline
				className='mb-5 md:mb-12 mx-5'
				title={headline}
				subtitle={subHeadline}
			/>
			<div className="mb-14 md:mb-20">
				<div className={`cards mb-4 xl:w-76 mx-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-8 place-items-center md:gap-14 ${animation.slideLeft}`}>
					{currentList?.length > 0 && currentList.map((recruiter) => (
						<div
							key={recruiter.id}
							className={`relative w-36 md:w-60 h-9 md:h-16 mb-4  `}
						>
							<Image
								src={recruiter.recruiterImage.url}
								fill
								alt={recruiter.recruiterName}
							/>
						</div>
					))}
				</div>
				<Pagination
					fullList={recruiterList}
					pageSize={8}
					autoScroll={3000}
					setCurrentList={setCurrentList}
				/>
			</div>
		</div>
	)
};

type RecruiterSectionProps = {
	headline: string;
	subHeadline: string;
	recruiterList: Recruiter[];
};

export default RecruiterSection;