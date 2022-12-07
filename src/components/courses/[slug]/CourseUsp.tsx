import React from "react";
import Image from "next/image";
import Col from '@/components/layout/Col';
import Grid3 from '@/components/layout/Grid3';
import Title from '@/components/common/Title';
import Container from '@/components/common/Container';
import ColSpan2 from '@/components/common/ColSpan2';
import SectionHeadline from "@/components/common/SectionHeadline";
import { useTranslation } from 'next-i18next';

const CourseUsp: React.FC<CourseUspProps> = () => {
	const { t } = useTranslation();

	return (
		<Col className='mt-16'>
			<div className="flex flex-col gap-8">
				<div className="point flex gap-8">
					<div className="flex-none">
						<Image
							src='/img/course/ar.png'
							width={40}
							height={40}
							alt='AR'
						/>
					</div>
					<p className="text-lg text-primary font-medium">
						Augumented Reality enabled  Training
					</p>
				</div>
				<div className="point flex gap-8">
					<div className="flex-none">
						<Image
							src='/img/course/community.png'
							width={40}
							height={40}
							alt='Large Community of our alumini'
						/>
					</div>
					<p className="text-lg text-primary font-medium">
						Large Community of our alumini
					</p>
				</div>
				<div className="point flex gap-8">
					<div className="flex-none">
						<Image
							src='/img/course/person.png'
							width={40}
							height={40}
							alt='Mock interviews & feedback sessions'
						/>
					</div>
					<p className="text-lg text-primary font-medium">
						Mock interviews & feedback sessions
					</p>
				</div>
				<div className="point flex gap-8">
					<div className="flex-none">
						<Image
							src='/img/course/linkedin.png'
							width={40}
							height={40}
							alt='Resume & Linkedin profile building sessions'
						/>
					</div>
					<p className="text-lg text-primary font-medium">
						Resume & Linkedin profile building sessions
					</p>
				</div>
				<div className="point flex gap-8">
					<div className="flex-none">
						<Image
							src='/img/course/business-card.png'
							width={40}
							height={40}
							alt='Company specific grooming sessions'
						/>
					</div>
					<p className="text-lg text-primary font-medium">
						Company specific grooming sessions
					</p>
				</div>
			</div>
		</Col>
	)
};

type CourseUspProps = {};

export default CourseUsp;