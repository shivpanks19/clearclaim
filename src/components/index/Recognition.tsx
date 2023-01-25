import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const RecognitionSection: React.FC<RecognitionSectionProps> = () => {
	return (
		<div className='xl:w-76 mb-20 mx-auto'>
			<SectionHeadline
				title='Our Top Recruiters'
				subtitle='Our aluminis are placed at'
				className='mb-12 mx-5'
			/>
			<div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
				<div className="relative h-16 md:h-24 w-36 md:w-52 mb-4 mx-auto 	">
					<Image
						src='/img/recognition_1.png'
						alt='Recognition'
						fill
						className='object-contain'
					/>
				</div>
				<div className="relative h-16 md:h-24 w-36 md:w-52 mb-4 mx-auto 	">
					<Image
						src='/img/recognition_2.png'
						alt='Recognition'
						fill className='object-contain'
					/>
				</div>
				<div className="relative h-16 md:h-24 w-36 md:w-52 mb-4 mx-auto 	">
					<Image
						src='/img/recognition_3.png'
						alt='Recognition'
						fill
						className='object-contain'
					/>
				</div>
				<div className="relative h-16 md:h-24 w-36 md:w-52 mb-4 mx-auto 	">
					<Image
						src='/img/recognition_4.png'
						alt='Recognition'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</div>
	)
};

type RecognitionSectionProps = {};

export default RecognitionSection;