import React from "react";
import Image from "next/image";

const AboutVision: React.FC<AboutVisionProps> = () => {
	return (
		<div className="grid px-5 lg:px-0 gap-5 lg:gap-0 lg:grid-cols-2 xl:w-76 mx-auto mb-11 md:mb-24">
			<div className="vision bg-primary flex flex-col items-center pt-7 px-5 pb-6 lg:pt-10 lg:px-10 lg:pb-16 shadow">
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
					To be a leading EdTech company that transforms lives by providing accessible and innovative technical education, enabling students to reach their full potential, drive progress in the digital economy, and gain employment opportunities through our network of corporate clients.
				</p>
			</div>
			<div className="vision bg-tertiary flex flex-col items-center pt-7 px-5 pb-6 lg:pt-10 lg:px-10 lg:pb-16 shadow">
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
				Our mission is to bridge the gap between academia and the IT industry through cutting-edge technical education. We strive to provide Augmented Reality based high-quality training that equips students with the skills, knowledge, and confidence to succeed in their careers. Through our commitment to excellence and innovation, we aim to be at the forefront of shaping the future of technical education and unlocking opportunities for all.				</p>
			</div>
		</div>
	)
};

type AboutVisionProps = {
};

export default AboutVision;