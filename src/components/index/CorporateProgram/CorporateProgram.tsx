import React from 'react';
import SectionHeadline from '@/components/common/SectionHeadline';
import CorporateProgramNav from '@/components/index/CorporateProgram/CorporateProgramNav';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<div className='hidden xl:block mb-28'>
			<SectionHeadline
				className='mb-10'
				title='Campus to Corporate Program'
				subtitle='Your journey towards your dream job'
			/>
			<CorporateProgramNav />
		</div>
	)
};

type CorporateProgramSectionProps = {};

export default CorporateProgramSection;