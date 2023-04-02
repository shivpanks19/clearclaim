import React from "react";
import Image from "next/image";
import PlacementDriveStat from '@/components/drive/PlacementDriveStat';
import { ImageType } from "@/utils/types";

const TapEventHero: React.FC<TapEventHeroProps> = ({ headline, headlineBold, subHeadline, heroImage }) => {
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
			className='pt-8 mb-10'
		>
			<div className='grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-12 md:mb-32'>
				<div className='flex flex-col md:pt-20 px-5 mb-7'>
					<h1 className='text-3xl md:text-hero text-primary mb-3 md:mb-5'>
						{headline}
						<span className="font-semibold">{headlineBold}</span>
						<br />
					</h1>
					<p className='text-aphonic mb-4 md:mb-10'>
						{subHeadline}
						<br />
					</p>
				</div>
				<div className='flex flex-col pb-8'>
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

type TapEventHeroProps = {
	headline: string;
	headlineBold: string;
	subHeadline: string;
	heroImage: ImageType;
};

export default TapEventHero;