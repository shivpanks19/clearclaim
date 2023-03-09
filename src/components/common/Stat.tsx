import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "odometer/themes/odometer-theme-default.css";
let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(
	async () => {
		const mod = await import("react-odometerjs");
		loaded = true;
		if (loadedCallback != null) {
			loadedCallback();
		}
		return mod;
	},
	{
		ssr: false,
		// @ts-ignore
		loading: () => 0
	}
);

const Stat: React.FC<StatProps> = ({ studentsTrained, workshopsConducted, placementDrives }) => {
	const [odometerLoaded, setOdometerLoaded] = useState(loaded);
	const [studentsTrainedInternal, setStudentsTrainedInternal] = useState(1);
	const [workshopsConductedInternal, setWorkshopsConductedInternal] = useState(1);
	const [placementDrivesInternal, setPlacementDrivesInternal] = useState(1);

	loadedCallback = () => {
		setOdometerLoaded(true);
	};

	useEffect(() => {
		if (!odometerLoaded) {
			setStudentsTrainedInternal(1);
			setWorkshopsConductedInternal(1);
			setPlacementDrivesInternal(1);
		}
	}, [odometerLoaded]);

	useEffect(() => {
		setStudentsTrainedInternal(studentsTrained);
		setWorkshopsConductedInternal(workshopsConducted);
		setPlacementDrivesInternal(placementDrives);
	}, [studentsTrained, workshopsConducted, placementDrives]);
	return (
		<div className='mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex flex-col justify-center items-center md:flex-row md:justify-evenly'>
			<div className='flex flex-col justify-center items-center pb-7 mb-7 md:mb-0  border-primary2 border-b md:border-0 md:border-r h-30 md:h-20 w-64 md:w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<Odometer value={studentsTrainedInternal} format="(,ddd)" theme="default" />
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}> +</span>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Students Trained</p>
			</div>
			<div className='flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r'>
				<p className='text-5xl text-primary font-semibold relative'>
					<Odometer value={workshopsConductedInternal} format="(,ddd)" theme="default" />
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}> +</span>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Workshops Conducted</p>
			</div>
			<div className='flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<Odometer value={placementDrivesInternal} format="(,ddd)" theme="default" />
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}> +</span>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Placement Drives</p>
			</div>

		</div>
	)
};

type StatProps = {
	studentsTrained: number;
	workshopsConducted: number;
	placementDrives: number;
};

export default Stat;