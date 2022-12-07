import React, { ReactElement } from "react";

const HeroBg: React.FC<HeroBgProps> = ({ children }) => {
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			{children}
		</div>
	)
};

type HeroBgProps = {
	children: ReactElement | ReactElement[];
};

export default HeroBg;