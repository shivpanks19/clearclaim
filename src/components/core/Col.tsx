import React, { ReactElement } from "react";

const Col: React.FC<ColProps> = ({ children, className }) => {
	return (
		<div className={className}>
			{children}
		</div>
	)
};

type ColProps = {
	children: ReactElement | ReactElement[];
	className?: string;
};

export default Col;