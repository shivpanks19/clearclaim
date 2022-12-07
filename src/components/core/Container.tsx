
import classNames from "classnames";
import React, { ReactElement } from "react";

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={classNames('md:w-76 mx-auto', className)}>
			{children}
		</div>

	)
};

type ContainerProps = {
	children: ReactElement | ReactElement[];
	className?: string;
};

export default Container;