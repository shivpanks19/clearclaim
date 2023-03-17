import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const SpecialSection: React.FC<SpecialSectionProps> = ({ headline, subHeadline }) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-16 md:mb-32 mx-5'
			/>
			<div className="cards xl:w-76 md:mb-20 flex flex-col items-center xl:flex-row md:justify-between mx-5 md:mx-auto">
				<div className="rounded flex flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 mb-16">
					<div className="relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center">
						<Image
							src='/img/home/personalized-content.png'
							alt='Personalised Course Curriculum'
							fill
						/>
					</div>
					<div className="title text-sm md:text-xl text-title font-semibold text-center">Personalised Course Curriculum</div>
					<div className="subtitle text-desc text-xs md:text-base text-center ">We offer individual attention to choose right course for your career</div>
				</div>
				<div className="rounded flex  flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 md:px-10 mb-16">
					<div className="relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center">
						<Image
							src='/img/home/placement-opportunity.png'
							alt='Placement Opportunity'
							fill
						/>
					</div>
					<div className="title text-sm md:text-xl text-title font-semibold text-center grow">Placement Opportunity</div>
					<div className="subtitle text-desc text-xs md:text-base text-center">Getting unlimited placement opportunities till you get placed</div>
				</div>
				<div className="rounded flex flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 md:px-10 mb-11 md:mb-16">
					<div className="relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center">
						<Image
							src='/img/home/mentorship.png'
							alt='Mentorship'
							fill
						/>
					</div>
					<div className="title text-sm md:text-xl text-title font-semibold text-center grow">1:1 Mentorship</div>
					<div className="subtitle text-desc text-xs md:text-base text-center">Our pool of mentors ensure your every doubt is addressed immediately</div>
				</div>
			</div>
		</>
	)
};

type SpecialSectionProps = {
	headline: string;
	subHeadline: string;
};

export default SpecialSection;