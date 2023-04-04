import React, { useEffect } from "react";
import Image from "next/image";
import animation from '@/styles/animation.module.scss';
import miscStyle from '@/styles/misc-style.module.scss';
import { ImageSetAnimationDetail } from '@/data/types';
import { humanRiverData } from '@/data/staticData';
import groupBy from "@/utils/groupBy";
import { ImageType } from '@/utils/types';

const HumanRiver: React.FC<HumanRiverProps> = ({ riverImages, riverImagesLv2, riverImagesLv3 }) => {
	return (
		<div className='h-full relative overflow-hidden'>
			{[riverImages, riverImagesLv2, riverImagesLv3].map((imgList, groupIdx) => (
				<ImageLayer
					key={groupIdx}
					level={groupIdx + 1}
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
				{imgList?.length > 0 && imgList.map((img, imgIdx) => (
					<div
						className={
							`riverImage absolute w-36 h-48 rounded-xl shadow overflow-hidden ${miscStyle[`level-${level}`]}
										${getAbsolutePositioningClass(level + 1, imgIdx)}
										${animation.upInfinte} ${animation[`speed-${level}`]}`
						}
						style={{ top: 550, animationDelay: `-${imgIdx * 2.2 * level}s` }}
						key={imgIdx}
					>
						<Image
							src={img.url}
							width={143}
							height={194}
							priority={level === 1 && imgIdx < 5}
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
	riverImages: ImageType[];
	riverImagesLv2: ImageType[];
	riverImagesLv3: ImageType[];
};

type ImageLayerProps = {
	level: number;
	imgList: ImageType[];
};

export default HumanRiver;