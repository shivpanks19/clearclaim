import React from 'react';
import SalaryBars from '@/components/records/SalaryBars';

const SalaryCard: React.FC<SalaryCardProps> = ({ position, numberOfSalaries, low, high, avg }) => {
	return (
		<div className='card shadow rounded flex flex-col my-3 md:my-8 p-5 w-72'>
			<p className="text-sm md:text-lg text-primary font-semibold">{position}</p>
			{/* <p className="text-xs md:text-base text-aphonic mb-3">{numberOfSalaries} salaries</p> */}
			<p className="text-sm md:text-base font-medium text-primary">Average LPA</p>
			<p className="text-xl md:text-3xl font-bold text-tertiary">₹ {avg}</p>
			<SalaryBars
				low={low}
				high={high}
			/>
		</div>
	)
};

type SalaryCardProps = {
	position: string;
	numberOfSalaries: number;
	low: number;
	high: number;
	avg: number;
};

export default SalaryCard;