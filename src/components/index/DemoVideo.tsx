import React from "react";
import SectionHeadline from '@/components/common/SectionHeadline';
import { useTranslation } from 'next-i18next';

const DemoVideo: React.FC<DemoVideoProps> = () => {
	const { t } = useTranslation();
	return (
		<>
			<SectionHeadline
				title='How we teach?'
				subtitle='Watch a demo video'
			/>
			{/* <video src="">
			<source src='https://www.youtube.com/watch?v=2E73SftV0co'/>
		</video> */}
			<div className="video-container relative xl:w-76 mx-auto px-5 mb-12 flex justify-center">
				<iframe
					className='m-5 rounded-3xl sm:w-35 md:w-full h-48 md:h-160'
					src="https://www.youtube.com/embed/2E73SftV0co"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>
				</iframe>
			</div>
		</>
	)
};

type DemoVideoProps = {
};

export default DemoVideo;