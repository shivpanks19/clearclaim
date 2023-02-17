import Logo from '@/components/common/Logo';
import MobileViewNavbar from '@/components/layout/MobileViewNavbar';
import JoinNowButton from '@/components/common/button/JoinNowButton';
import {
	navItems
} from '@/data/staticData';
import Text from '@/elements/Text';
import { useRouter } from 'next/router';
import { Popover } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
/*
 * TODO: Navbar toggle view breakpoint issue investigation
 * Ideally we need `md` as view toggle break-point
 * Experienced some issues in view on `ipad-sized` devices when view toggle break-point was `md`
 * To tackle that issue view toggle break-point is set to `lg`
 * To change break-point - change all `lg:` prefixed classes to `md:` prefixed here and in MobileViewNavbar component
 */
const Navbar: React.FC<NavbarProps> = () => {
	const { t } = useTranslation();
	const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
	const [navBg, setNavBg] = useState('bg-lightblue');
	const { asPath } = useRouter();

	const toggleNavbar = () => {
		if (isMobileNavbarVisible) {
			setIsMobileNavbarVisible(false);
		} else {
			setIsMobileNavbarVisible(true);
		}
	};

	useEffect(() => {
		const scrollHandler = () => {
			if (scrollY > 0) {
				setNavBg('bg-white shadow-navbar')
			} else {
				setNavBg('bg-lightblue')
			}
			console.log(scrollY);
		};
		window.addEventListener('scroll', scrollHandler);
		return (window.removeEventListener('scroll', scrollHandler));
	}, [])

	return (
		<div className='sticky top-0 left-0 z-30'>
			<div className='w-screen grid place-items-center bg-lightblue'>
				{!isMobileNavbarVisible && (
					<div className={`py-4 w-full mdxl:w-76 ${navBg} transition-all`}>
						<div className='flex justify-between items-center pl-4 pr-6'>
							{/* Desktop Screen Logo */}
							<div className='flex-shrink-0'>
								<Link href={'/'}>
									<Logo logoSize='small' />
								</Link>
							</div>

							{/* Hamburger Icon */}
							<div className='-my-2 lg:hidden'>
								<div
									className='rounded-md p-2 inline-flex items-center justify-center
									hover:text-gray-500 focus:outline-none'
									onClick={toggleNavbar}
								>
									<span className='sr-only'>
										{t('openMenu')}
									</span>
									<Image
										src='/img/ham.png'
										width={16}
										height={12}
										alt='menu icon'
										aria-hidden='true'
									/>
								</div>
							</div>

							<Popover.Group
								as='nav'
								className='hidden lg:flex space-x-16 text-secondary'
							>
								{navItems.map((item, index) => {
									return (
										<Link
											key={index}
											href={item.link}
											target={item.target}
										>
											<Text
												className={`font-medium relative text-secondary grid place-items-center ${item.className && item.className} ${item.link === asPath && 'text-tertiary'}`}
												cursor='cursor-pointer'
											>
												{item.title}
												<span className={`${item.link === asPath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
											</Text>
										</Link>
									);
								})}

							</Popover.Group>
							<div className='hidden lg:flex items-center justify-end'>
								<JoinNowButton className='w-full' />
							</div>
						</div>
					</div>
				)}
				<MobileViewNavbar
					activate={isMobileNavbarVisible}
					navbarItems={navItems}
					toggleNav={toggleNavbar}
				/>
			</div>
		</div>
	);
};

type NavbarProps = {
	invertColors?: boolean
}

Navbar.defaultProps = {
	invertColors: false
};

export default Navbar;
