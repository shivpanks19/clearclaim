import React from 'react';
import Image from 'next/image';
import PlacementCard from '@/components/common/placement-list/PlacementCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const AchievementSection: React.FC<AchievementSectionProps> = () => {
	return (
		<>
			<SectionHeadline
				title='Our achievements'
				subtitle='Top placement records at Tap Academy'
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-14 md:mb-20 pt-10">
				<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
					<p className="text-tertiary">Read more</p>
					<Image
						src='/img/arrow_right_blue.png'
						width={20}
						height={20}
						alt='Right arrow'
					/>
				</div>
				<div className="cardContainer md:w-42 md:hidden mx-5">
					<PlacementCard />
				</div>
				<div className="cardContainer w-42 md:grid-cols-2 xl:grid-cols-3 gap-14 hidden md:grid mx-5 md:mx-0 place-items-center">
					<PlacementCard />
					<PlacementCard />
					<PlacementCard />
				</div>
			</div>
		</>
	)
};

type AchievementSectionProps = {
};

export default AchievementSection;