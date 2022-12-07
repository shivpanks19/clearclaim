import React from 'react';
import Image from 'next/image';
import SectionHeadline from '@/components/common/SectionHeadline';

const RecognitionSection: React.FC<RecognitionSectionProps> = () => {
	return (
		<div className='w-76 mb-20 mx-auto'>
			<SectionHeadline
				title='Our Top Recruiters'
				subtitle='Our aluminis are placed at'
				className='mb-12'
			/>
			<Image
				src='/img/home/recognition.png'
				className='mb-4 mx-auto'
				width={768}
				height={96}
				alt='Accenture'
			/>
		</div>

	)
};

type RecognitionSectionProps = {};

export default RecognitionSection;