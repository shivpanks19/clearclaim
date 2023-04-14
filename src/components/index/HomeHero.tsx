import React from "react";
import Image from "next/image";

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ headline, subHeadline }) => {
	return (
		<div className='relative pt-14 pb-4'>
			<Image src='/img/home/homeHeroBg.png' fill alt='background image' priority style={{ zIndex: -1 }} />
			<div className='grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-10 md:mb-20'>
				<div className='flex flex-col lg:pt-41 px-5 mb-7 text-center lg:text-left'>
					<p className='bg-white text-tertiary font-bold text-xs lg:text-base px-2 py-1 lg:px-4 lg:py-2 rounded lg:rounded-xl w-max mx-auto lg:ml-0 mb-4'>Maximize your Tax returns with Tax+</p>
					<h1 className='text-4xl md:text-6xl font-black text-primary mb-4 md:mb-5'>
						{headline}
						<br />
					</h1>
					<p className='text-aphonic mb-4 md:mb-10 lg:text-lg'>
						{subHeadline}
						<br />
					</p>
					<button className="hidden bg-primary text-white rounded-full py-4 px-8 flex justify-center items-center gap-2 lg:flex w-max"><Image src='/img/home/notepad.png' width={24} height={24} alt='Plan My Taxes' /> Plan My Taxes</button>
				</div>
				<div className='flex flex-col place-items-center'>
					<div className="relative w-67 h-67 md:w-157 md:h-157">
						<Image
							src='/img/home/homeHero.png'
							fill
							alt='Hero Image'
							className="mb-4"
						/>
					</div>
					<button className="bg-primary text-white rounded-full py-2.5 px-5 flex justify-center items-center gap-2 lg:hidden"><Image src='/img/home/pen.png' width={16} height={16} alt='Register Now' /> Register Now</button>
				</div>
			</div>

		</div>
	)
};

type HomeHeroSectionProps = {
	headline: string;
	subHeadline: string;
};

export default HomeHeroSection;