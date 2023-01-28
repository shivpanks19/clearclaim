import React from 'react';
import Image from 'next/image';
import { ImageType } from "@/utils/types";

const PlacementCard: React.FC<PlacementCardProps> = ({
	studentName,
	collegeCourseName,
	collegeName,
	designation,
	ctc,
	companyImage,
	studentImage
}) => {
	return (
		<div className="card rounded shadow md:w-96 flex flex-col items-center py-7 md:py-8">
			<div className="rounded-full overflow-hidden h-16 w-16 grid place-items-center">
				<Image
					src={studentImage?.url}
					className='mb-4'
					width={114}
					height={114}
					alt={studentName}
				/>
			</div>
			<p className='studentName mb-4 md:text-2xl text-primary font-semibold'>{studentName}</p>
			<p className='courseName text-tertiary text-sm md:text-base font-medium'>{collegeCourseName}</p>
			<p className='collegeName text-desc text-xs md:text-base mb-5 md:mb-10'>{collegeName}</p>
			<Image
				src={companyImage?.url}
				className='mb-6 md:mb-10'
				width={152}
				height={39}
				alt='Priya'
			/>
			<p className='designation text-primary text-sm md:text-base font-semibold'>{designation}</p>
			<p className='ctc md:text-2xl text-tertiary font-bold'>{ctc} LPA</p>
		</div>
	)
};

type PlacementCardProps = {
	studentName: string,
	collegeCourseName: string,
	collegeName: string,
	designation: string,
	ctc: string,
	studentImage: ImageType,
	companyImage: ImageType
};

export default PlacementCard;