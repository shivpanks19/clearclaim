import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames';
import Rating from "@/components/common/Rating";
import CourseAttr from "@/components/common/course-list/CourseAttr";
import CourseCardDetailSection from "@/components/common/course-list/CourseCardDetailSection";

const CourseCard: React.FC<CourseCardProps> = ({ isFree, showDetailSection }) => {
	return (
		<div className='flex grow xl:w-76 shadow rounded h-30 mx-auto mb-10 bg-white flex-col justify-evenly'>
			<div className={
				classNames({
					'border-b': showDetailSection
				})
			}
			>
				<div className="flex flex-col md:flex-row items-center p-5">
					<div className="relative h-40 w-full md:w-96 md:mr-7 mb-3 md:mb-0">
						<Image
							src='/img/home/course.png'
							className='mr-8 flex-none'
							// height={219}
							// width={256}
							fill
							sizes='(min-width: 768px) 300px,
						256px'
							alt='Course thumbnail'
						/>
					</div>
					<div className="flex flex-col text md:mr-5">
						<p className="course-heading text-2xl text-title">Full Stack Web Development Course</p>
						<div className="course-rating place-items-center flex content-bottom my-3">
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
					<div className="flex grow flex-row md:flex-col w-full md:w-auto">
						{isFree && (
							<Image
								src='/img/course/free-tag.png'
								width={144}
								height={92}
								alt='Free Tag'
								className='mb-5 mr-5 md:mr-0'
							/>
						)}
						<Link
							href='/courses/1'
							className='w-full md:w-auto'
						>
							<button className='join-btn bg-tertiary text-white px-5 md:px-10 py-3 md:py-5 rounded w-full md:w-40'>Join Now</button>
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