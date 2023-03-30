import React from "react";
import Image from "next/image";
import { ImageType } from "@/utils/types";

const ReviewHeroSection: React.FC<ReviewHeroSectionProps> = ({
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
			<div className='xl:w-76 grid md:grid-cols-2 md:gap-8 px-5 mx-auto mb-12 md:mb-32 items-center'>
				<div className='flex flex-col md:pt-20'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						{headline}
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						{subHeadline}
					</p>
				</div>
				<div className='mb-10'>
					{heroImage?.url && (
						<Image
							src={heroImage.url}
							width={496}
							height={500}
							alt='Hero Image'
						/>
					)}
				</div>
			</div>
		</div>
	)
};

type ReviewHeroSectionProps = {
	headline: string;
	subHeadline: string;
	heroImage: ImageType;
};

export default ReviewHeroSection;