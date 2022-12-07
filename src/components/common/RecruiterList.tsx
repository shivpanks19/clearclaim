import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const RecruiterSection: React.FC<RecruiterSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Our Top Recruiters'
				subtitle='Our aluminis are placed at'
				className='mb-12'
			/>
			<div className="cards w-76 mb-20 mx-auto grid grid-cols-4 gap-14">
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
				<Image
					src='/img/home/accenture_lg.png'
					className='mb-4'
					width={240}
					height={63}
					alt='Accenture'
				/>
			</div>
		</>

	)
};

type RecruiterSectionProps = {};

export default RecruiterSection;