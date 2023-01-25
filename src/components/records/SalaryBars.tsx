import React from 'react';

const SalaryBars: React.FC<SalaryBarsProps> = () => {
	return (
		<div className="">
			<div className='w-full flex my-3 md:my-8 justify-between items-baseline'>
				<div className="w-9 h-12 bg-tertiaryFade2"></div>
				<div className="w-9 h-16 bg-tertiaryFade1"></div>
				<div className="w-9 h-14 bg-tertiaryFade2"></div>
				<div className="w-9 h-10 bg-tertiaryFade2"></div>
				<div className="w-9 h-8 bg-tertiaryFade2"></div>
				<div className="w-9 h-6 bg-tertiaryFade2"></div>
			</div>
			<div className="limits flex justify-between">
				<div className="flex flex-col items-center">
					<p className="lowerlimit text-xs text-primary">₹ 5 LPA</p>
					<p className="lowerlimit text-xs text-primary">LOW</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="upperlimit text-xs text-primary">₹ 22 LPA</p>
					<p className="upperlimit text-xs text-primary">HIGH</p>
				</div>
			</div>
		</div>

	)
};

type SalaryBarsProps = {};

export default SalaryBars;