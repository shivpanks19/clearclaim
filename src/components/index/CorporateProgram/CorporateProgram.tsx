import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ImageType } from '@/utils/types';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = ({ corporateProgramPics }) => {
	return (
		<div className='mb-28 w-full'>
			<SectionHeadline
				className='mb-10'
				title='Campus to Corporate Program'
				subtitle='Your journey towards your dream job'
			/>
			<div className="w-80 md:w-[550px] lg:w-[750px] xl:w-76 h-24 h-48 md:h-80 xl:h-[623px] mx-auto">
				<Splide options={{ rewind: true }} aria-label="Corporate Program">
					{corporateProgramPics?.length > 0 && corporateProgramPics.map((pic) => (
						<SplideSlide key={pic.id}>
							<div style={{ position:'relative', paddingTop: 'calc(311/ 613 * 100%)', background: `url(${pic.url})`, backgroundSize: '100% 100%' }}>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	)
};

type CorporateProgramSectionProps = {
	corporateProgramPics: ImageType[];
};

export default CorporateProgramSection;