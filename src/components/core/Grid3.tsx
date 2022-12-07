import classNames from "classnames";
import React, { ReactElement } from "react";

const Grid3: React.FC<Grid3Props> = ({ className, children, gap = 8 }) => {
	return (
		<div className={classNames(`grid grid-cols-3 gap-${gap}`, className)}>
			{children}
		</div>
	)
};

type Grid3Props = {
	children: ReactElement | ReactElement[];
	gap?: number;
	className?: string;
};

export default Grid3;