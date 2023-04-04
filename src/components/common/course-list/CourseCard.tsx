import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames';
import Rating from "@/components/common/Rating";
import CourseAttr from "@/components/common/course-list/CourseAttr";
import CourseCardDetailSection from "@/components/common/course-list/CourseCardDetailSection";

const CourseCard: React.FC<CourseCardProps> = ({ courseName, description, numberOfStudents, contentHours, slug, heroImage, isFree, showDetailSection }) => {
	return (
		<div className='flex grow xl:w-76 shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col justify-evenly'>
			<div className={
				classNames({
					'border-b': showDetailSection,
					'mb-3': true
				})
			}
			>
				<div className="flex flex-col md:flex-row items-center px-5 pt-5">
					<div className="relative h-40 w-full md:w-64 md:mr-7 mb-3 md:mb-0 flex-none ">
						<Image
							src={heroImage}
							// height={219}
							// width={256}
							fill
							sizes='(min-width: 768px) 300px,
						256px'
							alt='Course thumbnail'
						/>
					</div>
					<div className="flex flex-col text md:mr-5">
						<p className="course-heading text-sm md:text-2xl font-semibold text-title">{courseName}</p>
						{/* <div className="course-rating place-items-center flex content-bottom my-3">
							<Rating rating={5} />
							<p className="student-number text-desc text-xs md:text-base font-normal"> {numberOfStudents} students</p>
						</div> */}
						<div className="course-description text-desc mb-5">
							<p className="course-desc text-sm md:text-base">
								{description}
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
							href={`/courses/${slug}`}
							className='hidden md:block w-full md:w-auto'
						>
							<button className='join-btn bg-tertiary text-white px-5 md:px-10 py-3 md:py-5 rounded w-full md:w-40'>Join Now</button>
						</Link>
					</div>
				</div>
			</div>
			{showDetailSection && (
				<CourseCardDetailSection
					contentHours={contentHours}
				/>
			)}
			<div className="px-5 pb-5">
				<Link
					href={`/courses/${slug}`}
					className='md:hidden w-full md:w-auto'
				>
					<button className='join-btn bg-tertiary text-white px-5 md:px-10 py-3 md:py-5 rounded w-full md:w-40'>Join Now</button>
				</Link>
			</div>
		</div>
	)
};

type CourseCardProps = {
	courseName: string;
	description: string;
	numberOfStudents: number;
	contentHours: number;
	slug: string;
	heroImage: string;
	isFree?: boolean;
	showDetailSection?: boolean;
};

export default CourseCard;