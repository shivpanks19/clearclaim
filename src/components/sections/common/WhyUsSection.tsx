import React from 'react';
import SectionHeadline from '@/components/core/SectionHeadline';
import WhyUsNav from '@/components/corporate/WhyUsNav';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				className='mb-12'
				title='Why choose us'
				subtitle='What makes us special?'
			/>
			<WhyUsNav />
		</>
	)
};

type CorporateProgramSectionProps = {};

export default CorporateProgramSection;