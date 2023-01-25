import React from 'react';

const Footer: React.FC<FooterProps> = () => {
	return (
		<div className="tabContainer rounded xl:w-76 mx-auto h-32 bg-primary p-20 mb-20">
			<p className='text-white text-3xl'>Footer</p>
		</div>
	)
};

type FooterProps = {};

export default Footer;
