import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/data/staticData';
import { GrClose } from 'react-icons/gr';
import Logo from '@/components/common/Logo';
import JoinNowButton from '@/components/common/button/JoinNowButton';

const MobileViewNavbar: React.FC<MobileViewNavbarProps> = ({ navbarItems, activate, toggleNav }) => {
	const router = useRouter();
	return (
		<>
			{activate && (
				<div className='fixed top-0 left-0 w-screen h-screen bg-white z-50'>
					<Logo className='absolute left-8 top-8' />
					<div className="absolute right-3 bottom-28">
						<Image
							src='/img/girl_jump.png'
							width='187'
							height='482'
							alt='Girl Jump'
						/>
					</div>
					<GrClose className='absolute top-8 right-8' onClick={toggleNav} />
					<div className="flex flex-col gap-9 ml-7 mt-32 relative ">
						{navbarItems && navbarItems.map((navItem) => (
							<Link
								key={navItem.id}
								href={navItem.link}
							>
								<p className={`relative inline-flex justify-center font-regular text-primary ${router.asPath === navItem.link && 'text-tertiary'}`}>
									<span className='flex-none'>
										{navItem.title}
									</span>
									<div className={`absolute -bottom-2 bg-tertiary rounded ${router.asPath === navItem.link && ' w-10/12 h-2'}`}></div>
								</p>
							</Link>
						))}
					</div>
					<div className="absolute px-4 bottom-8 w-full flex place-items-center">
						<JoinNowButton />
					</div>
				</div>
			)}
		</>
	);
};

type MobileViewNavbarProps = {
	activate: boolean;
	toggleNav: () => void;
	navbarItems: Array<NavItem>;
};

export default MobileViewNavbar;
