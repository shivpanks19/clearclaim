import React from "react";
import Image from "next/image";
import SectionHeadline from "@/components/common/SectionHeadline";

const WhyTaxPlus: React.FC<WhyTaxPlusProps> = ({ }) => {
	return (
		<div className="bg-secondary">
			<div className='xl:w-76 mx-auto pt-9 lg:pt-20 pb-7'>
				<SectionHeadline title='Why choose Tax+' className='mb-3 lg:mb-12' />
				<div className="painpoint flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 justify-center items-center mb-6">
					<div className="flex justify-end">
						<div className="relative w-46 h-46 md:w-72 md:h-72 flex-none">
							<Image
								src='/img/home/pain_point.png'
								fill
								alt='Pain Point'
								className="mb-4"
							/>
						</div>
					</div>
					<div className="text text-center lg:text-left px-7">
						<p className="font-bold mb-2.5 lg:text-2xl">Random Investments</p>
						<p className="text-sm lg:text-base">Did you make last minute random investments to save taxes? Tax+ helps you make smart tax-saving investments.</p>
					</div>
				</div>
				<div className="painpoint flex flex-col lg:grid lg:grid-cols-2 lg:gap-20  justify-center items-center mb-6">
					<div className="flex justify-start lg:order-2">
						<div className="relative w-46 h-46 md:w-72 md:h-72 flex-none">
							<Image
								src='/img/home/pain_point.png'
								fill
								alt='Pain Point'
								className="mb-4"
							/>
						</div>
					</div>
					<div className="text text-center lg:text-right px-7 lg:order-1">
						<p className="font-bold mb-2.5 lg:text-2xl">New vs Old Regime</p>
						<p className="text-sm lg:text-base">Suraksha+ guarantees a transparent and trustworthy claim settlement and ensures that your family does not have to rush and suffer during the challenging time. hat your family does not have to rush and suffer during the challenging time.</p>
					</div>
				</div>
				<div className="painpoint flex flex-col lg:grid lg:grid-cols-2 lg:gap-20  justify-center items-center">
					<div className="flex justify-end">
						<div className="relative w-46 h-46 md:w-72 md:h-72 flex-none">
							<Image
								src='/img/home/pain_point.png'
								fill
								alt='Pain Point'
								className="mb-4"
							/>
						</div>
					</div>
					<div className="text text-center lg:text-left px-7">
						<p className="font-bold mb-2.5 lg:text-2xl">Financial Complexity</p>
						<p className="text-sm lg:text-base">Suraksha+ guarantees a transparent and trustworthy claim settlement and ensures that your family does not have to rush and suffer during the challenging time. hat your family does not have to rush and suffer during the challenging time.</p>
					</div>
				</div>
			</div>
		</div>
	)
};

type WhyTaxPlusProps = {

};

export default WhyTaxPlus;