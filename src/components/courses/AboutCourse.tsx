import React from "react";
import Image from 'next/image';
import Title from '@/components/common/Title';
import SectionHeadline from '@/components/common/SectionHeadline';
import CourseUsp from "@/components/courses/[slug]/CourseUsp";

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({ aboutCourse, contentHours }) => {
	return (
		<div className="mt-12 mb-12 md:mb-24">
			<a id='course-overview' />
			<SectionHeadline
				title='Course Overview'
				subtitle='Know the details of the course'
				className='mb-3 md:mb-8'
			/>
			<div className='grid md:grid-cols-3 mb-10 mx-auto md:mb-24 px-5 xl:w-76'>
				<div className="md:col-span-2 mb-5 md:mb-0">
					<Title
						text='About Course'
						className='mb-1 md:mb-8 text-sm md:text-lg'
					/>
					<p className="text-aphonic mr-12 text-sm md:text-base">
						{aboutCourse}
					</p>
				</div>
				<CourseUsp />
			</div>
			<div className="grid grid-cols-2 gap-5 md:grid-cols-7 place-items-center md:gap-8 px-5 md:px-20 xl:w-76 mx-auto">
				<div className="course_attr flex flex-col place-items-center w-28 md:w-48">
					<div className="relative w-20 h-20 md:w-32 md:h-32">
						<Image
							src='/img/daily_course_material.png'
							alt='course material'
							fill
						/>
					</div>
					<div className="text-tertiary text-sm md:text-2xl font-semibold text-center">
						Daily Course Material
					</div>
				</div>
				<div className="hidden md:block relative w-20 h-0.5">
					<Image
						src='/img/dotted_line.png'
						alt='line'
						fill
					/>
				</div>
				<div className="course_attr flex flex-col place-items-center w-28 md:w-48">
					<div className="relative w-20 h-20 md:w-32 md:h-32">
						<Image
							src='/img/lifetime_access.png'
							alt='Lifetime access'
							fill
						/>
					</div>
					<div className="text-tertiary text-sm md:text-2xl font-semibold text-center">
						Lifetime LMS Access
					</div>
				</div>
				<div className="hidden md:block relative w-20 h-0.5">
					<Image
						src='/img/dotted_line.png'
						alt='line'
						fill
					/>
				</div>
				<div className="course_attr flex flex-col place-items-center w-28 md:w-48">
					<div className="relative w-20 h-20 md:w-32 md:h-32">
						<Image
							src='/img/course_content.png'
							alt='150+ hours course content'
							fill
						/>
					</div>
					<div className="text-tertiary text-sm md:text-2xl font-semibold text-center">
						{contentHours}+ hours Course Content
					</div>
				</div>
				<div className="hidden md:block relative w-20 h-0.5">
					<Image
						src='/img/dotted_line.png'
						alt='line'
						fill
					/>
				</div>
				<div className="course_attr flex flex-col place-items-center w-28 md:w-48">
					<div className="relative w-20 h-20 md:w-32 md:h-32">
						<Image
							src='/img/support.png'
							alt='Support'
							fill
						/>
					</div>
					<div className="text-tertiary text-sm md:text-2xl font-semibold text-center">
						Dedicated Support
					</div>
				</div>
			</div>
		</div>

	)
};

type CourseOverviewSectionProps = {
	aboutCourse: string;
	contentHours: number;
};

export default CourseOverviewSection;