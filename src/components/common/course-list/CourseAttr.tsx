import React from "react";
import Image from "next/image";

const CourseAttr: React.FC<CourseAttrProps> = () => {
	return (
		<div className="grid grid-cols-3 max-w-full course-attrs mb-5 gap-4 justify-evenly">
			<div className="flex course-attr items-center gap-1 md:gap-5 w-24 md:w-40 lg:w-52">
				<Image
					src='/img/home/online_offline_classes.png'
					width={38}
					height={38}
					alt='Online and offline classes'
					className="flex-none"
				/>
				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					Online & Offline Classes
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 md:gap-5 w-24  md:w-40 lg:w-52">
				<Image
					src='/img/home/certification_course.png'
					width={38}
					height={38}
					alt='Certification Courses'
					className="flex-none"
				/>
				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					Certification Courses
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 md:gap-5 w-24  md:w-40 lg:w-52">
				<Image
					src='/img/home/placement_assistance.png'
					width={38}
					height={38}
					alt='Placement Assistance'
					className="flex-none"
				/>
				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					100% Placement Assistance
				</p>
			</div>
		</div>
	)
};

type CourseAttrProps = {};

export default CourseAttr;
