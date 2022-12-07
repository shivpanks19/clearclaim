import React, { ReactElement } from "react";

const Col2: React.FC<Col2Props> = ({ children }) => {
	return (
		<div className="grid cols-2">
			{children}
		</div>
	)
};

type Col2Props = {
	children: ReactElement;
};

export default Col2;