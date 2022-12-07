import React from "react";
import Image from "next/image";

const CourseAttr: React.FC<CourseAttrProps> = () => {
	return (
		<div className="flex course-attrs gap-5">
			<div className="flex course-attr items-center gap-3 gap-5">
				<Image
					src='/img/home/online_offline_classes.png'
					width={38}
					height={38}
					alt='Online and offline classes'
				/>
				<p className="attr-desc text-primary">
					Online & Offline Classes
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 gap-5">
				<Image
					src='/img/home/certification_course.png'
					width={38}
					height={38}
					alt='Certification Courses'
				/>
				<p className="attr-desc text-primary">
					Certification Courses
				</p>
			</div>
			<div className="flex course-attr items-center gap-3 gap-5">
				<Image
					src='/img/home/placement_assistance.png'
					width={38}
					height={38}
					alt='Placement Assistance'
				/>
				<p className="attr-desc text-primary">
					100% Placement Assistance
				</p>
			</div>
		</div>
	)
};

type CourseAttrProps = {};

export default CourseAttr;
