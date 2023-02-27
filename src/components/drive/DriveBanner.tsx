import React from 'react';

const DriveBanner: React.FC<DriveBannerProps> = ({
}) => {
	return (
		<div className="px-5">
			<div className="p-5 lg:p-14 xl:w-76 mx-auto bg-tertiaryLight mb-16 lg:mb-24">
				<p className="text-primary text-xl lg:text-5xl font-semibold mb-5 lg:mb-14 w-10/12 lg:w-7/12">Finding your dream job
					is just a Tap away</p>
				<button className="bg-tertiary rounded text-white text-sm lg:text-xl font-semibold px-5 py-3">APPLY NOW</button>
			</div>
		</div>
	)
};

type DriveBannerProps = {
};

export default DriveBanner;