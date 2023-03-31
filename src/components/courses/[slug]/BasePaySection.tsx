import React from "react";
import Link from 'next/link';
import Button from "@/elements/Button";
import SalaryBar from '@/components/courses/[slug]/SalaryBar'
import GlassdoorSalaryBars from '@/components/courses/[slug]/GlassdoorSalaryBars';

const BasePaySection: React.FC<BasePaySectionProps> = ({ glassdoorSalaryData }) => {
	return (
		< div className='w-full px-5'>
			<div className=" mx-auto xl:w-76 mt-52 mb-20 pt-115 xs:pt-80 md:pt-96 lg:pt-56 border border-primary2 rounded relative">
				<div className="header w-10/12 mx-auto rounded-3xl shadow-gdSalaryBox absolute -top-14 -mt-20 left-0 right-0 bg-white p-10 mb-18 flex flex-col lg:flex-row">
					<div className="mr-20">
						<p className="text-sm lg:text-base font-semibold">Average Base Pay</p>
						<p className="text-lg lg:text-3xl font-bold">₹ {Math.ceil(parseFloat(glassdoorSalaryData.averageSalary) * 100000)} <span className="text-aphonic">/yr</span></p>
						<p className='text-sm lg:text-base mb-4 lg:mb-10'>Same as national average</p>
						<p className='text-sm lg:text-base mb-5 text-aphonic'>Not including cash compensation</p>
						<Button
							variant='bg-transparent'
							className='px-3 md:px-7 py-3 w-42 mb-3 md:mb-0 border border-primary2 rounded'
						>
							<p className="text-primary text-xs md:text-base font-bold">
								See More Insights
							</p>
						</Button>
					</div>
					<div className="w-full lg:w-7/12 flex items-end">
						<GlassdoorSalaryBars glassdoorSalaryData={glassdoorSalaryData} />
					</div>
				</div>
				<p className="text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">Market Salaries</p>
				<div className="mx-10 mb-9 grid lg:grid-cols-3 gap-7">
					<SalaryBar
						percentage='w-7/12'
						text={`Rs.${parseFloat(glassdoorSalaryData.maximumSalary).toFixed(2)} LPA`}
						label='Maximum'
					/>
					<SalaryBar
						percentage='w-9/12'
						text={`Rs.${parseFloat(glassdoorSalaryData.averageSalary).toFixed(2)} LPA`}
						label='Average'
					/>
					<SalaryBar
						percentage='w-7/12'
						text={`Rs.${parseFloat(glassdoorSalaryData.minimumSalary).toFixed(2)} LPA`}
						label='Minimum'
					/>
				</div>
				<p className="text-center text-primary font-bold mb-9">
					View source:&nbsp;
					<Link target='_blank' href={glassdoorSalaryData?.glassdoorSalaryLink ?? 'https://www.glassdoor.co.in/Salaries/bangalore-full-stack-web-developer-salary-SRCH_IL.0,9_IM1091_KO10,34.htm#:~:text=The%20average%20salary%20for%20Full,26%2C371%20%2D%20%E2%82%B92%2C69%2C256.'}>
						<span className="font-normal text-tertiary italic underline ">
							Glassdoor
						</span>
					</Link>
				</p>
			</div >
		</div>
	)
};

type BasePaySectionProps = {
	glassdoorSalaryData?: Record<string, string>;
};

export default BasePaySection;