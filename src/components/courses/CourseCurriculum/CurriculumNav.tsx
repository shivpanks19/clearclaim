import React, { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CurriculumTab from '@/components/courses/CourseCurriculum/CurriculumTab';
import classNames from 'classnames';

const CurriculumNav: React.FC<CurriculumNavProps> = ({ curriculumList, courseName, curriculumPdfUrl }) => {

	const [tabIndex, setTabIndex] = useState(0)
	const [showPanel, setShowPanel] = useState(true)

	const handleTabClick = (idx) => {
		if(idx===tabIndex && showPanel){
			setShowPanel(false)
		}else{
			setShowPanel(true)
		}
		setTabIndex(idx)
	};

	const handleDownload = () => {
		fetch(curriculumPdfUrl)
			.then(response => response.blob())
			.then(blob => {
				const url = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = `${courseName}-curriculum.pdf`;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
			})
			.catch(error => console.error(error));
	};

	return (
		<div className='xl:w-76 mb-36 mx-auto rounded grid place-items-center'>
			<Tabs
				isFitted
				variant='unstyled'
				orientation='vertical'
				className=' grid grid-cols-2 w-full'
				index={tabIndex}
			>

				<TabList className='w-full justify-between'>
					{curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx) => (
						<>
							<CurriculumTab topTab={idx === 0} bottomTab={curriculumList.length - 1 === idx} key={idx} onClick={()=>handleTabClick(idx)}>
								<div className="flex items-center gap-6">
									<p className="index text-sm lg:text-3xl font-semibold px-4 lg:px-16">{idx + 1}</p>
									<p className='text-sm lg:text-2xl font-semibold'>{curriculumPoint.title}</p>
								</div>
							</CurriculumTab>
							<div className={classNames({
								"flex flex-col rounded-r xl:hidden transition-all duration-400 overflow-hidden h-0": true,
								"visible p-3 h-96": idx === tabIndex && showPanel
							})}>
								<div className=" bg-white rounded flex-1 p-3 relative">
									<p className="text-sm lg:text-xl font-semibold mb-3">
										{curriculumPoint.text1}
									</p>
									<ul className='list-disc ml-4'>
										{curriculumPoint.text2?.length > 0 && curriculumPoint.text2.map((txt, idx) => (
											<li className="text-xs lg:text-base text-aphonic" key={idx}>
												{txt}
											</li>
										))}
									</ul>
								</div>
							</div>
						</>

					))}
				</TabList>

				<TabPanels className='hidden xl:block shadow'>
					{curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx) => (
						<TabPanel padding={0} className="h-42" key={idx}>
							<div className="h-full p-11 flex flex-col rounded-r">
								<div className=" bg-white rounded flex-1 p-11 relative">
									<p className="text-xl font-semibold mb-8">
										{curriculumPoint.text1}
									</p>
									<ul style={{ listStyle: 'disc' }}>
										{curriculumPoint.text2?.length > 0 && curriculumPoint.text2.map((txt, idx) => (
											<li className="text-aphonic" key={idx}>
												{txt}
											</li>
										))}
									</ul>
								</div>
							</div>
						</TabPanel>
					))}
				</TabPanels >
			</Tabs >
			<button className="bg-tertiary text-white py-3.5 px-8 xl:px-44 rounded my-4 xl:my-9" onClick={handleDownload}>
				Download Curriculum
			</button>
		</div>
	)
};

type CurriculumNavProps = {
	curriculumList: ({
		title: string;
		text1: string;
		text2: string[];
	})[];
	courseName?: string;
	curriculumPdfUrl?: string;
};

export default CurriculumNav;
