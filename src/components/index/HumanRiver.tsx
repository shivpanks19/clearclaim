import React from "react";
import Image from "next/image";
import animation from '@/styles/animation.module.scss';
import miscStyle from '@/styles/misc-style.module.scss';
import { ImageSetAnimationDetail } from '@/data/types';
import { humanRiverData } from '@/data/staticData';
import groupBy from "@/utils/groupBy";

const HumanRiver: React.FC<HumanRiverProps> = () => {
	const groupedByLevel: Record<number, Array<ImageSetAnimationDetail>> = groupBy('level')(humanRiverData);
	return (
		<div className='h-full relative overflow-hidden'>
			{groupedByLevel && Object.entries(groupedByLevel).map(([level, imgList], groupIdx) => (
				<ImageLayer
					key={groupIdx}
					level={parseInt(level)}
					imgList={imgList}
				/>
			))}
		</div>
	)
};

const ImageLayer: React.FC<ImageLayerProps> = ({ level, imgList }) => {
	return (
		<div className="absolute h-full w-full grid grid-cols-3">
			<div className='relative flex gap-5 w-96'>
				{imgList && imgList.map((img, imgIdx) => (
					<div
						className={
							`absolute ${miscStyle[`level-${level}`]}
										${getAbsolutePositioningClass(level + 1, imgIdx)}
										${animation.upInfinte} ${animation[`speed-${img.speed}`]}`
						}
						style={{ top: 550, animationDelay: `${imgIdx * 2.2}s` }}
						key={imgIdx}
					>
						<Image
							src={img.src}
							width={143}
							height={194}
							alt='Hero Image'
						/>
					</div>
				))
				}
			</div >
		</div>
	)
};

const getAbsolutePositioningClass = (colNum: number, imgIdx: number): string => {
	switch (colNum) {
		case 2:
			return imgIdx % 2 === 0
				? `left-0`
				: 'right-0';
			break;
		case 3:
			if ((imgIdx + 3) % 3 === 0) return 'left-0';
			if ((imgIdx + 3) % 3 === 1) return 'left-32';
			if ((imgIdx + 3) % 3 === 2) return 'right-0';
			break;
		case 4:
			if ((imgIdx + 4) % 4 === 0) return 'left-0';
			if ((imgIdx + 4) % 4 === 1) return 'left-16';
			if ((imgIdx + 4) % 4 === 2) return 'right-16';
			if ((imgIdx + 4) % 4 === 3) return 'right-0';
			break;
		default:
			break;
	}
}

type HumanRiverProps = {
};

type ImageLayerProps = {
	level: number;
	imgList: Array<ImageSetAnimationDetail>;
};

export default HumanRiver;