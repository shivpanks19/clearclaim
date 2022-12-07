import React from 'react';
import Image from 'next/image';
import PlacementCard from '@/components/PlacementCard';
import SectionHeadline from '@/components/core/SectionHeadline';

const AchievementSection: React.FC<AchievementSectionProps> = ({ largeFormat }) => {
	return (
		<>
			<SectionHeadline
				title='Our achievements'
				subtitle='Top placement records at Tap Academy'
				className='mb-10'
			/>
			<div className="w-76 mx-auto relative mb-20 pt-10">
				<div className='read_more absolute right-0 top-0 flex gap-3 align-middle'>
					<p className="text-tertiary">Read more</p>
					<Image
						src='/img/arrow_right_blue.png'
						width={20}
						height={20}
						alt='Right arrow'
					/>
				</div>
				<div className="cardContainer w-42 grid grid-cols-3 gap-14">
					<PlacementCard />
					<PlacementCard />
					<PlacementCard />
					{largeFormat && (
						<>
							<PlacementCard />
							<PlacementCard />
							<PlacementCard />
							<PlacementCard />
							<PlacementCard />
							<PlacementCard />
						</>
					)}
				</div>
			</div>
		</>
	)
};

type AchievementSectionProps = {
	largeFormat?: boolean;
};

export default AchievementSection;