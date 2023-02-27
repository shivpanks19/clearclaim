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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio totam nisi laboriosam, tenetur, quidem itaque eius quisquam quis facilis reprehenderit beatae sint. Provident quae molestias omnis ipsum consequatur magnam natus dolor officiis quam excepturi architecto corporis, ab id dicta tenetur reiciendis voluptatum magni. Accusamus, numquam eos magni nisi culpa fugit sed veritatis nesciunt at odio, beatae impedit, laborum doloribus voluptatibus incidunt alias provident! Eius dolorem eum omnis ipsam quaerat officia sint, id dolorum, recusandae est necessitatibus, illum doloribus facere. Aliquam, adipisci ex porro dolores itaque officiis voluptate neque dignissimos, explicabo vitae consequatur enim quasi, a veniam eaque quaerat consectetur?
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