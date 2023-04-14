import React from "react";
import Image from "next/image";

const SectionHeadline: React.FC<SectionHeadlineProps> = ({ title, className = '', white = false }) => {
	return (
		<div className={className}>
			<div className="flex flex-col items-center justify-center">
				<p className={` text-2xl font-bold lg:text-4xl text-center mb-1 lg:mb-2 ${white ? 'text-white' : 'text-primary'}`}>
					{title}
				</p>
				<div className="relative w-16 lg:w-24 h-1 lg:h-2">
					<Image
						src='/img/home/line.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='Line'
					/>
				</div>
			</div>
		</div>
	)
};

type SectionHeadlineProps = {
	title: string;
	className?: string;
	white?: boolean;
};

export default SectionHeadline;