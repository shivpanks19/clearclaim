import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';
import CourseAttr from "@/components/common/course-list/CourseAttr";
import Rating from "@/components/common/Rating";
import WorkshopButton from '@/components/common/button/WorkshopButton';
import RegisterButton from '@/components/common/button/RegisterButton';
import StatSection from '@/components/common/Stat';
import HeroBg from "@/components/common/HeroBg";

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
	headline,
	subHeadline,
	heroImage,
	heroVideo,
	numberOfStudents,
	studentsTrained,
	workshopsConducted,
	placementDrives
}) => {
	const { t } = useTranslation();

	return (
		<HeroBg>
			<div className='grid md:grid-cols-2 md:gap-8 xl:w-76 mx-5 md:mx-auto mb-6 md:mb-32 items-center'>
				<div className='flex flex-col md:pt-20'>
					<h1 className='text-3xl md:text-hero text-primary'>
						Master Course
					</h1>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						{headline}:
					</h1>
					<p className='text-aphonic text-lg md:text-2xl mb-4 md:mb-10'>
						{subHeadline}
					</p>
					<div className="course-rating flex place-items-center mb-6 md:mb-14">
						<Rating rating={4} />
						<p className="student-number text-desc font-normal"> {numberOfStudents} students</p>
					</div>
					<div className="hidden md:flex md:flex-row md:gap-14 md:mb-20 pr-8">
						<WorkshopButton />
						<RegisterButton />
					</div>
				</div>
				<div className='flex flex-col'>
					<div className="relative w-full  h-52 md:h-96 max-w-full md:mt-5 mb-6 md:mb-14">
						{heroVideo ? (
							<>
								<div className="hidden lg:block">
									<Image
										src='/img/course_detail.png'
										alt='Course Detail Image'
										fill
									/>
								</div>
								<iframe
									className='absolute w-full lg:left-12 lg:top-8 lg:w-10/12 h-full lg:h-72 rounded'
									src={heroVideo ?? 'https://www.youtube.com/embed/2E73SftV0co'}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen>
								</iframe>
							</>
						) : (
							<Image
								src={heroImage}
								alt='Course Detail Image'
								fill
							/>
						)}
					</div>
					<div className="flex-col md:hidden gap-10 mb-6 md:mb-10">
						<WorkshopButton />
						<RegisterButton />
					</div>
					<CourseAttr />
				</div>
			</div>
			{/* Stats */}
			<StatSection
				studentsTrained={studentsTrained}
				workshopsConducted={workshopsConducted}
				placementDrives={placementDrives}
			/>
		</HeroBg>
	)
};

type CourseHeroSectionProps = {
	headline: string;
	subHeadline: string;
	heroImage: string;
	heroVideo: string;
	numberOfStudents: number;
	studentsTrained: number,
	workshopsConducted: number,
	placementDrives: number,
};

export default CourseHeroSection;