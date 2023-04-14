import Logo from '@/components/common/Logo';
import MobileViewNavbar from '@/components/layout/MobileViewNavbar';
import { navItems as _navItems } from '@/data/staticData'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoTriangleDown } from 'react-icons/go';
/*
 * TODO: Navbar toggle view breakpoint issue investigation
 * Ideally we need `md` as view toggle break-point
 * Experienced some issues in view on `ipad-sized` devices when view toggle break-point was `md`
 * To tackle that issue view toggle break-point is set to `lg`
 * To change break-point - change all `lg:` prefixed classes to `md:` prefixed here and in MobileViewNavbar component
 */
const Navbar: React.FC<NavbarProps> = () => {
	const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
	const [navBg, setNavBg] = useState('bg-white');
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
				setNavBg('bg-white')
			}
		};
		window.addEventListener('scroll', scrollHandler, true);
		return (window.removeEventListener('scroll', scrollHandler,));
	}, []);

	return (
		<div className='sticky top-0 left-0 z-30'>
			<div className={`w-screen grid place-items-center ${navBg}`}>
				{!isMobileNavbarVisible && (
					<div className={`py-4 w-full mdxl:w-76 transition-all`}>
						<div className='flex justify-between items-center px-4'>
							{/* Desktop Screen Logo */}
							<div className='flex-shrink-0'>
								<Logo logoSize='small' href={'/'} />
							</div>

							{/* Hamburger Icon */}
							{/* <div className='-my-2 lg:hidden'>
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
							</div> */}
							<div className="flex flex-col md:flex-row justify-end lg:gap-4">
								<button className="bg-white font-medium border rounded-full py-2.5 px-4 mb-1 flex items-center gap-2"> <div className='flex-none'><Image src='/img/home/call1.png' width={16} height={16} alt='Book call' /> </div>Book FREE Consultation Call</button>
								<button className="bg-primary text-white font-medium rounded-full py-2.5 px-5 flex justify-center items-center gap-2"><div className='flex-none'><Image src='/img/pen.png' width={16} height={16} alt='Book call' /> </div>Get Experts Help</button>
							</div>

							{/* <div className='hidden lg:flex items-center justify-end'>
								<JoinNowButton className='w-full' />
							</div> */}
						</div>

						<nav className='hidden lg:flex gap-8 text-secondary flex-none'>
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
													prefetch={false}
												>
													<div className="flex gap-1 place-items-center text-left">
														<p
															className={`font-medium relative text-secondary grid ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
														>
															{item.title}
															<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
														</p>
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
																	prefetch={false}
																>
																	<p
																		className={`font-semibold relative px-3 text-secondary grid ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
																	>
																		{item.title}
																		<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
																	</p>
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
											prefetch={false}
										>
											<p
												className={`font-medium relative text-secondary grid place-items-center ${item.className && item.className} ${item.link === activePath && 'text-tertiary'}`}
											>
												{item.title}
												<span className={`${item.link === activePath && 'w-10 h-1 mx-auto rounded bg-tertiary'}`}></span>
											</p>
										</Link>
									)}
								</div>
								);
							})}
						</nav>
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
}

Navbar.defaultProps = {
	invertColors: false
};

export default Navbar;
