import React from "react";
import Image from "next/image";
import SectionHeadline from '@/components/common/SectionHeadline';

const DemoVideo: React.FC<DemoVideoProps> = ({ vimeoVideoId, headline, }) => {
	return (
		<div className='relative w-full bg-secondary lg:pb-32'>
			<SectionHeadline
				title={headline}
				className='py-9 lg:mb-12 relative z-20'
			/>
			<div className="video-container relative mx-auto px-5 pb-12 flex justify-center">
				<div className='w-80 h-48 md:h-96 md:w-144 md:h-80 xl:w-216 xl:h-114 rounded-3xl overflow-hidden z-20'>
					{/* @ts-ignore */}
					<lite-vimeo videoid={vimeoVideoId ?? '806024932'} style={{height: '100%'}}></lite-vimeo>
				</div>
			</div>
			<Image
				src='/img/home/video_bg_artifact.png'
				width={800}
				height={535}
				alt='Video Bg Artifact'
				className="absolute top-16 xl:-top-24 right-0 w-1/2 mb-4 z-10"
			/>
		</div>
	)
};

type DemoVideoProps = {
	headline: string;
	vimeoVideoId?: string;
};

export default DemoVideo;