import React from 'react';
import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import CustomTab from '@/components/index/CorporateProgram/CorporateProgramTab';

const CorpIntermediateSection: React.FC<CorpIntermediateSectionProps> = () => {
	return (
		<Tabs
			isFitted
			variant='unstyled'
			orientation='vertical'
		>
			<TabList className='w-full flex justify-between '>
				<CustomTab>
					<div className="flex flex-col">
						<p className="text-xs">MODULE - 1</p>
						<div className="flex justify-between">
							<p className='font-medium'>Introduction to Programming</p>
							<p>1 to 2 Months</p>
						</div>
					</div>
				</CustomTab>
				<CustomTab>
					<div className="flex flex-col">
						<p className="text-xs">MODULE - 2</p>
						<div className="flex justify-between">
							<p className='font-medium'>Programming Constructs</p>
							<p>2 Months</p>
						</div>
					</div>
				</CustomTab>
				<CustomTab>
					<div className="flex flex-col">
						<p className="text-xs">MODULE - 3</p>
						<div className="flex justify-between">
							<p className='font-medium'>Advanced DSA and CS Fundamentals</p>
							<p>4 Months</p>
						</div>
					</div>
				</CustomTab>
				<CustomTab>
					<div className="flex flex-col">
						<p className="text-xs">MODULE - 4</p>
						<div className="flex justify-between">
							<p className='font-medium'>Software and System Design</p>
							<p>3 Months</p>
						</div>
					</div>
				</CustomTab>
				<CustomTab>
					<div className="flex flex-col">
						<div className="flex justify-between">
							<p className='font-medium'>Module Projects</p>
							<p>2 Months</p>
						</div>
					</div>
				</CustomTab>
				<CustomTab>
					<div className="flex flex-col">
						<div className="flex justify-between">
							<p className='font-medium'>Advanced Electives</p>
							<p>1 Month</p>
						</div>
					</div>
				</CustomTab>

			</TabList>

			<TabPanels>
				<TabPanel>
					one1
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};

type CorpIntermediateSectionProps = {};

export default CorpIntermediateSection;