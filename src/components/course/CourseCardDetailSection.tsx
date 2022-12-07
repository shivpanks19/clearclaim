import React from "react";
import Image from "next/image";
import Rating from "@/components/core/rating";

const CourseCardDetailSection: React.FC<CourseCardDetailSectionProps> = () => {
	return (
		<div className="course-details mb-5">
			<div className="flex justify-evenly">
				<div className="flex flex-col items-center">
					<Image
						src='/img/course/course-content.png'
						width={38}
						height={38}
						alt='Course Content'
						className='mb-2'
					/>
					<p className="text-primary font-medium">
						300+ hours Course content
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image
						src='/img/course/daily-material.png'
						width={38}
						height={38}
						alt='Daily Material'
						className='mb-2'
					/>
					<p className="text-primary font-medium">
						Daily Couse Material
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image
						src='/img/course/lifetime-access.png'
						width={38}
						height={38}
						alt='Lifetime Access'
						className='mb-2'
					/>
					<p className="text-primary font-medium">
						Lifetime LMS Access
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image
						src='/img/course/dedicated-support.png'
						width={38}
						height={38}
						alt='Dedicated Support'
						className='mb-2'
					/>
					<p className="text-primary font-medium">
						Dedicated Support
					</p>
				</div>
			</div>
		</div>
	);
};

type CourseCardDetailSectionProps = {};

export default CourseCardDetailSection;