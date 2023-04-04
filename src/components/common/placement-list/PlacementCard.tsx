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
		<div className="card rounded shadow w-full md:w-96 flex flex-col items-center py-7 md:py-8 h-96 md:h-136">
			<div className="rounded-full overflow-hidden h-16 w-16 lg:w-28 lg:h-28 mb-4 flex-none">
				<Image
					src={studentImage?.url}
					width={114}
					height={114}
					alt={studentName}
				/>
			</div>
			<p className='studentName mb-4 md:text-2xl text-primary font-semibold text-center'>{studentName}</p>
			<p className='courseName text-tertiary text-sm md:text-base font-medium text-center'>{collegeCourseName}</p>
			<p className='collegeName text-desc text-xs md:text-base mb-5 md:mb-10 text-center'>{collegeName}</p>
			<div className="grow">

				<div className='mb-6 md:mb-10 flex-none'>
					<Image
						src={companyImage?.url}
						width={152}
						height={39}
						alt={companyImage.alternativeText}
					/>
				</div>
			</div>
			<p className='designation text-primary text-sm md:text-base font-semibold text-center'>{designation}</p>
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