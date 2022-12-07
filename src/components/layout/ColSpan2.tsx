import React, { ReactElement } from "react";

const ColSpan2: React.FC<Grid3Props> = ({ children }) => {
	return (
		<div className='col-span-2'>
			{children}
		</div>
	)
};

type Grid3Props = {
	children: ReactElement | ReactElement[];
};

export default ColSpan2;