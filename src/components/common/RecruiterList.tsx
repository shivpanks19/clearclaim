import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const RecruiterSection: React.FC<RecruiterSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Our Top Recruiters'
				subtitle='Our aluminis are placed at'
				className='mb-12 mx-5'
			/>
			<div className="cards xl:w-76 mb-20 mx-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-8 place-items-center md:gap-14">
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>
				<div className="relative w-36 md:w-60 h-9 md:h-16 mb-4">
					<Image
						src='/img/home/accenture_lg.png'
						fill
						alt='Accenture'
					/>
				</div>


			</div>
		</>

	)
};

type RecruiterSectionProps = {};

export default RecruiterSection;