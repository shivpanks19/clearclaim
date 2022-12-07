import React from "react";
import Col from '@/components/core/Col';
import Grid3 from '@/components/core/Grid3';
import Title from '@/components/core/Title';
import Container from '@/components/core/Container';
import ColSpan2 from '@/components/core/ColSpan2';
import Loader from '@/components/core/Loader';
import { useTranslation } from 'next-i18next';

const WhatLearnSection: React.FC<WhatLearnSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Grid3>
				<ColSpan2>
					<Title
						text='What will you learn?'
						className='mb-8'
					/>
					<ul
						className='mb-8'
						style={{ listStyleImage: "url('/img/bullet.png')", listStylePosition: 'outside' }}
					>
						<li className='mb-4 pl-4'>Practical training in Data Structures & Algorithms</li>
						<li className='mb-4 pl-4'>Strengthen the DSA concepts from basics to advanced level</li>
						<li className='mb-4 pl-4'>How to solve competitive-level programming questions?</li>
						<li className='mb-4 pl-4'>Practice 150+ coding questions to strengthen the concepts</li>
						<li className='mb-4 pl-4'>Solutions to the problems asked by Amazon, Flipkart, Adobe, Microsoft, Apple, etc</li>
						<li className='mb-4 pl-4'>Solutions to the problems asked by Amazon, Flipkart, Adobe, Microsoft, Apple, etc</li>
					</ul>
				</ColSpan2>
				<Col>
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
				</Col>
			</Grid3>
		</Container>
	)
};

type WhatLearnSectionProps = {};

export default WhatLearnSection;