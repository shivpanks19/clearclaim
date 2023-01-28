import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Recruiter } from '@/services/recruiter/types';

const RecruiterSection: React.FC<RecruiterSectionProps> = ({ headline, subHeadline, recruiterList }) => {
	return (
		<>
			<SectionHeadline
				className='mb-5 md:mb-12 mx-5'
				title={headline}
				subtitle={subHeadline}
			/>
			<div className="cards xl:w-76 mb-11 md:mb-20 mx-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-8 place-items-center md:gap-14">
				{recruiterList?.length > 0 && recruiterList.map((recruiter) => (
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