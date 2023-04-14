import React from "react";
import SectionHeadline from "@/components/common/SectionHeadline";
import Timeline from "@/components/index/Timeline";
import { BusinessPoint } from "@/utils/types";

const BusinessProcess: React.FC<BusinessProcessProps> = ({ }) => {
	const businessPoints: BusinessPoint[] = [
		{
			title: 'Share Details',
			description: 'Share your salary details, income sources, and investment details with us.',
			imgSrc: ''
		},
		{
			title: 'Tax Consultation & Planning',
			description: 'Our experts analyse your details, understand your current taxation considering   both regimes.',
			imgSrc: ''
		},
		{
			title: 'Personalised Report',
			description: 'Get a personalised Tax+ report consisting of beneficial tax-regime & potential tax-saving options along with customised recommendations.',
			imgSrc: ''
		},
		{
			title: '1:1 Call with Tax+ Consultants',
			description: 'Connect with our expert tax consultants to understand your tax plan and clear your doubts.',
			imgSrc: ''
		},
	]
	return (
		<div className='xl:w-76 mx-auto mt-9 lg:mt-20 relative h-256 xl:h-154'>
			<SectionHeadline title='How does it happen' className='mb-7 xl:mb-28' />
			<Timeline businessPoints={businessPoints} />
		</div>
	)
};

type BusinessProcessProps = {

};

export default BusinessProcess;