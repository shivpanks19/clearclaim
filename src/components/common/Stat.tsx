import React from "react";
import Image from "next/image";

const Stat: React.FC<StatProps> = () => {
	return (
		<div className='w-76 shadow rounded mx-auto py-8 -mt-20 mb-20 bg-white flex justify-evenly'>
			<div className='flex flex-col justify-center items-center border-primary2 border-r h-20 w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>35,000</span>
					<Image
						src='/img/stat-stroke-1.png'
						width={146}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl font-normal z-10'>Students Trained</p>
			</div>
			<div className='flex flex-col justify-center items-center h-20 w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>600</span>
					<Image
						src='/img/stat-stroke-2.png'
						width={88}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl font-normal z-10'>Workshops Conducted</p>
			</div>
			<div className='flex flex-col justify-center items-center border-primary2 border-l h-20 w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>35,000</span>
					<Image
						src='/img/stat-stroke-3.png'
						width={146}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl font-normal z-10'>Placement Drives</p>
			</div>

		</div>
	)
};

type StatProps = {};

export default Stat;