import React from 'react';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import WhyUsTab from '@/components/common/why-us/WhyUsTab';

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
							alt='Mock interviews'
						/>
						<p className='text-xl font-semibold'>Mock interviews</p>
					</div>
				</WhyUsTab>
				<WhyUsTab>
					<div className="flex items-center gap-6">
						<Image
							src='/img/interview-experiences.png'
							width={75}
							height={66}
							alt='Competitive coding'
						/>
						<p className='text-xl font-semibold'>Competitive coding</p>
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
						<p className='text-xl font-semibold'>Major Announcements</p>
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
						<p className='text-xl font-semibold'>24/7 LMS Access</p>
					</div>
				</WhyUsTab>
			</TabList>

			<TabPanels>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/job_description.png'
							fill
							alt='Hero Image'
						/>
					</div>
				</TabPanel>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/mock_interviews.webp'
							fill
							alt='Mock Interviews'
						/>
					</div>
				</TabPanel>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/competitive_coding.png'
							fill
							alt='Competitive Coding'
						/>
					</div>
				</TabPanel>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/major_announcements.png'
							fill
							alt='MAajor Announcements'
						/>
					</div>
				</TabPanel>
				<TabPanel className='bg-whyus h-full flex rounded-r-2xl'>
					<div className="flex-1 m-1 relative">
						<Image
							src='/img/lms.png'
							fill
							alt='LMS'
						/>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};

type WhyUsNavProps = {};

export default WhyUsNav;
