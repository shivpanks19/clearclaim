import React from 'react';

const CorporateProgramNav: React.FC<CorporateProgramNavProps> = () => {
	return (
		<div className="tabContainer rounded w-full bg-light">
			<div className="tabLine flex justify-between">
				<div className="tab flex-1 p-5">a</div>
				<div className="tab flex-1 p-5">b</div>
				<div className="tab flex-1 p-5">c</div>
			</div>
			<div className="tabView h-96">
				asd
			</div>
		</div>
	)
};

type CorporateProgramNavProps = {};

export default CorporateProgramNav;
