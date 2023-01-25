import React from 'react';
import SectionHeadline from '@/components/common/SectionHeadline';
import WhyUsNav from '@/components/common/why-us/WhyUsNav';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<div className='hidden xl:block'>
			<SectionHeadline
				className='mb-12'
				title='Why choose us'
				subtitle='What makes us special?'
			/>
			<WhyUsNav />
		</div>
	)
};

type CorporateProgramSectionProps = {};

export default CorporateProgramSection;