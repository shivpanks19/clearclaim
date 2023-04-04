import React from "react";
import Image from "next/image";
import Col from '@/components/layout/Col';

const CourseUsp: React.FC<CourseUspProps> = () => {
	return (
		<Col className='md:mt-16'>
			<div className="flex flex-col gap-5 md:gap-8">
				<div className="point place-items-center flex gap-8">
					<div className="relative flex-none w-7 h-7 md:w-10 md:h-10">
						<Image
							src='/img/course/ar.png'
							fill
							alt='AR'
						/>
					</div>
					<p className="text-xs md:text-lg text-primary font-medium">
						Augumented Reality enabled  Training
					</p>
				</div>
				<div className="point place-items-center flex gap-8">
					<div className="relative flex-none w-7 h-7 md:w-10 md:h-10">
						<Image
							src='/img/course/community.png'
							fill
							alt='Large Community of our alumini'
						/>
					</div>
					<p className="text-xs md:text-lg text-primary font-medium">
						Large Community of our alumini
					</p>
				</div>
				<div className="point place-items-center flex gap-8">
					<div className="relative flex-none w-7 h-7 md:w-10 md:h-10">
						<Image
							src='/img/course/person.png'
							fill
							alt='Mock interviews & feedback sessions'
						/>
					</div>
					<p className="text-xs md:text-lg text-primary font-medium">
						Mock interviews & feedback sessions
					</p>
				</div>
				<div className="point place-items-center flex gap-8">
					<div className="relative flex-none w-7 h-7 md:w-10 md:h-10">
						<Image
							src='/img/course/linkedin.png'
							fill
							alt='Resume & Linkedin profile building sessions'
						/>
					</div>
					<p className="text-xs md:text-lg text-primary font-medium">
						Resume & Linkedin profile building sessions
					</p>
				</div>
				<div className="point place-items-center flex gap-8">
					<div className="relative flex-none w-7 h-7 md:w-10 md:h-10">
						<Image
							src='/img/course/business-card.png'
							fill
							alt='Company specific grooming sessions'
						/>
					</div>
					<p className="text-xs md:text-lg text-primary font-medium">
						Company specific grooming sessions
					</p>
				</div>
			</div>
		</Col>
	)
};

type CourseUspProps = {};

export default CourseUsp;