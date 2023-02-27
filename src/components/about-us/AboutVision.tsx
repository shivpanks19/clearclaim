import React from "react";
import Image from "next/image";

const AboutVision: React.FC<AboutVisionProps> = () => {
	return (
		<div className="grid px-5 lg:px-0 gap-5 lg:gap-0 lg:grid-cols-2 xl:w-76 mx-auto mb-11 md:mb-24">
			<div className="vision bg-primary grid place-items-center pt-7 px-5 pb-6 lg:pt-10 lg:px-10 lg:pb-16 shadow">
				<div className="relative w-12 h-12 lg:w-24 lg:h-24">
					<Image
						src='/img/vision.png'
						fill
						className='mb-2 lg:mb-3'
						alt='Vision'
					/>
				</div>
				<p className="text-lg lg:text-3xl font-semibold text-white mb-3 lg:mb-10">Vision</p>
				<p className='lg:text-xl text-white text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, eveniet ex veniam consequuntur rem nisi praesentium veritatis distinctio possimus asperiores cum corporis consequatur consectetur minus.
				</p>
			</div>
			<div className="vision bg-tertiary grid place-items-center pt-7 px-5 pb-6 lg:pt-10 lg:px-10 lg:pb-16 shadow">
				<div className="relative w-12 h-12 lg:w-24 lg:h-24">
					<Image
						src='/img/mission.png'
						fill
						className='mb-2 lg:mb-3'
						alt='Mission'
					/>
				</div>
				<p className="text-lg lg:text-3xl font-semibold text-white mb-3 lg:mb-10">Mission</p>
				<p className='lg:text-xl text-white text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, eveniet ex veniam consequuntur rem nisi praesentium veritatis distinctio possimus asperiores cum corporis consequatur consectetur minus.
				</p>
			</div>
		</div>
	)
};

type AboutVisionProps = {
};

export default AboutVision;