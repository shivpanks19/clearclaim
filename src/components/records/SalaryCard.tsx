import React from 'react';
import SalaryBars from '@/components/records/SalaryBars';

const SalaryCard: React.FC<SalaryCardProps> = () => {
	return (
		<div className='card shadow rounded flex flex-col my-3 md:my-8 p-5 w-72'>
			<p className="text-sm md:text-lg text-primary font-semibold">Full Stack Web Developer</p>
			<p className="text-xs md:text-base text-aphonic mb-3">300 salaries</p>
			<p className="text-sm md:text-base font-medium text-primary">Average Annual Salary Offered</p>
			<p className="text-xl md:text-3xl font-bold text-tertiary">₹ 7,50,000</p>
			<SalaryBars />
		</div>
	)
};

type SalaryCardProps = {};

export default SalaryCard;