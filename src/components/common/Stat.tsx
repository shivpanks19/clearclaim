import React, { useState, useEffect } from "react";
import Image from "next/image";
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

const Stat: React.FC<StatProps> = ({ amountRecovered, customers, experts }) => {
	const [odometerLoaded, setOdometerLoaded] = useState(loaded);
	const [amountRecoveredInternal, setAmountRecoveredInternal] = useState(1);
	const [customersInternal, setCustomersInternal] = useState(1);
	const [expertsInternal, setExpertsInternal] = useState(1);

	loadedCallback = () => {
		setOdometerLoaded(true);
	};

	useEffect(() => {
		if (!odometerLoaded) {
			setAmountRecoveredInternal(1);
			setCustomersInternal(1);
			setExpertsInternal(1);
		}
	}, [odometerLoaded]);

	useEffect(() => {
		if (odometerLoaded) {
			setAmountRecoveredInternal(amountRecovered);
			setCustomersInternal(customers);
			setExpertsInternal(experts);
		}
	}, [amountRecovered, customers, experts, odometerLoaded]);
	return (
		<div className='bg-secondary'>
			<div className="lg:w-216 mx-auto flex items-baseline justify-evenly lg:pb-32">
				<div className='flex flex-col justify-center items-center pb-7 mb-7 md:mb-0  md:w-1/3'>
					<div className="relative w-10 h-10 lg:w-28 lg:h-28">
						<Image
							src='/img/home/money.png'
							fill
							alt='Money Recovered'
							className="mb-4"
						/>
					</div>
					<div className='text-lg lg:text-5xl text-primary font-bold relative text-tertiary'>
						<Odometer value={amountRecoveredInternal} format="(,ddd)" theme="default" />
						<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}></span>
					</div>
					<div className='text-xxs lg:text-lg text-primary font-semibold z-10'>Total Amount Recovered</div>
				</div>
				<div className='flex flex-col justify-center items-center   md:w-1/3 pb-7 mb-7 md:mb-0 '>
					<div className="relative w-10 h-10 lg:w-28 lg:h-28">
						<Image
							src='/img/home/customers.png'
							fill
							alt='Customers'
							className="mb-4"
						/>
					</div>
					<div className='text-lg lg:text-5xl text-primary font-bold relative text-tertiary'>
						<Odometer value={customersInternal} format="(,ddd)" theme="default" />
						<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}> +</span>
					</div>
					<div className='text-xxs lg:text-lg text-primary font-semibold z-10'>Happy Customers</div>
				</div>
				<div className='flex flex-col justify-center items-center   md:w-1/3'>
					<div className="relative w-10 h-10 lg:w-28 lg:h-28">
						<Image
							src='/img/home/experts.png'
							fill
							alt='Experts'
							className="mb-4"
						/>
					</div>
					<div className='text-lg lg:text-5xl text-primary font-bold relative text-tertiary'>
						<Odometer value={expertsInternal} format="(,ddd)" theme="default" />
						<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}> +</span>
					</div>
					<div className='text-xxs lg:text-lg text-primary font-semibold z-10'>Experts</div>
				</div>
			</div>
		</div>
	)
};

type StatProps = {
	amountRecovered: number;
	customers: number;
	experts: number;
};

export default Stat;