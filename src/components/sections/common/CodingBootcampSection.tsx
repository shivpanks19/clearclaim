import React from 'react';
import Image from 'next/image';

const CodingBootcampSection: React.FC<CodingBootcampSectionProps> = ({ imgSrc }) => {
	return (
		<div className="w-76 mx-auto mb-28 pl-64 relative">
			<Image
				src={imgSrc}
				className='coding_bootcamp absolute left-0 -top-10'
				width={324}
				height={314}
				alt='Coding Bootcamp'
			/>
			<div className="textSection w-full py-16 pl-28 flex items-center gap-12 pr-8 bg-tertiary rounded">
				<div className="textSection">
					<p className="text-3xl font-semibold text-white mb-4">Attend Live Coding Bootcamp</p>
					<p className="text-white">Register Now to attend coding Bootcamp on Full Stack Development & get 2 Placement Drives</p>
				</div>
				<button className="bg-white h-14 w-64 flex-none rounded">
					<p className="text-primary font-medium"> Reserve my seat</p>
				</button>
			</div>
		</div>
	)
};

type CodingBootcampSectionProps = {
	imgSrc: string;
};

export default CodingBootcampSection;