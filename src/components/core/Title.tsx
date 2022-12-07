import React from "react";
import classNames from "classnames";

const Title: React.FC<TitleProps> = ({ text, className }) => {
	return (
		<p className={classNames('text-primary text-3xl font-semibold', className)}>
			{text}
		</p >
	)
};

type TitleProps = {
	text: string;
	className?: string;
};

export default Title;