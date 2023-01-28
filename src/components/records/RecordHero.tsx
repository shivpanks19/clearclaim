import React from "react";
import Image from "next/image";
import { ImageType } from "@/utils/types";

const RecordHeroSection: React.FC<RecordHeroSectionProps> = ({
	headline,
	subHeadline,
	heroImage
}) => {
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className='grid md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center md:grid-cols-2'>
				<div className='flex flex-col md:pt-20 mb-7 md:mb-10'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						{headline}
					</h1>
					<p className='text-aphonic text-lg'>
						{subHeadline}
					</p>
				</div>
				<div className='flex flex-col mb-8'>
					{heroImage?.url && (
						<Image
							src={heroImage.url}
							width={552}
							height={461}
							alt='Hero Image'
						/>
					)}
				</div>
			</div>
		</div>
	)
};

type RecordHeroSectionProps = {
	headline: string;
	subHeadline: string;
	heroImage: ImageType;
};

export default RecordHeroSection;