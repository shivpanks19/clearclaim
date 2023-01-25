import React from 'react';
import Image from 'next/image';
import Rating from "@/components/common/Rating";

const ReviewCard: React.FC<ReviewCardProps> = () => {
	return (
		<div className='card w-full flex gap-3 md:gap-8 items-center my-3 md:my-8'>
			<div className="flex-none relative w-9 h-9 md:w-16 md:h-16">
				<Image
					src='/img/home/priya.png'
					className='pfp'
					fill
					alt='Priya'
				/>
			</div>

			<div className='textSection flex flex-col gap-3 md:gap-5'>
				<div className='flex justify-between'>
					<div className='studentIntro flex flex-col'>
						<p className='studentName text-sm md:text-xl text-primary font-semibold'>Priya Munot</p>
						<p className='prevDesg text-aphonic mb-1 text-xs md:text-xl'>Tap Student</p>
						<Rating />
					</div>
					<div className='desgSection flex flex-col'>
						<p className='desgName mb-1 text-sm md:text-xl text-primary font-medium'>Associate Engineer</p>
						<p className='prevDesg mb-1 text-desc text-xs md:text-xl'>Accenture</p>
						<div className='ctc flex text-aphonic'>
							<p className='font-bold text-xs md:text-xl'>CTC:&nbsp;</p>
							<p className='text-xs md:text-xl'>6 LPA</p>
						</div>
					</div>
				</div>
				<p className='reviewText text-aphonic text-xs md:text-base'>
					Scaler helped me channel my energy properly, revise things I had learned in college, and learn new things too! Their reputation for being educators and enthusiastic supporters of aspirants who dream big made me join the academy.
				</p>
			</div>
		</div>
	)
};

type ReviewCardProps = {};

export default ReviewCard;