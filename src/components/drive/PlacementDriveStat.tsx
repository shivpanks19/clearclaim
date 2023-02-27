import React from "react";
import Counter from '@/components/common/Counter';

const PlacementDriveStat: React.FC<PlacementDriveStatProps> = ({ conductedDrives, upcomingDrives }) => {
	return (
		<div className='mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex justify-center items-center md:justify-evenly p-5'>
			<div className='flex flex-col justify-center items-center md:mb-0  border-primary2 md:border-0 border-r h-30 md:h-20 w-64 md:w-1/3 text-center'>
				<p className='text-4xl lg:text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}><Counter finalNum={conductedDrives} /> +</span>
				</p>
				<p className='text-xs lg:text-xl text-primary3 font-normal z-10'>Placement Drives Conducted</p>
			</div>
			<div className='flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 md:mb-0 border-primary2 md:border-0 text-center'>
				<p className='text-4xl lg:text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}><Counter finalNum={upcomingDrives} /> +</span>
				</p>
				<p className='text-xs lg:text-xl text-primary3 font-normal z-10'>Upcoming Placement Drives</p>
			</div>
		</div>
	)
};

type PlacementDriveStatProps = {
	conductedDrives: number;
	upcomingDrives: number;
};

export default PlacementDriveStat;