import React from 'react';
import SectionHeadline from '@/components/core/SectionHeadline';
import CorporateProgramNav from '@/components/corporate/CorporateProgramNav';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<div className='mb-28'>
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