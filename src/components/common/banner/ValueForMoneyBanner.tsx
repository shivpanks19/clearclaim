import React from 'react';
import Image from 'next/image';

const CodingBootcampSection: React.FC<CodingBootcampSectionProps> = ({ imgSrc, price }) => {
	return (
		<div className="relative flex flex-col xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 place-items-center">
			<a id='pricing' />
			<Image
				src={imgSrc}
				className='coding_bootcamp absolute left-3 md:left-0 -top-48 md:-top-20'
				width={364}
				height={366}
				alt='Value for money'
			/>
			<div className="textSection flex flex-col items-center gap-4 w-full md:py-7 md:pl-40 md:pr-8 pt-44 px-5 md:px-0 bg-tertiary rounded">
				<p className="text-lg md:text-3xl font-semibold text-white md:mb-4 text-center md:text-left">Get the best value for your money</p>
				<p className="text-5xl md:text-7xl font-semibold text-price-yellow mb-5">₹ {price}</p>
				<p className="text-white mb-5 md:mb-0 text-center">Pay in two installments in the first month of your course joiining</p>
			</div>
		</div >
	)
};

type CodingBootcampSectionProps = {
	imgSrc: string;
	price: number;
};

export default CodingBootcampSection;