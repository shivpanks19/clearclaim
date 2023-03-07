import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CurriculumTab from '@/components/courses/CourseCurriculum/CurriculumTab';

const CurriculumNav: React.FC<CurriculumNavProps> = ({ curriculumList }) => {
	return (
		<div className='bg-loader-gray w-76 mb-36 mx-auto rounded grid place-items-center'>
			<Tabs
				isFitted
				variant='unstyled'
				orientation='vertical'
				className='border-0 border-b border-tertiary'
			>

				<TabList className='w-full justify-between'>
					{curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx) => (
						<CurriculumTab topTab={idx === 0} bottomTab={curriculumList.length - 1 === idx} key={idx}>
							<div className="flex items-center gap-6">
								<p className="index text-3xl font-semibold px-16">{idx + 1}</p>
								<p className='text-2xl font-semibold'>{curriculumPoint.title}</p>
							</div>
						</CurriculumTab>
					))}
				</TabList>

				<TabPanels>
					{curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx) => (
						<TabPanel padding={0} className="h-full" key={idx}>
							<div className="bg-loader-gray h-full p-11 flex flex-col rounded-r">
								<div className=" bg-white rounded flex-1 p-11 mb-11 relative">
									<p className="text-xl font-semibold mb-8">
										{curriculumPoint.text1}
									</p>
									<p className="text-aphonic">
										{curriculumPoint.text2}
									</p>
								</div>
							</div>
						</TabPanel>
					))}
				</TabPanels >
			</Tabs >
			<button className="bg-tertiary text-white py-3.5 px-44 rounded my-9 ">
				Download Curriculum
			</button>
		</div>
	)
};

type CurriculumNavProps = {
	curriculumList: ({
		title: string;
		text1: string;
		text2: string;
	})[];
};

export default CurriculumNav;
