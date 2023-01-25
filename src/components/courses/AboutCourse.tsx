import React from "react";
import Image from 'next/image';
import Col from '@/components/layout/Col';
import Grid3 from '@/components/layout/Grid3';
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';
import ColSpan2 from '@/components/layout/ColSpan2';
import CourseUsp from "@/components/courses/[slug]/CourseUsp";
import { useTranslation } from 'next-i18next';

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div className="mb-12 md:mb-24">
			<div className='grid md:grid-cols-3 mb-10 md:mb-24'>
				<div className="md:col-span-2">
					<Title
						text='About Course'
						className='mb-1 md:mb-3 md:mb-8 text-sm md:text-base'
					/>
					<p className="text-aphonic mr-12 text-sm md:text-base">
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
					</p>
				</div>
				<CourseUsp />
			</div>
			<div className="grid grid-cols-2 gap-5 md:grid-cols-7 place-items-center md:gap-8">
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
							alt='300+ hours course content'
							fill
						/>
					</div>
					<div className="text-tertiary text-sm md:text-2xl font-semibold text-center">
						300+ hours Course Content
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

type CourseOverviewSectionProps = {};

export default CourseOverviewSection;