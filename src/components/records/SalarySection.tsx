import React from 'react';
import Image from 'next/image';
import SalaryCard from '@/components/records/SalaryCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const SalarySection: React.FC<SalarySectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Student Salaries'
				subtitle='Salaries offered at Tap Academy'
				className=' mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-12 md:mb-20 md:pt-10 cardContainer md:w-42 md:grid-cols-2 lg:grid-cols-3 md:gap-9 px-5 grid place-items-center">
				<SalaryCard />
				<SalaryCard />
				<SalaryCard />
			</div>
		</>
	)
};

type SalarySectionProps = {
};

export default SalarySection;