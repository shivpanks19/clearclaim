import React from "react";
import Image from "next/image";

const SectionHeadline: React.FC<SectionHeadlineProps> = ({ title, subtitle, className = '' }) => {
	return (
		<div className={className}>
			<div className="flex items-center justify-center gap-6 text-center mb-3">
				<Image
					src='/img/home/line.png'
					height={6}
					width={49}
					alt='Line'
				/>
				<p className='text-tertiary text-xl'>
					{title}
				</p>
				<Image
					src='/img/home/line.png'
					height={6}
					width={49}
					alt='Line'
				/>
			</div>
			<p className='text-primary text-3xl font-semibold flex justify-center'>
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