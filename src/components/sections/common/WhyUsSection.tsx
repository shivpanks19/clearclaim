import React from 'react';
import SectionHeadline from '@/components/core/SectionHeadline';

const CorporateProgramSection: React.FC<CorporateProgramSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				className='mb-5'
				title='Campus to Corporate Program'
				subtitle='Your journey towards your dream job'
			/>
			<div className="w-76 h-64 mx-auto mb-20 items-center bg-light rounded p-20">
				<p className='text-primary text-4xl pb-5'>
					Work in progress
				</p>
				<p className='text-primary text-lg'>
					Need more details...
				</p>
			</div>
		</>
	)
};

type CorporateProgramSectionProps = {};

export default CorporateProgramSection;