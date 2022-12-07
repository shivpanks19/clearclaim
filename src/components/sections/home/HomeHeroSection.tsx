import React from "react";
import Image from "next/image";

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import StatSection from '@/components/sections/common/StatSection';
import WorkshopButton from '@/components/core/WorkshopButton';

import { useTranslation } from 'next-i18next';

const HomeHeroSection: React.FC<HomeHeroSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className='grid gap-2 md:w-76 mx-auto mb-32' style={{ gridTemplateColumns: '1.25fr 1fr' }}>
				<div className='flex flex-col pt-20'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						Gamify Learning,
						<br />
						Simplify Employment!
					</h1>
					<p className='text-aphonic text-subhero mb-10'>
						India’s first AR-based learning institue.
						<br />
						One-Stop Destination to skill - reskill yourself.
					</p>
					<div className='flex mb-10'>
						<WorkshopButton />
						<Button
							buttonStyleClass='textButton'
							variant='bg-transparent'
							rounded='rounded-sm'
							className='flex px-5 py-3 gap-3 place-items-center'
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
					<div className='flex place-items-center gap-3'>
						<Text
							className='text-primary'
							fontWeight='font-medium'
						>
							&gt; Next batch starts
						</Text>
						<Text
							className='text-tertiary'
							fontWeight='font-bold'
						>
							28th October 2022
						</Text>
					</div>
				</div>
				<div className='flex flex-col'>
					<div
						className='imgContainer'
						style={{ height: '30rem', width: '30rem', alignSelf: 'flex-end' }}
					>
						<Image
							src='/img/home/hero.png'
							objectFit='cover'
							layout='fill'
							alt='Hero Image'
						/>
					</div>
					<div className='trust flex flex-col place-items-center -mt-10 pt-7 z-10 bg-light'>
						<div className='flex gap-2' style={{ alignItems: 'flex-end' }}>
							<Text
								className='text-primary text-subhero'
							>
								Trusted by
							</Text>
							<Text
								className='text-tertiary text-2xl'
								fontWeight='font-bold'
							>
								10,000+
							</Text>
							<Text
								className='text-primary text-subhero'
							>
								students
							</Text>
						</div>
						<Text className='text-primary'>all over India</Text>
					</div>
				</div>
			</div>
			{/* Stats */}
			<StatSection />
		</div>
	)
};

type HomeHeroSectionProps = {};

export default HomeHeroSection;