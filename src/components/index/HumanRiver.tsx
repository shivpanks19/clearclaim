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
		<div className={`h-full absolute -left-full grid grid-cols-${imgList.length} gap-12 px-5 ${animation.rightInfinte} md:${animation.upInfinte} ${animation[`speed-8`]}`}>
			{imgList && imgList.map((img, imgIdx) => (
				<div
					key={imgIdx}
					className={`relative h-full w-36 flex ${imgIdx % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}
				>
					<div className="relative h-44 w-36">
						<Image
							src={img.src}
							fill
							alt='Hero Image'
						/>
					</div>
				</div>
			))
			}
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
