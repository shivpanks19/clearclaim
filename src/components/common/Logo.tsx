import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Images from '@/utils/images';
import classNames from 'classnames';

const Logo: React.FC<LogoProps> = ({ className, href, variant, logoSize }) => {
	const path = (): string => {
		switch (variant) {
			case 'light':
				return Images.logoLight;
			case 'dark':
				return Images.logoDark;
		}
	};

	return (
		<div className={classNames('cursor-pointer', ...className.split(' '))}>
			<Link href={href} legacyBehavior passHref>
				<a>
					<div className={`relative ${logoSize === 'small' && 'w-24 h-8'} ${logoSize === 'large' && 'w-32 h-9'}`}>
						<Image
							src={path()}
							fill
							alt='logo'
						/>
					</div>
				</a>
			</Link >
		</div >
	);
};

type LogoProps = {
	className?: string,
	href?: string;
	variant?: 'light' | 'dark';
	logoSize?: 'small' | 'large';
};

Logo.defaultProps = {
	className: '',
	href: '/',
	variant: 'light',
	logoSize: 'small'
};

export default Logo;
