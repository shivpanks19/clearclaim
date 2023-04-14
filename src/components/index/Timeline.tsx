import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BusinessPoint } from "@/utils/types";

const Timeline: React.FC<TimelineProps> = ({ businessPoints }) => {
	const [activeIdx, setActiveIdx] = useState(0);

	const TIMELINE_DOT = '/img/home/timeline_dot.svg'
	const ACTIVE_TIMELINE_DOT = '/img/home/active_timeline_dot.svg'

	const isActive = (idx, activeIdx) => idx === activeIdx;

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeIdx === businessPoints.length - 1) {
				setActiveIdx(0);
			} else {
				setActiveIdx(activeIdx + 1);
			}
		}, 2500);
		return () => clearInterval(interval);
	}, [activeIdx, businessPoints.length]);

	return (
		<div className='w-4 mx-auto flex flex-col xl:flex-row xl:w-76 justify-center items-center pt-12'>
			{(businessPoints || []).map((businessPoint, idx) => (
				<>
					<div className='relative w-11 h-52 xl:w-96'>
						<Image
							src={isActive(idx, activeIdx) ? ACTIVE_TIMELINE_DOT : TIMELINE_DOT}
							width={45}
							height={45}
							alt='Timeline Point'
							className="absolute mx-auto left-0 right-0 xl:top-20 xl:right-8 h-11 w-11 xl:w-16 xl:h-16"
						/>
						<div className={`text h-46 flex flex-col absolute -top-8 w-36 xl:w-64 xl:text-center xl:top-0 xl:left-0 xl:right-0 ${idx % 2 === 0 ? 'text-right right-14 xl:top-36' : 'left-14 xl:-top-28'}`}>
							<p className="font-bold xl:text-2xl">
								{businessPoint.title}
							</p>
							<p className="text-sm xl:text-base">
								{businessPoint.description}
							</p>
						</div>
						<div className={`absolute w-24 h-24 xl:w-36 xl:h-36 flex-none -top-8 transition-opacity duration-200 opacity-0 xl:left-0 xl:right-0  ${isActive(idx, activeIdx) && 'opacity-100'} ${idx % 2 !== 0 ? 'right-14 xl:top-40 xl:left-16' : 'left-14 xl:-top-24 xl:left-16'}`}>
							<Image
								src='/img/home/business_point_1.png'
								fill
								alt='Business Point'
								className="mb-4"
							/>
						</div>
						{idx !== businessPoints.length - 1 && (
							<Image
								src='/img/home/timeline_dash.png'
								width={4}
								height={190}
								alt='Timeline Line'
								className="absolute top-10 left-0 right-0 mx-auto xl:rotate-90 xl:-top-4 xl:left-74 h-48 w-1 xl:w-1 xl:h-64"
							/>
						)}
					</div>
				</>
			))}
		</div>
	)
};

type TimelineProps = {
	businessPoints: BusinessPoint[]
};

export default Timeline;