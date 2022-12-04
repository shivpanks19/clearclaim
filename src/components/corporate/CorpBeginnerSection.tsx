import React from 'react';
import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import CustomTab from '@/components/corporate/CustomTab';

const CorpBeginnerSection: React.FC<CorpBeginnerSectionProps> = () => {
	return (
		<Tabs
			isFitted
			variant='unstyled'
			orientation='vertical'
		>
			<TabList className='w-full flex justify-between pl-3'>
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
				<TabPanel
					paddingY={0}
					paddingLeft={10}
				>
					<div className="flex flex-col justify-between">
						<div className="content h-full rounded text-white flex flex-col justify-between bg-corporate py-6 px-8 mb-6">
							<div className="text">
								<p className='text-lg'>1 to 2 Months*</p>
								<p className="text-sm">
									There are 2 types of Beginner batches. "Introduction to Programming" module is
									1 month long for Beginner Refresher and 2 months long for Beginner Complete
								</p>
								<hr className="bg-white h-0.5 my-3" />
								<ul className='list-disc ml-3'>
									<li>Introduction to Programming</li>
									<ul className='ml-3 text-sm' style={{ listStyle: 'circle' }}>
										<li>Python OR Java</li>
										<li>Data Types and Operators</li>
										<li>Loops and Conditional Statements</li>
										<li>Functions</li>
										<li>1d & 2D Arrays</li>
										<li>Strings</li>
									</ul>
								</ul>
								<hr className="bg-white h-0.5 my-3" />
							</div>
							<div className="next-link">
								<p className='underline text-sm text-yellow-400'>Read Next: Module 2 - Programming Constructs</p>
							</div>
						</div>
						<button className="bg-red rounded py-3 mb-2 text-white">Download Curriculum</button>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};

type CorpBeginnerSectionProps = {};

export default CorpBeginnerSection;