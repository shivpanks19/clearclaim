import React from 'react';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CustomMainTab from '@/components/corporate/CustomMainTab';
import CorpBeginnerSection from '@/components/corporate/CorpBeginnerSection';
import CorpIntermediateSection from '@/components/corporate/CorpIntermediateSection';
import CorpAdvancedSection from '@/components/corporate/CorpAdvancedSection';
import WhyUsTab from '@/components/corporate/WhyUsTab';

const WhyUsNav: React.FC<WhyUsNavProps> = () => {
	return (
		<Tabs
			isFitted
			variant='unstyled'
			orientation='vertical'
			className='w-76 mb-36 mx-auto bg-corporate-light rounded-2xl'
		>
			<TabList className='w-full justify-between w-35'>
				<WhyUsTab topTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/job-openings.png'
							width={68}
							height={71}
							alt='Job Openings'
						/>
						<p className='text-xl font-semibold'>Information on Job Openings</p>
					</div>
				</WhyUsTab>
				<WhyUsTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/project-collaboration.png'
							width={79}
							height={79}
							alt='Project Collaboration'
						/>
						<p className='text-xl font-semibold'>Project Collaboration</p>
					</div>
				</WhyUsTab>
				<WhyUsTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/interview-experiences.png'
							width={75}
							height={66}
							alt='Interview Experiences'
						/>
						<p className='text-xl font-semibold'>Authentic Interview Experiences</p>
					</div>
				</WhyUsTab>
				<WhyUsTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/competitive-coding.png'
							width={65}
							height={75}
							alt='Competitive Coding'
						/>
						<p className='text-xl font-semibold'>Competitive Coding</p>
					</div>
				</WhyUsTab>
				<WhyUsTab bottomTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/major-announcements.png'
							width={80}
							height={60}
							alt='Major Accouncements'
						/>
						<p className='text-xl font-semibold'>Major Accouncements</p>
					</div>
				</WhyUsTab>
			</TabList>

			<TabPanels>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/whyus.png'
							objectFit='cover'
							layout='fill'
							alt='Hero Image'
						/>
					</div>

				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};

type WhyUsNavProps = {};

export default WhyUsNav;
