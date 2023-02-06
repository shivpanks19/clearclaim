import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { NavItem } from '@/data/staticData';

const MobileViewNavbar: React.FC<MobileViewNavbarProps> = ({ activate }) => {
	const router = useRouter();
	return (
		<div>
			{/* {activate && ( */}
			<div className="block md:hidden w-full- h-full">
				<Image
					src='/img/jump_girl.png'
					width='187'
					height='482'
					alt='Girl Jump'
				/>
			</div>
			{/* )} */}
		</div>
	);
};

type MobileViewNavbarProps = {
	activate: boolean;
	navbarItems: Array<NavItem>;
};

export default MobileViewNavbar;
