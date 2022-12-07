import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames';
import Rating from "@/components/common/Rating";
import CourseAttr from "@/components/common/course-list/CourseAttr";
import CourseCardDetailSection from "@/components/common/course-list/CourseCardDetailSection";

const CourseCard: React.FC<CourseCardProps> = ({ isFree, showDetailSection }) => {
	return (
		<div className='w-76 shadow rounded h-30 m-10 mx-auto mb-10 bg-white flex flex-col justify-evenly'>
			<div className={
				classNames({
					'border-b': showDetailSection,
					'mb-5': true
				})
			}
			>
				<div className="flex items-center p-5">
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
						<CourseAttr />
					</div>
					<div className="flex-none flex flex-col">
						{isFree && (
							<Image
								src='/img/course/free-tag.png'
								width={144}
								height={92}
								alt='Free Tag'
								className='mb-5'
							/>
						)}
						<Link href='/courses/1'>
							<button className=" join-btn bg-tertiary text-white px-10 py-5 rounded flex-none">Join Now</button>
						</Link>
					</div>
				</div>
			</div>
			{showDetailSection && (
				<CourseCardDetailSection />
			)}
		</div>
	)
};

type CourseCardProps = {
	isFree?: boolean;
	showDetailSection?: boolean;
};

export default CourseCard;