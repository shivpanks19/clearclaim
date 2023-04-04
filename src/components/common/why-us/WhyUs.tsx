import React from 'react';
import SectionHeadline from '@/components/common/SectionHeadline';
import WhyUsNav from '@/components/common/why-us/WhyUsNav';

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ headline, subHeadline }) => {
	return (
		<div className='hidden xl:block'>
			<a id='why-tap-academy'  href='#' />
			<SectionHeadline
				className='mb-12'
				title={headline}
				subtitle={subHeadline}
			/>
			<WhyUsNav />
		</div>
	)
};

type WhyUsSectionProps = {
	headline: string;
	subHeadline: string;
};

export default WhyUsSection;