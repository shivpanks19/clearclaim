import Logo from '@/components/common/Logo';
import MobileViewNavbar from '@/components/layout/MobileViewNavbar';
import JoinNowButton from '@/components/common/button/JoinNowButton';
import { NavItem, navItems as _navItems } from '@/data/staticData'
import Text from '@/elements/Text';
import { useRouter } from 'next/router';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Course } from '@/services/course/types';
import { GoTriangleDown } from 'react-icons/go';
/*
 * TODO: Navbar toggle view breakpoint issue investigation
 * Ideally we need `md` as view toggle break-point
 * Experienced some issues in view on `ipad-sized` devices when view toggle break-point was `md`
 * To tackle that issue view toggle break-point is set to `lg`
 * To change break-point - change all `lg:` prefixed classes to `md:` prefixed here and in MobileViewNavbar component
 */
const Navbar: React.FC<NavbarProps> = ({ courseList }) => {
	const { t } = useTranslation();
	const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
	const [navBg, setNavBg] = useState('bg-lightblue');
	const [navItems, setNavItems] = useState(_navItems);
	const { asPath } = useRouter();

	const toggleNavbar = () => {
		if (isMobileNavbarVisible) {
			setIsMobileNavbarVisible(false);
		} else {
			setIsMobileNavbarVisible(true);
		}
	};

	useEffect(() => {
		if (courseList?.length) {
			const newNavItems = navItems;
			const courseLink = newNavItems.find((item) => item.link === '/courses');
			const subLinks = courseList.map((course) => ({
				id: course.id,
				title: course.courseName,
				link: `/courses/${course.slug}`,
				target: '_blank' as '_blank' | '_self' | '_parent' | '_top' | 'framename'
			}));
			newNavItems[newNavItems.indexOf(courseLink)] = { ...courseLink, subLinks };
			setNavItems(JSON.parse(JSON.stringify(newNavItems)));
		};

		const scrollHandler = () => {
			if (window.scrollY > 0) {
				setNavBg('bg-white shadow-navbar')
			} else {
				setNavBg('bg-lightblue')
			}
		}
		window.addEventListener('scroll', scrollHandler);
		return (window.removeEventListener('scroll', scrollHandler));
	}, [courseList])

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

							<nav className='hidden lg:flex gap-8 text-secondary'>
								{navItems.map((item, index) => {
									return (<>
										{item.subLinks?.length > 0 ? (
											<Popover
												trigger='hover'
												key={index}
											>
												<PopoverTrigger>
													<Link
														key={index}
														href={item.link}
														target={item.target}
													>
														<div className="flex gap-1 place-items-center text-left">
															<Text
																className={`font-medium relative text-secondary grid ${item.className && item.className} ${item.link === asPath && 'text-tertiary'}`}
																cursor='cursor-pointer'
															>
																{item.title}
																<span className={`${item.link === asPath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
															</Text>
															<span><GoTriangleDown /></span>
														</div>
													</Link>
												</PopoverTrigger>
												<PopoverContent>
													<PopoverBody padding={0}>
														{item.subLinks.map((item, index) => (
															<p className='py-3 hover:bg-lightblue font-semibold text-lg px-2' key={item.id}>
																<Link
																	key={index}
																	href={item.link}
																	target={item.target}
																>
																	<Text
																		className={`font-semibold relative px-3 text-secondary grid ${item.className && item.className} ${item.link === asPath && 'text-tertiary'}`}
																		cursor='cursor-pointer'
																	>
																		{item.title}
																		<span className={`${item.link === asPath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
																	</Text>
																</Link>
															</p>
														))}
													</PopoverBody>
												</PopoverContent>
											</Popover>
										) : (
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
										)}
									</>
									);
								})}
							</nav>
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
	invertColors?: boolean;
	courseList: Course[];
}

Navbar.defaultProps = {
	invertColors: false
};

export default Navbar;
