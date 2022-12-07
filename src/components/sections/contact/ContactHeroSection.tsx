import React from "react";
import Image from "next/image";
import Text from '@/elements/Text';

import { useTranslation } from 'next-i18next';

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
			<div className='flex flex-col py-20 w-76 mb-14 mx-auto text-center'>
				<h1 className='text-3xl md:text-hero text-primary'>
					Need to talk?
				</h1>
				<h1 className='text-3xl md:text-hero font-semibold text-primary mb-5'>
					Write to us...
				</h1>
				<p className='text-aphonic text-subhero mb-10'>
					Our team is active on our support, we will respond to all your queries at the earliest possible.
				</p>
			</div>
		</div>
	)
};

type ContactHeroSectionProps = {};

export default ContactHeroSection;