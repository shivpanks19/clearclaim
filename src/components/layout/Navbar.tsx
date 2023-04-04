import Logo from '@/components/common/Logo';
import MobileViewNavbar from '@/components/layout/MobileViewNavbar';
import JoinNowButton from '@/components/common/button/JoinNowButton';
import { navItems as _navItems } from '@/data/staticData'
import Text from '@/elements/Text';
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
	const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
	const [navBg, setNavBg] = useState('bg-lightblue');
	const [navItems, setNavItems] = useState(_navItems);
	const [showPopover, setShowPopover] = useState(false);
	const [activePath, setActivePath] = useState('');

	const toggleNavbar = () => {
		if (isMobileNavbarVisible) {
			setIsMobileNavbarVisible(false);
		} else {
			setIsMobileNavbarVisible(true);
		}
	};

	const handleMouseEnter = () => {
		setShowPopover(true);
	}

	const handleMouseLeave = () => {
		setShowPopover(false);
	}

	useEffect(() => {
		if (window)
			setActivePath(window.location.pathname)
	}, [])

	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 0) {
				setNavBg('bg-white shadow-navbar')
			} else {
				setNavBg('bg-lightblue')
			}
		};
		window.addEventListener('scroll', scrollHandler, true);
		return (window.removeEventListener('scroll', scrollHandler,));
	}, []);

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
	}, [courseList])

	return (
		<div className='sticky top-0 left-0 z-30'>
			<div className={`w-screen grid place-items-center ${navBg}`}>
				{!isMobileNavbarVisible && (
					<div className={`py-4 w-full mdxl:w-76 transition-all`}>
						<div className='flex justify-between items-center pl-4 pr-6'>
							{/* Desktop Screen Logo */}
							<div className='flex-shrink-0'>
								<Logo logoSize='small' href={'/'} />
							</div>

							{/* Hamburger Icon */}
							<div className='-my-2 lg:hidden'>
								<div
									className='rounded-md p-2 inline-flex items-center justify-center
									hover:text-gray-500 focus:outline-none'
									onClick={toggleNavbar}
								>
									<span className='sr-only'>
										Open Menu
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
									return (<div key={item.id}>
										{item.subLinks?.length > 0 ? (
											<div
												key={index}
												className='relative'
											>
												<div
													onMouseEnter={handleMouseEnter}
													onMouseLeave={handleMouseLeave}
												>
													<Link
														key={index}
														href={item.link}
														target={item.target}
													>
														<div className="flex gap-1 place-items-center text-left">
															<Text
																className={`font-medium relative text-secondary grid ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
																cursor='cursor-pointer'
															>
																{item.title}
																<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
															</Text>
															<span><GoTriangleDown /></span>
														</div>
													</Link>
												</div>
												{showPopover && (
													<div
														className='pt-10 absolute left-0 top-3'
														onMouseEnter={handleMouseEnter}
														onMouseLeave={handleMouseLeave}
													>
														<div className='w-72 bg-white rounded shadow'>
															{item.subLinks.map((item, index) => (
																<p className='py-3 font-semibold text-lg px-2' key={item.id}>
																	<Link
																		key={index}
																		href={item.link}
																		target={item.target}
																	>
																		<Text
																			className={`font-semibold relative px-3 text-secondary grid ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
																			cursor='cursor-pointer'
																		>
																			{item.title}
																			<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
																		</Text>
																	</Link>
																</p>
															))}
														</div>
													</div>
												)}
											</div>
										) : (
											<Link
												key={index}
												href={item.link}
												target={item.target}
											>
												<Text
													className={`font-medium relative text-secondary grid place-items-center ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
													cursor='cursor-pointer'
												>
													{item.title}
													<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
												</Text>
											</Link>
										)}
									</div>
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
