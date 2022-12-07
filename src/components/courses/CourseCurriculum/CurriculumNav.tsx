import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CurriculumTab from '@/components/courses/CourseCurriculum/CurriculumTab';

const CurriculumNav: React.FC<CurriculumNavProps> = () => {
	return (
		<Tabs
			isFitted
			variant='unstyled'
			orientation='vertical'
			className='w-76 mb-36 mx-auto bg-corporate-light rounded'
		>
			<TabList className='w-full justify-between'>
				<CurriculumTab topTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">1</p>
						<p className='text-2xl font-semibold'>Java</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">2</p>
						<p className='text-2xl font-semibold'>HTML & CSS</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">3</p>
						<p className='text-2xl font-semibold'>Javascript</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">4</p>
						<p className='text-2xl font-semibold'>SQL</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">5</p>
						<p className='text-2xl font-semibold'>JDBC & JEE</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">6</p>
						<p className='text-2xl font-semibold'>Hibernate</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">7</p>
						<p className='text-2xl font-semibold'>Spring</p>
					</div>
				</CurriculumTab>
				<CurriculumTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">8</p>
						<p className='text-2xl font-semibold'>Aptitude</p>
					</div>
				</CurriculumTab>
				<CurriculumTab bottomTab>
					<div className="flex items-center gap-6">
						<p className="index text-3xl font-semibold px-16">9</p>
						<p className='text-2xl font-semibold'>Personality Development</p>
					</div>
				</CurriculumTab>

			</TabList>

			<TabPanels>
				<TabPanel padding={0} className="h-full">
					<div className="bg-loader-gray h-full p-11 flex flex-col rounded-r">
						<div className=" bg-white rounded flex-1 p-11 mb-11 relative">
							<p className="text-xl font-semibold mb-8">
								Java Programming Language
							</p>
							<p className="text-aphonic">
								Scaler helped me channel my energy properly, revise things I had learned in college, and learn new things too! Their reputation for being educators and enthusiastic supporters of aspirants who dream big made me join the academy.
							</p>
						</div>
						<button className="bg-tertiary text-white py-3.5 rounded">
							Download Curriculum
						</button>
					</div>
				</TabPanel>
			</TabPanels >
		</Tabs >
	)
};

type CurriculumNavProps = {};

export default CurriculumNav;
