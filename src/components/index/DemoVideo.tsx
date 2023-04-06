import React from "react";
import SectionHeadline from '@/components/common/SectionHeadline';
import '@slightlyoff/lite-vimeo';

const DemoVideo: React.FC<DemoVideoProps> = ({ url, headline, subHeadline }) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4'
			/>
			<div className="video-container relative xl:w-76 mx-auto px-5 mb-12 flex justify-center">
				{/* <iframe data-src={url ?? 'https://player.vimeo.com/video/813124028?h=bf8271f639&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="4k SOCIAL MEDIA"></iframe> */}
				<div className='w-full rounded-3xl overflow-hidden'>
					{/* @ts-ignore */}
					<lite-vimeo videoid="813124028"></lite-vimeo>
				</div>
			</div>
		</>
	)
};

type DemoVideoProps = {
	url: string;
	headline: string;
	subHeadline: string;
};

export default DemoVideo;