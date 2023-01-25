import React from "react";
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';
import Loader from '@/components/courses/[slug]/SalaryBar';
import { useTranslation } from 'next-i18next';

const WhatLearnSection: React.FC<WhatLearnSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<div className='grid md:grid-cols-3'>
				<div className='md:col-span-2'>
					<Title
						text='What will you learn?'
						className='mb-8'
					/>
					<ul
						className='mb-8 px-5 md:px-0'
						style={{ listStyleImage: "url('/img/bullet.png')", listStylePosition: 'outside' }}
					>
						<li className='mb-4 pl-4'>Practical training in Data Structures & Algorithms</li>
						<li className='mb-4 pl-4'>Strengthen the DSA concepts from basics to advanced level</li>
						<li className='mb-4 pl-4'>How to solve competitive-level programming questions?</li>
						<li className='mb-4 pl-4'>Practice 150+ coding questions to strengthen the concepts</li>
						<li className='mb-4 pl-4'>Solutions to the problems asked by Amazon, Flipkart, Adobe, Microsoft, Apple, etc</li>
						<li className='mb-4 pl-4'>Solutions to the problems asked by Amazon, Flipkart, Adobe, Microsoft, Apple, etc</li>
					</ul>
				</div>
				<div>
					<Title
						text='Market Salaries'
						className='mb-6'
					/>
					<Loader
						percentage="4/5"
						text="Rs. 23.7 LPA"
						label='Maximum'
					/>
					<Loader
						percentage="3/5"
						text="Rs. 10.7 LPA"
						label='Average'
					/>
					<Loader
						percentage="2/5"
						text="Rs. 3 LPA"
						label='Minimum'
					/>
				</div>
			</div>
		</Container>
	)
};

type WhatLearnSectionProps = {};

export default WhatLearnSection;