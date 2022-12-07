import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const SpecialSection: React.FC<SpecialSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='What&apos;s special'
				subtitle='Designed for your career growth'
				className='mb-32'
			/>
			<div className="cards w-76 mb-20 mx-auto flex justify-between">
				<div className="shadow rounded flex flex-col items-center gap-3 w-96 pb-10 px-10">
					<Image
						src='/img/home/personalized-content.png'
						className='-mt-16 self-center'
						width={132}
						height={132}
						alt='Personlized Course Content'
					/>
					<div className="title text-xl text-title font-semibold	">Personlized Course Content</div>
					<div className="subtitle text-desc text-center ">We offer individual attention to choose right course for your career</div>
				</div>
				<div className="shadow rounded flex flex-col items-center gap-3 w-96 pb-10 px-10">
					<Image
						src='/img/home/placement-opportunity.png'
						className='-mt-16 self-center'
						width={132}
						height={132}
						alt='Placement Opportunity'
					/>
					<div className="title text-xl text-title font-semibold	">Placement Opportunity</div>
					<div className="subtitle text-desc text-center">We offer individual attention to choose right course for your career</div>
				</div>
				<div className="shadow rounded flex flex-col items-center gap-3 w-96 pb-10 px-10">
					<Image
						src='/img/home/mentorship.png'
						className='-mt-16 self-center'
						width={132}
						height={132}
						alt='Mentorship'
					/>
					<div className="title text-xl text-title font-semibold	">1:1 Mentorship</div>
					<div className="subtitle text-desc text-center">We offer individual attention to choose right course for your career</div>
				</div>
			</div>
		</>
	)
};

type SpecialSectionProps = {};

export default SpecialSection;