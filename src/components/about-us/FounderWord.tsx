import React from "react";
import Image from "next/image";
import { ImageType } from "@/utils/types";
import SectionHeadline from '@/components/common/SectionHeadline';

const AboutUsHero: React.FC<AboutUsHeroProps> = ({
	headline,
	subHeadline,
	founderImage
}) => {
	return (
		<div>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-5 lg:mb-16'
			/>
			<div className="relative flex flex-col lg:flex-row xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 items-center">
				<div className="absolute md:-left-16 -top-40 md:top-4 border-11 border-white bg-white rounded-full overflow-hidden lg:w-108 h-108">
					<Image
						src={founderImage.url}
						className='coding_bootcamp '
						width={366}
						height={366}
						alt='Coding Bootcamp'
					/>
				</div>
				<div className="textSection flex flex-col lg:flex-row items-center gap-5 md:gap-12 w-full md:py-16 md:pl-40 md:pr-8 pb-8 h-74 md:h-auto pt-56 xxs:pt-85 px-5 md:px-0 bg-tertiary rounded">
					<div className="textSection">
						<p className="text-lg md:text-2xl font-semibold text-white mb-4 text-center md:text-left">Rohit Ravinder</p>
						<p className="text-sm lg:text-xl text-white text-center md:text-left">&quot;Every student has the potential to make a difference, but the current state of education in India often fails to equip them with the industry-relevant skills and knowledge they need to succeed. As a teacher, I understand the needs of the students and recognize the importance of making technical education more interactive, engaging, and fun. Through TapAcademy, we aim to provide accessible and innovative education to students from all corners of globe and empower them to reach their full potential. I truly believe in this quote by APJ Abdul Kalam that, The purpose of education is to make good human beings with skill and expertise…  Enlightened human beings can be created by teachers only.&quot; - Rohit Ravinder</p>
					</div>

				</div>
			</div>
		</div>
	)
};

type AboutUsHeroProps = {
	headline: string;
	subHeadline: string;
	founderImage: ImageType;
};

export default AboutUsHero;