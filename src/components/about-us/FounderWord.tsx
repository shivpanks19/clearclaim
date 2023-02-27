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
				<div className="absolute md:left-0 -top-32 md:-top-6 border-11 border-white rounded-full w-90 h-90">
					<Image
						src={founderImage.url}
						className='coding_bootcamp '
						width={366}
						height={366}
						alt='Coding Bootcamp'
					/>
				</div>
				<div className="textSection flex flex-col lg:flex-row items-center gap-5 md:gap-12 w-full md:py-16 md:pl-40 md:pr-8 pt-64 pb-8 h-74 md:h-auto xs:pt-56 px-5 md:px-0 bg-tertiary rounded">
					<div className="textSection">
						<p className="text-lg md:text-2xl font-semibold text-white mb-4 text-center md:text-left">Founder's name</p>
						<p className="text-sm lg:text-xl text-white text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatibus reprehenderit necessitatibus iusto in recusandae, quam nihil at culpa eaque dolore mollitia, inventore corporis quo natus accusantium maiores ipsum praesentium saepe, quas dolorem ipsa sed. Eius rem, dolorem vero reprehenderit earum provident nisi modi corporis tempora odio enim exercitationem officiis!</p>
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