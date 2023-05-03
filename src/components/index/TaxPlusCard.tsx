import React from "react";
import Image from "next/image";

const TaxPlusCard: React.FC = () => {
	return (
		<div className="relative bg-white rounded-2xl pb-4 mb-9 md:w-104 overflow-hidden pb-28">
			<p className="font-bold text-white text-center bg-primary text-2xl py-2">Tax+ Consultation Call</p>
			<div className="bg-gray-100 border border-b pt-4">
				<p className='relative pl-5 text-center'>
					<span className="text-4xl lg:text-5xl font-bold relative mr-2">0
						<span className="absolute top-0 -left-3 text-lg font-bold">₹</span>
					</span>
					<span className="text-xl lg:text-2xl font-light">15 mins call</span>
				</p>
				<div className="text-sm font-medium text-desc mb-4 text-center">FREE consultation call</div>
			</div>
			<ul className="px-10 py-4 flex flex-col gap-4" style={{ listStyleImage: "url('/img/home/blue_tick.png')" }}>
				<li>Understanding your tax-problems</li>
				<li>Understanding current taxation</li>
				<li>Discussing possible opportunities </li>
				<li>Informed decision about Tax+</li>
				
			</ul>
			<button className="mx-auto w-64 text-white font-semibold rounded-full bg-gray-700 flex items-center py-4 px-16 absolute bottom-8 mx-auto left-0 right-0">
				<Image
					src='/img/home/call.png'
					width={24}
					height={24}
					alt='Book a Call'
					className='mr-3'
				/>
				Book a Call
			</button>
		</div>
	)
};

export default TaxPlusCard;