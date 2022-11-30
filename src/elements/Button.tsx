import React from 'react';
import classNames from 'classnames';
import { BackgroundVariant, Rounded, Shadow } from '@/utils/stylePropTypes';
import styl from '@/styles/Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, className, buttonStyleClass, type, variant, shadow, rounded, onClick, onSubmit }) => {
	return (
		<button
			className={classNames(variant, shadow, rounded, `${styl[buttonStyleClass]}`, ...className.split(' '))}
			type={type}
			onClick={onClick}
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				onSubmit(event);
			}}
		>
			{children}
		</button>
	);
};

type ButtonProps = {
	children: any;
	className?: string;
	buttonStyleClass?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: BackgroundVariant;
	shadow?: Shadow;
	rounded?: Rounded;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
	className: '',
	type: 'button',
	variant: 'bg-primary'
};

export default Button;
