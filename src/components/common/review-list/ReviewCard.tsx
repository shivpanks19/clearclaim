import React from 'react';
import Image from 'next/image';
import Rating from "@/components/common/Rating";
import { ImageType } from '@/utils/types';

const ReviewCard: React.FC<ReviewCardProps> = ({
	studentName,
	designation,
	companyName,
	ctc,
	reviewText,
	rating,
	studentImage
}) => {
	return (
		<div className='card w-full flex gap-3 md:gap-8  my-3 md:my-8'>
			<div className="flex-none relative w-9 h-9 md:w-16 md:h-16 rounded-full overflow-hidden">
				<Image
					src={studentImage?.url}
					className='pfp'
					width={114}
					height={114}
					alt={studentName}
				/>
			</div>

			<div className='textSection flex flex-col gap-3 md:gap-5'>
				<div className='flex justify-between'>
					<div className='studentIntro flex flex-col'>
						<p className='studentName text-sm md:text-xl text-primary font-semibold'>{studentName}</p>
						<p className='prevDesg text-aphonic mb-1 text-xs md:text-xl'>Tap Student</p>
						<Rating rating={rating} />
					</div>
					<div className='desgSection flex flex-col'>
						<p className='desgName mb-1 text-sm md:text-xl text-primary font-medium'>{designation}</p>
						<p className='prevDesg mb-1 text-desc text-xs md:text-xl'>{companyName}</p>
						<div className='ctc flex text-aphonic'>
							<p className='font-bold text-xs md:text-xl'>CTC:&nbsp;</p>
							<p className='text-xs md:text-xl'>{ctc} LPA</p>
						</div>
					</div>
				</div>
				<p className='reviewText text-aphonic text-xs md:text-sm'>{reviewText.split(' ').slice(0, 120).join(' ')}...</p>
			</div>
		</div>
	)
};

type ReviewCardProps = {
	studentName: string;
	designation: string;
	companyName: string;
	ctc: number;
	reviewText: string;
	rating: number;
	studentImage: ImageType;
};

export default ReviewCard;