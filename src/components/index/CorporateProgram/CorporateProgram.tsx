import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<div className='mb-28 w-full'>
			<SectionHeadline
				className='mb-10'
				title='Campus to Corporate Program'
				subtitle='Your journey towards your dream job'
			/>
			<div className="w-80 md:w-[550px] lg:w-[750px] xl:w-76 h-24 h-48 md:h-80 xl:h-[623px] mx-auto">
				<Splide options={{ rewind: true }} aria-label="React Splide Example">
					<SplideSlide>
						<div className="h-48 md:h-80 lg:h-96 xl:h-[623px] w-76">
							<Image
								src="/img/corp_program_1.jpg"
								alt="Dream job journey 1"
								fill
								sizes="100vw"
							/>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="h-48 md:h-80 lg:h-96 xl:h-[623px] w-76">
							<Image
								src="/img/corp_program_2.jpg"
								alt="Dream job journey 2"
								fill
								sizes="100vw"
							/>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="h-48 md:h-80 lg:h-96 xl:h-[623px] w-76">
							<Image
								src="/img/corp_program_3.jpg"
								alt="Dream job journey 3"
								fill
								sizes="100vw"
							/>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</div>
	)
};

type CorporateProgramSectionProps = {};

export default CorporateProgramSection;