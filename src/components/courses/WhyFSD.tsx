import React from "react";
import Container from '@/components/layout/Container';
import { useTranslation } from 'next-i18next';

const WhyFSDSection: React.FC<WhyFSDSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div className="mx-5 md:mx-auto xl:w-76 ">
			<h2 className="text-primary text-center text-3xl font-semibold mb-12">
				Why
				<span className="text-tertiary">
					&nbsp;Full Stack Web Development&nbsp;
				</span>
				?
			</h2>
			<div className='grid md:grid-cols-3 mb-12 md:mb-24 gap-5'>
				<div className='mb-3'>
					<p className="text-2xl text-primary3 font-semibold border-l-4 border-tertiary pl-4 mb-2.5 h-20">
						Who is this Full Stack Developer Course for?
					</p>
					<p className='text-aphonic'>
						Tap Academy’s Full Stack Development course assumes its students are beginners in the coding world.
						Thus, you get to learn the core concepts, from OOP concepts and ways of building programming logic to a good understanding of Java programming language. After which, the course takes you steadily towards the intermediate and the advanced languages and frameworks. The concepts get deeper with 100+ coding questions and discussion forums.
					</p>
				</div>
				<div className='mb-3'>
					<p className="text-2xl text-primary3 font-semibold border-l-4 border-tertiary pl-4 mb-2.5 h-20">
						The massive demand for Full Stack Developer
					</p>
					<p className='text-aphonic'>
						We use multiple web applications daily, and even more, are added monthly. To develop a web application or website such as Netflix, there is a need for over 20 roles and functions. However, the maximum demand is that of full-stack developers.
						With rapidly evolving technologies, there is a demand for a role that understands the entire software development process and can communicate effectively among teams and management.
						Yes, we are talking about a Full stack developer.
						This makes it one of the highest-paid roles in the IT Industry.
					</p>
				</div>
				<div className='mb-3'>
					<p className="text-2xl text-primary3 font-semibold border-l-4 border-tertiary pl-4 mb-2.5 h-20">
						Full Stack Web Development - Learning made fun with AR
					</p>
					<p className='text-aphonic'>
						With Tap Academy, you can learn the frontend, backend, and database technologies using augmented reality training. It is India’s only platform that uses AR technology to teach computer science concepts with fun and engaging visuals.
						Learn the entire development stack with our instructor-led training and one-to-one personal mentorship from experts on the slack channel. The course video lectures contain the solution to the interview problems asked by giant companies like Amazon, Google, Flipkart, Adobe, Netflix, Microsoft, etc.
					</p>
				</div>
			</div>
		</div>
	)
};

type WhyFSDSectionProps = {};

export default WhyFSDSection;