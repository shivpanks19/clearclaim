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
			<Link href={href}>
				<Image
					src={path()}
					height={39}
					width={109}
					alt='logo'
				/>
			</Link>
		</div>
	);
};

type LogoProps = {
	className?: string,
	href?: string;
	variant?: 'light' | 'dark';
	logoSize?: string
};

Logo.defaultProps = {
	className: '',
	href: '/',
	variant: 'light',
	logoSize: 'h-16 lg:h-14'
};

export default Logo;
