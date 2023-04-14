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
			<div className={`relative w-16 h-8 lg:w-64 lg:h-16`}>
				<Link href={href}>
					<Image
						src={path()}
						fill
						style={{objectFit: 'contain'}}
						alt='logo'
					/>
				</Link >
			</div>
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
