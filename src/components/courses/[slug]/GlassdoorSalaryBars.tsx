import React from 'react';

const GlassdoorSalaryBars: React.FC<GlassdoorSalaryBarsProps> = () => {
	return (
		<div className="w-full">
			<div className='w-full flex my-3 md:my-8 justify-between items-baseline gap-1'>
				<div className="w-16 h-20 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-36 bg-gd-salary-bar-blue"></div>
				<div className="w-16 h-28 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-16 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-8 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-6 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-5 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-4 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-3 bg-gd-salary-bar-gray"></div>
				<div className="w-16 h-2 bg-gd-salary-bar-gray"></div>
			</div>
			<div className="limits flex justify-between">
				<div className="flex flex-col items-center">
					<p className="lowerlimit text-xs text-primary">₹3L</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="lowerlimit text-xs text-primary"></p>
					<p className="lowerlimit text-xs text-primary">Median: ₹7L</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="upperlimit text-xs text-primary">₹15L</p>
				</div>
			</div>
		</div>

	)
};

type GlassdoorSalaryBarsProps = {};

export default GlassdoorSalaryBars;