import React from "react";
import Image from "next/image";

const CourseAttr: React.FC<CourseAttrProps> = () => {
	return (
		<div className="grid grid-cols-3 max-w-full course-attrs mb-3 md:mb-5 gap-4 justify-evenly">
			<div className="flex course-attr items-center gap-1 md:gap-5 w-24 md:w-40 lg:w-52">
				<div className="relative w-4 h-4 md:w-10 md:h-10 flex-none">
					<Image
						src='/img/home/online_offline_classes.png'
						alt='Online and offline classes'
						fill
					/>
				</div>

				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					Online & Offline Classes
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 md:gap-5 w-24  md:w-40 lg:w-52">
				<div className="relative w-4 h-4 md:w-10 md:h-10 flex-none">

					<Image
						src='/img/home/certification_course.png'
						alt='Certification Courses'
						fill
					/>
				</div>
				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					Certification Courses
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 md:gap-5 w-24  md:w-40 lg:w-52">
				<div className="relative w-4 h-4 md:w-10 md:h-10 flex-none">

					<Image
						src='/img/home/placement_assistance.png'
						alt='Placement Assistance'
						fill
					/>
				</div>
				<p className="attr-desc text-primary text-xxs md:text-xs lg:text-base">
					100% Placement Assistance
				</p>
			</div>
		</div>
	)
};

type CourseAttrProps = {};

export default CourseAttr;
