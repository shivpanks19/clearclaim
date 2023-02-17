import React from "react";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import SocialButtonList from '@/components/common/SocialButtonList';

const ContactHeroSection: React.FC<ContactHeroSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className="grid lg:grid-cols-2 xl:w-76 mx-auto place-items-center mb-10">
				<div className='flex flex-col md:pt-20 mb-7 md:mb-10 px-5 md:mx-auto'>
					<h1 className='text-3xl md:text-hero text-primary'>
						Need to talk?
					</h1>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
						Write to us...
					</h1>
					<p className='text-aphonic text-lg'>
						Our team is active on our support, we will respond to all your queries at the earliest possible.
					</p>
				</div>
				<div className='flex flex-col mb-8'>
					<Image
						src='/img/contact_us.png'
						width={466}
						height={405}
						alt='Hero Image'
					/>
				</div>
			</div>
			<SocialButtonList />
		</div>
	)
};

type ContactHeroSectionProps = {};

export default ContactHeroSection;