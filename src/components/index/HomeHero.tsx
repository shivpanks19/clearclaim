import React from "react";
import Image from "next/image";

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import StatSection from '@/components/common/Stat';
import HumanRiver from '@/components/index/HumanRiver';
import WorkshopButton from '@/components/common/button/WorkshopButton';

import { useTranslation } from 'next-i18next';
import { ImageType } from '@/utils/types';

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ headline, subHeadline, studentsTrained, workshopsConducted, placementDrives, nextBatchDate, riverImages, riverImagesLv2, riverImagesLv3 }) => {
	const { t } = useTranslation();
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
			className='pt-8 pb-4 mb-12'
		>
			<div className='grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-8 md:mb-20'>
				<div className='flex flex-col md:pt-20 px-5 mb-7'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-3 md:mb-5'>
						{headline}
						<br />
						{/* Simplify Employment! */}
					</h1>
					<p className='text-aphonic mb-4 md:mb-10'>
						{subHeadline}
						{/* India’s first AR-based learning institue. */}
						<br />
						{/* One-Stop Destination to skill - reskill yourself. */}
					</p>
					<div className='flex mb-3 md:mb-10'>
						<div className="w-50">
							<WorkshopButton />
						</div>
						<Button
							buttonStyleClass='textButton'
							variant='bg-transparent'
							rounded='rounded-sm'
							className='flex px-5 py-3 gap-3 place-items-center hidden lg-block'
						>
							<Image
								src='/img/home/play.png'
								height={32}
								width={32}
								alt='play'
								className=''
							/>
							<Text
								variant='text-secondary'
								fontSize='text-lg'
								fontWeight='font-medium'
							>
								{t('Watch a demo video')}
							</Text>
						</Button>
					</div>
					<div className='flex place-items-center gap-3 text-xs md:text-base'>
						<p
							className='text-primary font-medium'
						>
							&gt; Next batch starts
						</p>
						<p
							className='text-tertiary font-bold'
						>
							{nextBatchDate && new Date(nextBatchDate).toDateString()}
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<div
						className='relative w-full h-96'
						style={{ alignSelf: 'flex-end' }}
					>
						<HumanRiver
							riverImages={riverImages}
							riverImagesLv2={riverImagesLv2}
							riverImagesLv3={riverImagesLv3}
						/>
					</div>
					<div className='trust flex flex-col place-items-center pt-7 z-10 bg-lightblue'>
						<div className='flex gap-2' style={{ alignItems: 'flex-end' }}>
							<Text
								className='text-primary '
							>
								Trusted by
							</Text>
							<Text
								className='text-tertiary md:text-4xl'
								fontWeight='font-bold'
							>
								{studentsTrained}+
							</Text>
							<Text
								className='text-primary'
							>
								students
							</Text>
						</div>
						<Text className='text-primary'>all over India</Text>
					</div>
				</div>
			</div>
			{/* Stats */}
			<StatSection
				studentsTrained={studentsTrained}
				workshopsConducted={workshopsConducted}
				placementDrives={placementDrives}
			/>
		</div>
	)
};

type HomeHeroSectionProps = {
	headline: string;
	subHeadline: string;
	studentsTrained: number;
	workshopsConducted: number;
	nextBatchDate: Date;
	placementDrives: number;
	riverImages: ImageType[];
	riverImagesLv2: ImageType[];
	riverImagesLv3: ImageType[];
};

export default HomeHeroSection;