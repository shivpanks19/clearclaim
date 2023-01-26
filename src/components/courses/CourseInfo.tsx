import React from "react";
import Image from "next/image";
import CourseOverview from '@/components/courses/CourseOverview';
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import RegisterButton from "@/components/common/button/RegisterButton";

const CourseInfoSection: React.FC<CourseInfoSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div className='grid gap-8 md:mb-28 items-center'>
			<Tabs
				isFitted
				variant='unstyled'
				className='xl:w-76 mx-auto'
			>
				<div className="hidden md:flex">
					<TabList
						className='hidden md:flex w-full justify-between mb-28'
					// style={{ boxShadow: '0px 4px 9px 1px rgba(0, 0, 0, 0.06)' }}
					>
						<Tab>
							<p className='font-bold text-tertiary'>Course Overview</p>
						</Tab>
						<Tab>
							<p className='font-bold text-primary2'>Course Curriculum</p>
						</Tab>
						<Tab>
							<p className='font-bold text-primary2'>Why Tap Academy?</p>
						</Tab>
						<Tab>
							<p className='font-bold text-primary2'>Success Stories</p>
						</Tab>
						<Tab>
							<p className='font-bold text-primary2'>Pricing</p>
						</Tab>
						<Tab className='mr-40'>
							<p className='font-bold text-primary2'>FAQs</p>
						</Tab>
						<RegisterButton />
					</TabList>
				</div>
				<div className="w-full flex justify-end px-5 mb-8">

					<div className="flex md:hidden w-36">
						<RegisterButton />
					</div>
				</div>
				<TabPanels>
					<TabPanel>
						<CourseOverview />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	)
};

type CourseInfoSectionProps = {};

export default CourseInfoSection;