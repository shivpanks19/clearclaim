import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Recruiter } from '@/services/recruiter/types';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const RecruiterSection: React.FC<RecruiterSectionProps> = ({ headline, subHeadline, recruiterList }) => {
	return (
		<div>
			<SectionHeadline
				className='mb-5 md:mb-12 mx-5'
				title={headline}
				subtitle={subHeadline}
			/>
			<div className="mb-14 md:mb-20">
				<div className="cardContainer xl:w-76 mx-auto mb-4">
					<Splide options={{
					perPage: 4,
					breakpoints: {
						1200: { perPage: 2 },
						400: { perPage: 1 }
					},
					autoplay: true,
					rewind: true,
					gap: 100,
					padding: 50
				}} aria-label="Team Members">
						{recruiterList?.length > 0 && recruiterList.map((recruiter) => (
							<SplideSlide key={recruiter.id}>
								<div
									key={recruiter.id}
									className='relative mx-auto w-36 md:w-60 h-9 md:h-16 mb-10'
								>
									<Image
										src={recruiter.recruiterImage.url}
										fill
										alt={recruiter.recruiterName}
									/>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
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