import React from 'react';

const GlassdoorSalaryBars: React.FC<GlassdoorSalaryBarsProps> = ({ glassdoorSalaryData }) => {
	return (
		<div className="w-full">
			<div className='w-full flex my-3 md:my-8 justify-between items-baseline gap-1'>
				<div className="w-16 rounded h-20 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-36 bg-gd-salary-bar-blue"></div>
				<div className="w-16 rounded h-28 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-16 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-8 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-6 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-5 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-4 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-3 bg-gd-salary-bar-gray"></div>
				<div className="w-16 rounded h-2 bg-gd-salary-bar-gray"></div>
			</div>
			<div className="limits flex justify-between">
				<div className="flex flex-col items-center">
					<p className="lowerlimit text-xs text-primary">₹{parseFloat(glassdoorSalaryData.minimumSalary).toFixed(2)}L</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="lowerlimit text-xs text-primary"></p>
					<p className="lowerlimit text-xs text-primary">Median: ₹{parseFloat(glassdoorSalaryData.averageSalary).toFixed(2)}L</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="upperlimit text-xs text-primary">₹{parseFloat(glassdoorSalaryData.maximumSalary).toFixed(2)}L</p>
				</div>
			</div>
		</div>

	)
};

type GlassdoorSalaryBarsProps = {
	glassdoorSalaryData?: Record<string, string>;
};

export default GlassdoorSalaryBars;