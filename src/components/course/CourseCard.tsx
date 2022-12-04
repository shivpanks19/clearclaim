import React from "react";
import Image from "next/image";
import Rating from "@/components/core/rating";

const CourseCard: React.FC<CourseCardProps> = () => {
	return (
		<div className='w-76 shadow rounded h-30 p-5 m-10 mx-auto mb-10 bg-white flex justify-evenly'>
			<div className="flex items-center">
				<Image
					src='/img/home/course.png'
					className='mr-8 flex-none'
					height={219}
					width={256}
					alt='Course thumbnail'
				/>
				<div className="flex flex-col text mr-5">
					<p className="course-heading text-2xl text-title">Full Stack Web Development Course</p>
					<div className="course-rating flex content-bottom my-3">
						<Rating />
						<p className="student-number text-desc font-normal"> 2486 students</p>
					</div>
					<div className="course-description text-desc mb-5">
						<p className="course-desc">
							Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						</p>
					</div>
					<div className="flex course-attrs gap-20">
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
				</div>
				<div className="flex-none">
					<button className=" join-btn bg-tertiary text-white px-10 py-5 rounded flex-none">Join Now</button>
				</div>
			</div>
		</div>
	)
};

type CourseCardProps = {};

export default CourseCard;