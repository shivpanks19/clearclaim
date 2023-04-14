import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/utils/routes';
import Logo from '@/components/common/Logo';

const Footer: React.FC<FooterProps> = ({ }) => {
	return (
		<div className='relative overflow-hidden' style={{ zIndex: 1 }}>
			<div className="absolute top-0 xl:bottom-24 left-0 mb-4 brightness-50">
				<Image
					src='/img/home/footer_bg_artifact.png'
					width={290}
					height={290}
					alt='Footer Bg Artifact'
				/>
			</div>
			<div className="absolute -bottom-5 right-0 mb-4 brightness-50">
				<Image
					src='/img/home/footer_bg_artifact2.png'
					width={290}
					height={290}
					alt='Footer Bg Artifact'
				/>
			</div>
			<div className="bg-footer-bg pt-7 md:pt-12 px-5 pb-16" >
				<div className="content lg:flex lg:justify-between xl:w-76 mx-auto">
					<div className="col col-span-7">
						<div className="relative w-20 h-9 md:w-36 md:h-14 mb-3 md:mb-5">
							<Logo />
						</div>
					</div>
					<div className="navGrp flex flex-col gap-3 mb-5">
						<p className="text-sm md:text-xl font-semibold text-white">
							COMPANY
						</p>
						<Link href={Routes.aboutUs().pathname} prefetch={false}>
							<p className="text-xs md:text-base text-gray2">
								About us
							</p>
						</Link>
						<Link href={Routes.privacyPolicy().pathname} prefetch={false}>
							<p className="text-xs md:text-base text-gray2">
								Privacy Policy
							</p>
						</Link>
						<Link href={Routes.contactUs().pathname} prefetch={false}>
							<p className="text-xs md:text-base text-gray2">
								Terms & Conditions
							</p>
						</Link>
					</div>
					<div className="grid gap-7 mb-6 col-span-11">

						<div className="navGrp flex flex-col gap-3">
							<p className="text-sm md:text-xl font-semibold text-white">
								SERVICES
							</p>
							<Link href={Routes.aboutUs().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Suraksha+
								</p>
							</Link>
							<Link href={Routes.privacyPolicy().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Claim+
								</p>
							</Link>
							<Link href={Routes.contactUs().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									PF+
								</p>
							</Link>
							<Link href={Routes.contactUs().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Tax+
								</p>
							</Link>
						</div>
					</div>
					<div className="grid gap-7 mb-6 col-span-11">

						<div className="navGrp flex flex-col gap-3">
							<p className="text-sm md:text-xl font-semibold text-white">
								RESOURCES
							</p>
							<Link href={Routes.courses().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Blog
								</p>
							</Link>

							<Link href={Routes.records().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									FAQs
								</p>
							</Link>

							<Link href={Routes.studentReviews().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Infographics
								</p>
							</Link>

							<Link href={Routes.privacyPolicy().pathname} prefetch={false}>
								<p className="text-xs md:text-base text-gray2">
									Contact us
								</p>
							</Link>
						</div>
					</div>
					<div className="grid gap-7 mb-6 col-span-11">
						<div className="col col-span-8">
							<div className="navGrp flex flex-col gap-3">
								<p className="text-sm md:text-xl font-semibold text-white">
									GET OUR APP
								</p>
								<div className="relative w-40 h-12 md:w-52 md:h-14 mb-6">
									<Link href='https://bit.ly/TAwebsiteapp' target='_blank'>
										<Image
											src='/img/android_app.png'
											fill
											alt='Android app link'
										/>
									</Link>
								</div>
							</div>

							<div className="navGrp flex flex-col gap-3">
								<p className="text-sm md:text-xl font-semibold text-white">
									FOLLOW US ON
								</p>
								<div className="flex gap-4 md:gap-6 mb-5 md:mb-11 place-items-center">

									<div className='flex-none w-7 h-7 md:w-9 md:h-9 relative'>
										<Link href='https://www.facebook.com/thetapacademy' target='_blank'>
											<Image
												src='/img/fb_white.png'
												fill
												alt='Facebook link'
											/>
										</Link>
									</div>
									<div className="flex-none w-7 h-7 md:w-9 md:h-9 relative">
										<Link href='https://www.instagram.com/tapacademy_online/' target='_blank'>
											<Image
												src='/img/ig_white.png'
												fill
												alt='Instagram link'
											/>
										</Link>
									</div>
									<Link href='https://in.linkedin.com/company/thetapacademy' target='_blank'>
										<div className="flex-none w-7 h-7 md:w-9 md:h-9 relative">
											<Image
												src='/img/linkedin_white.png'
												fill
												alt='Linkedin link'
											/>
										</div>
									</Link>
									<div className="flex-none w-6 h-4 md:w-9 md:h-6 relative">
										<Link href='https://www.youtube.com/channel/UCvT21bzLRHrnAc-F1SRqRSw' target='_blank'>
											<Image
												src='/img/yt_white.png'
												fill
												alt='Youtube link'
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="bg-footer-bg text-white font-light text-sm text-center py-7">© 2023 Clearclaim All Rights Reserved</p>
		</div>
	)
};

type FooterProps = {
	showFooterTop?: boolean;
};

export default Footer;
