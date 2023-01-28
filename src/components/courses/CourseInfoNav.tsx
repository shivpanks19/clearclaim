import React from "react";
import Link from 'next/link';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import RegisterButton from "@/components/common/button/RegisterButton";

const CourseInfoNav: React.FC<CourseInfoNavProps> = () => {
	return (
		<div className=' gap-8 items-center mb-5 xl:w-76 mx-auto'>
			<div className="hidden lg:flex w-full justify-between place-items-center">
				<Link href='#course-overview'>
					<p className='font-bold text-tertiary'>Course Overview</p>
				</Link>
				<Link href='#course-curriculum'>
					<p className='font-bold text-primary2'>Course Curriculum</p>
				</Link>
				<Link href='#why-tap-academy'>
					<p className='font-bold text-primary2'>Why Tap Academy?</p>
				</Link>
				<Link href='#success-stories'>
					<p className='font-bold text-primary2'>Success Stories</p>
				</Link>

				<Link href='#pricing'>
					<p className='font-bold text-primary2'>Pricing</p>
				</Link>

				<Link href='#faqs'>
					<p className='font-bold text-primary2'>FAQs</p>
				</Link>
				<div className="justify-end md:flex-none">
					<RegisterButton />
				</div>
			</div>
			<div className="w-full flex justify-end px-5 mb-8 lg:hidden">
				<div >
					<RegisterButton />
				</div>
			</div>
		</div>
	)
};

type CourseInfoNavProps = {};

export default CourseInfoNav;