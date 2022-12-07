import React from 'react';
import Image from 'next/image';

const CodingBootcampSection: React.FC<CodingBootcampSectionProps> = ({ imgSrc }) => {
	return (
		<div className="w-76 mx-auto mb-28 pl-64 relative">
			<Image
				src={imgSrc}
				className='coding_bootcamp absolute left-12 -top-14'
				width={366}
				height={366}
				alt='Value for money'
			/>
			<div className="textSection text-center w-full py-16 pl-28 pr-10 bg-tertiary rounded">
				<p className="text-3xl font-semibold text-white mb-5">Get the best value for your money</p>
				<p className="text-7xl font-semibold text-price-yellow mb-5">₹ 27,999</p>
				<p className="text-white">Pay in two installments in the first month of your course joiining</p>
			</div>
		</div>
	)
};

type CodingBootcampSectionProps = {
	imgSrc: string;
};

export default CodingBootcampSection;