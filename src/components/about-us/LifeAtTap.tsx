import React from "react";
import Image from "next/image";
import SectionHeadline from '@/components/common/SectionHeadline';
import { ImageType } from "@/utils/types";

const LifeAtTap: React.FC<LifeAtTapProps> = ({
	headline,
	subHeadline,
	image
}) => {
	return (
		<div className='p-4'>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-5 lg:mb-16'
			/>
			<div className="grid lg:grid-cols-2 xl:w-76 mx-auto p-5 shadow">
				<Image
					src='/img/life_at_tap.png'
					width={547}
					height={427}
					className='mb-5'
					alt='Life at Tap Academy'
				/>
				<p className='text-sm lg:text-xl'>
					Welcome to Tap Academy, where we believe that education should be accessible, practical, and lead to rewarding careers. At Tap Academy, we prioritise creating a supportive and inclusive community for our students. We believe that learning should be fun and engaging. And when it comes to our employees we believe that our employees are our greatest asset, and we are committed to creating a positive and supportive work environment. We understand that happy and engaged employees are essential to our success, and we take pride in fostering a culture that values work-life balance, teamwork, and personal growth.
					Join the Tap Academy family today for a rewarding career tomorrow.
				</p>
			</div>
		</div>
	)
};

type LifeAtTapProps = {
	headline: string;
	subHeadline: string;
	image: ImageType;
};

export default LifeAtTap;