import React from 'react';
import Image from 'next/image';

const Footer: React.FC<FooterProps> = () => {
	return (
		<div className="bg-footer-bg pt-7 md:pt-12 px-5 pb-16">
			<div className="content md:grid md:grid-cols-26 xl:w-76 mx-auto">
				<div className="col col-span-7">
					<div className="relative w-20 h-9 md:w-36 md:h-14 mb-3 md:mb-5">
						<Image
							src='/img/logo_dark.png'
							fill
							alt='logo'
						/>
					</div>
					<p className="text-sm md:text-base text-gray mb-6 md:mb-7">An online skilling platform</p>
					<div className="flex gap-4 md:gap-6 mb-5 md:mb-11 place-items-center">
						<div className='flex-none w-7 h-7 md:w-9 md:h-9 relative'>
							<Image
								src='/img/fb_white.png'
								fill
								alt='Facebook link'
							/>
						</div>
						<div className="flex-none w-7 h-7 md:w-9 md:h-9 relative">
							<Image
								src='/img/ig_white.png'
								fill
								alt='Instagram link'
							/>
						</div>
						<div className="flex-none w-7 h-7 md:w-9 md:h-9 relative">
							<Image
								src='/img/linkedin_white.png'
								fill
								alt='Linkedin link'
							/>
						</div>
						<div className="flex-none w-6 h-4 md:w-9 md:h-6 relative">
							<Image
								src='/img/yt_white.png'
								fill
								alt='Youtube link'
							/>
						</div>
					</div>
					<p className="text-sm md:text-xl font-semibold text-white mb-3 md:mb-5">
						Learn at a tap!
					</p>
					<div className="relative w-40 h-12 md:w-52 md:h-14 mb-6">
						<Image
							src='/img/android_app.png'
							fill
							alt='Android app link'
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 mb-6 col-span-11">
					<div className="navGrp flex flex-col gap-3">
						<p className="text-sm md:text-xl font-semibold text-white">
							Tap Academy
						</p>
						<p className="text-xs md:text-base text-gray2">
							Blogs
						</p>
						<p className="text-xs md:text-base text-gray2">
							About us
						</p>
						<p className="text-xs md:text-base text-gray2">
							Contact us
						</p>
					</div>
					<div className="navGrp flex flex-col gap-3">
						<p className="text-sm md:text-xl font-semibold text-white">
							Policies
						</p>
						<p className="text-xs md:text-base text-gray2">
							Privacy Policies
						</p>
						<p className="text-xs md:text-base text-gray2">
							Terms & Conditions
						</p>
						<p className="text-xs md:text-base text-gray2">
							Refund / Cancellations
						</p>
					</div>
				</div>
				<div className="col col-span-8">
					<div className="flex gap-4 md:gap-6 mb-5 md:mb-11 mt-2">
						<div className='flex-none w-3 h-4 md:w-5 md:h-5 relative mt-1'>
							<Image
								src='/img/location_white.png'
								fill
								alt='Location link'
							/>
						</div>
						<p className="text-sm md:text-base text-medium text-white">Bldg 3, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, Bengaluru, Karnataka 560076</p>
					</div>
					<div className="flex gap-4 md:gap-6 mb-5 md:mb-11">
						<div className='flex-none w-4 h-4 md:w-6 md:h-6 relative mt-1'>
							<Image
								src='/img/mail_white.png'
								fill
								alt='Email link'
							/>
						</div>
						<p className="text-sm md:text-base text-medium text-white">info@thetapacademy.com</p>
					</div>
					<div className="flex gap-4 md:gap-6 mb-5 md:mb-11">
						<div className="flex-none w-4 h-4 md:w-6 md:h-6 relative mt-1">
							<Image
								src='/img/phone_white.png'
								fill
								alt='Phone link'
							/>
						</div>
						<p className="text-sm md:text-base text-medium text-white">+91 9844441203</p>
					</div>
				</div>
				<Image
					src='/img/greenery.svg'
					className='absolute left-0 bottom-0 md:hidden'
					width='693'
					height='89'
					alt='Greenery'
				/>
				<Image
					src='/img/greenery_lg.svg'
					className='absolute left-0 bottom-0 hidden md:block'
					width='1591'
					height='89'
					alt='Greenery'
				/>
			</div>
		</div>
	)
};

type FooterProps = {};

export default Footer;
