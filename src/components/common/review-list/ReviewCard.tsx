import React from 'react';
import Image from 'next/image';
import Rating from "@/components/common/Rating";

const ReviewCard: React.FC<ReviewCardProps> = () => {
	return (
		<div className='card w-full flex gap-8 items-center py-8'>
			<Image
				src='/img/home/priya.png'
				className='pfp'
				width={64}
				height={64}
				alt='Priya'
			/>
			<div className='textSection flex flex-col gap-5'>
				<div className='flex justify-between'>
					<div className='studentIntro flex flex-col'>
						<p className='studentName text-xl text-primary font-semibold'>Priya Munot</p>
						<p className='prevDesg text-aphonic mb-1'>Tap Student</p>
						<Rating />
					</div>
					<div className='desgSection flex flex-col'>
						<p className='desgName mb-1 text-xl text-primary font-medium'>Associate Engineer</p>
						<p className='prevDesg mb-1 text-desc'>Accenture</p>
						<div className='ctc flex text-aphonic'>
							<p className='font-bold'>CTC:</p>
							<p> 6 LPA</p>
						</div>
					</div>
				</div>
				<p className='reviewText text-aphonic'>
					Scaler helped me channel my energy properly, revise things I had learned in college, and learn new things too! Their reputation for being educators and enthusiastic supporters of aspirants who dream big made me join the academy.
				</p>
			</div>
		</div>
	)
};

type ReviewCardProps = {};

export default ReviewCard;