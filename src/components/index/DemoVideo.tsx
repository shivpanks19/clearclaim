import React from "react";
import SectionHeadline from '@/components/common/SectionHeadline';

const DemoVideo: React.FC<DemoVideoProps> = ({ url, headline, subHeadline }) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
			/>
			{/* <video src="">
			<source src='https://www.youtube.com/watch?v=2E73SftV0co'/>
		</video> */}
			<div className="video-container relative xl:w-76 mx-auto px-5 mb-12 flex justify-center">
				<iframe
					className='m-5 rounded-3xl sm:w-35 md:w-full h-48 md:h-160'
					data-src={url ?? 'https://www.youtube.com/embed/2E73SftV0co'}
					title="Video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>
				</iframe>
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