import React, { useState, useEffect } from "react";
import Image from "next/image";

const SurakshaCard: React.FC = () => {
	return (
		<div className="relative bg-white rounded-2xl pb-4 mb-9 md:w-104 overflow-hidden pb-28">
			<p className="font-bold text-white text-center text-2xl py-2" style={{ background: "linear-gradient(223.36deg, #EC7D8C 2.7%, #FEB066 100%)" }}>Suraksha+</p>
			<div className="bg-gray-100 pt-4" style={{ borderBottom: "1px solid #FEB066" }}>
				<p className='relative pl-5 text-center'>
					<span className="text-4xl lg:text-5xl font-bold relative mr-2">99
						<span className="absolute top-0 -left-3 text-lg font-bold">₹</span>
						<Image
							src='/img/home/discount_tag.png'
							width={61}
							height={15}
							alt='Discount'
							className="absolute top-1 -right-16 text-lg font-bold"
						/>
					</span>
					<span className="text-xl lg:text-2xl font-light mr-2">/year</span>
					{/* @ts-ignore */}
					<span className="text-xl lg:text-2xl font-light text-desc"><strike>₹399</strike></span>
				</p>
				<div className="text-sm font-medium text-desc mb-4 text-center px-7">Track and protect investments + Make provision of hassle-free claim processing to your family</div>
			</div>
			<ul className="px-10 py-4 flex flex-col gap-4" style={{ listStyleImage: "url('/img/home/orange_tick.png')" }}>
				<li>Everything in Freemium</li>
				<li>Generate investment summary PDF and share with loved ones</li>
				<li>FREE of cost doorstep end to end claim settlement assistance</li>
				<li>to your family</li>
				<li>Dedicated Service Manager, Claim expert and Legal advisor</li>
				<li>to your family</li>
				<li>Clearclaim handles all complexities including paperwork, procedures, and follow-ups for each investment till claim settles</li>
				<li>24x7 Customer support to your family</li>
			</ul>
			<button className="mx-auto w-67 text-white font-semibold rounded-full flex items-center py-4 px-16 absolute bottom-8 mx-auto left-0 right-0" style={{ background: "linear-gradient(223.36deg, #EC7D8C 2.7%, #FEB066 100%)" }}>
				<Image
					src='/img/home/pencil.png'
					width={24}
					height={24}
					alt='Book a Call'
					className='mr-2'
				/>
				Register Now
			</button>
		</div>
	)
};

export default SurakshaCard;