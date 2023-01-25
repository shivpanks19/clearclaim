import React from "react";
import Image from "next/image";

const SectionHeadline: React.FC<SectionHeadlineProps> = ({ title, subtitle, className = '' }) => {
	return (
		<div className={className}>
			<div className="flex items-center justify-center gap-6 mb-1 md:mb-3">
				<Image
					src='/img/home/line.png'
					height={6}
					width={49}
					alt='Line'
				/>
				<p className='text-tertiary text-xs md:text-xl text-center'>
					{title}
				</p>
				<Image
					src='/img/home/line.png'
					height={6}
					width={49}
					alt='Line'
				/>
			</div>
			<p className='text-primary md:text-3xl font-semibold flex justify-center text-center'>
				{subtitle}
			</p>
		</div>
	)
};

type SectionHeadlineProps = {
	title: string;
	subtitle: string;
	className?: string;
};

export default SectionHeadline;