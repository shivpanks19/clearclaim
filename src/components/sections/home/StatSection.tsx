import React from "react";
// import Image from "next/image";

const StatSection: React.FC<StatSectionProps> = () => {
	return(
		<div className='w-76 shadow rounded h-20 mx-auto py-20 -mt-20 mb-20 bg-white flex justify-evenly'>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-5xl text-primary font-semibold'>35,000</p>
				<p className='text-xl font-normal'>Students Trained</p>
			</div>
			<div className='flex flex-col justify-center items-center border-indigo-600'>
				<p className='text-5xl text-primary font-semibold'>600</p>
				<p className='text-xl font-normal'>Workshops Conducted</p>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-5xl text-primary font-semibold'>35,000</p>
				<p className='text-xl font-normal'>Placement Drives</p>
			</div>
		</div>
	)
};

type StatSectionProps = {};

export default StatSection;