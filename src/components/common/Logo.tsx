import React from 'react';
import Image from 'next/image';

const Logo:React.FC = () => {
	return (
		<Image 
			src='/img/logo.png'
			height={39}
			width={109}
			alt='logo'
		/>
	)
}

export default Logo;