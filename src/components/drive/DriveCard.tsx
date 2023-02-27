import React from 'react';
import Image from 'next/image';
import { ImageType } from "@/utils/types";
import classNames from 'classnames';

const DriveCard: React.FC<DriveCardProps> = ({
	position,
	company,
	location,
	date,
	ctc,
	numberOfApplicants,
	numberOfApplicantsSelected,
	driveImage
}) => {
	return (
		<div className="card rounded shadow w-full md:w-96 flex flex-col pt-5 md:pt-8">
			<Image
				src={driveImage?.url}
				className='mb-6 md:mb-10 grid mx-auto'
				width={163}
				height={155}
				alt='Drive Image'
			/>
			<div className="textData border-b px-9 pb-6">
				<p className='position md:text-xl text-primary font-semibold'>{position}</p>
				<p className='companyName text-primary text-sm md:text-lg font-medium mb-4'>{company}</p>
				<div className="flex gap-2">
					<div className="flex-none">
						<Image
							src='/img/location_small.png'
							width={16}
							height={16}
							alt='Location'
						/>
					</div>
					<p className='location text-desc text-sm md:text-base mb-2 align-middle'>{location}</p>
				</div>
				<div className="flex gap-2">
					<div className="flex-none">
						<Image
							src='/img/calendar_small.png'
							width={16}
							height={16}
							alt='Calendar'
						/>
					</div>
					<p className={classNames({
						'date text-desc text-sm md:text-base mb-2 align-middle': true,
						'text-red-400': new Date(date) < new Date(),
						'text-green-400': new Date(date) > new Date()
					})}>Posted on {new Date(date).toDateString()}</p>
				</div>
				<div className="flex gap-2">
					<div className="flex-none">
						<Image
							src='/img/ctc_small.png'
							width={16}
							height={16}
							alt='CTC'
						/>
					</div>
					<p className='ctc text-sm md:text-xl text-tertiary font-bold align-middle'>{ctc} LPA</p>
				</div>
			</div>
			<div className="applicantData grid grid-cols-2 text-center">
				<p className='text-aphonic font-medium py-6 text-sm md:text-base border-r'>{numberOfApplicants} applicants</p>
				<p className=' text-aphonic font-medium py-6 text-sm md:text-base'>{numberOfApplicantsSelected} selected</p>
			</div>
		</div>
	)
};

type DriveCardProps = {
	position: string;
	company: string;
	location: string;
	date: Date;
	ctc: number;
	numberOfApplicants: number;
	numberOfApplicantsSelected: number;
	driveImage: ImageType;
};

export default DriveCard;