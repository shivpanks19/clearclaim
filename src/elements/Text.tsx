import React from 'react';
import classNames from 'classnames';
import {
	Cursor,
	FontSize,
	FontStyle,
	FontWeight,
	TextAlign,
	TextVariant
} from '@/utils/stylePropTypes';

const Text: React.FC<TextProps> = ({
	children,
	span,
	className,
	fontStyle,
	fontSize,
	fontWeight,
	align,
	variant,
	decoration,
	transform,
	cursor,
	style = {}
}) => {
	const classes = classNames(
		fontStyle,
		fontSize,
		fontWeight,
		align,
		variant,
		decoration,
		transform,
		cursor,
		...className.split(' ')
	);

	if (span) {
		return (
			<span
				className={classes}
				style={style}
			>
				{children}
			</span>
		);
	}
	return (
		<div
			className={classes}
			style={style}
		>
			{children}
		</div>
	);
};

type TextProps = {
	children: any;
	className?: string
	span?: boolean
	fontStyle?: FontStyle
	fontSize?: FontSize
	fontWeight?: FontWeight
	align?: TextAlign
	variant?: TextVariant
	decoration?: 'no-underline' | 'underline' | 'line-through'
	transform?: 'normal-case' | 'uppercase' | 'lowercase' | 'capitalize'
	cursor?: Cursor
	style?: any
}

Text.defaultProps = {
	className: '',
	span: false,
	fontSize: 'text-base',
	fontWeight: 'font-normal'
};

export default Text;
