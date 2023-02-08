import React from "react";
import Image from 'next/image';
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';
import { uuid } from 'uuidv4';

const CourseSummary: React.FC<CourseSummaryProps> = ({ summaryList }) => {
	return (
		<Container>
			<a id='course-summary' />
			<div className='flex flex-col-reverse lg:flex-row place-items-center px-5 mb-8 mx-auto'>
				<div className='lg:mr-24 mx-auto'>
					<Image
						src='/img/placement_assistance.png'
						width={300}
						height={374}
						alt='Placement Assistance'
					/>
				</div>
				<div className='md:col-span-2'>
					<Title
						text='What will you learn?'
						className='mb-8'
					/>
					<ul
						className='mb-8 px-5 md:px-0'
						style={{ listStyleImage: "url('/img/bullet.png')", listStylePosition: 'outside' }}
					>
						{summaryList?.length > 0 && summaryList.map((point) => (
							<li
								key={uuid()}
								className='mb-4 pl-4'
							>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	)
};

type CourseSummaryProps = {
	summaryList: string[];
};

export default CourseSummary;