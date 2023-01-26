import React from "react";
import Image from "next/image";

const CourseCardDetailSection: React.FC<CourseCardDetailSectionProps> = () => {
	return (
		<div className="course-details mb-5">
			<div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 md:gap-5 ml-5">
				<div className="flex flex-row md:flex-col items-center">
					<div className="relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0">
						<Image
							src='/img/course/course-content.png'
							alt='Course Content'
							fill
						/>
					</div>
					<p className="text-primary text-xs md:text-base font-medium">
						300+ hours Course content
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center">
					<div className="relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0">
						<Image
							src='/img/course/daily-material.png'
							alt='Daily Material'
							fill
						/>
					</div>
					<p className="text-primary text-xs md:text-base font-medium">
						Daily Couse Material
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center">
					<div className="relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0">
						<Image
							src='/img/course/lifetime-access.png'
							alt='Lifetime Access'
							fill
						/>
					</div>
					<p className="text-primary text-xs md:text-base font-medium">
						Lifetime LMS Access
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center">
					<div className="relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0">
						<Image
							src='/img/course/dedicated-support.png'
							alt='Dedicated Support'
							fill
						/>
					</div>
					<p className="text-primary text-xs md:text-base font-medium">
						Dedicated Support
					</p>
				</div>
			</div>
		</div>
	);
};

type CourseCardDetailSectionProps = {};

export default CourseCardDetailSection;