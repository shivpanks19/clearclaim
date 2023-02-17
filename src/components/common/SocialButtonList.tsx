import React from "react";
import Image from "next/image";

const SocialButtonList: React.FC<SocialButtonListProps> = () => {
	return (
		<div className='hidden md:grid absolute right-5 top-56 gap-7 place-items-center'>
			<Image
				src='/img/social_youtube.png'
				height={33}
				width={33}
				alt='Youtube'
			/>
			<Image
				src='/img/social_instagram.png'
				height={33}
				width={33}
				alt='Instagram'
			/>
			<Image
				src='/img/social_facebook.png'
				height={33}
				width={33}
				alt='Facebook'
			/>
			<p className='text-primary font-medium rotate-180 z-20' style={{ writingMode: 'vertical-lr' }}>Find us on</p>
		</div>
	);
};

type SocialButtonListProps = {

};

export default SocialButtonList;