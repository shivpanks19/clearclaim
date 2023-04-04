import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialButtonList: React.FC<SocialButtonListProps> = () => {
	return (
		<div className='hidden md:grid w-16 sticky left-full top-56 gap-7 z-50 place-items-center h-0 '>
			<Link href='https://www.youtube.com/channel/UCvT21bzLRHrnAc-F1SRqRSw' target='_blank'>
				<div className="bg-none hover:bg-blue-100 transition-all text-white font-bold p-2 rounded-full relative group">
					<Image
						src='/img/social_youtube.png'
						height={33}
						width={33}
						alt='Youtube'
					/>
				</div>
			</Link>
			<Link href='https://www.instagram.com/tapacademy_online/' target='_blank'>
				<div className="bg-none hover:bg-blue-100 transition-all text-white font-bold p-2 rounded-full relative group">
					<Image
						src='/img/social_instagram.png'
						height={33}
						width={33}
						alt='Instagram'
					/>
				</div>
			</Link>
			<Link href='https://www.facebook.com/thetapacademy' target='_blank'>
				<div className="bg-none hover:bg-blue-100 transition-all text-white font-bold p-2 rounded-full relative group">
					<Image
						src='/img/social_facebook.png'
						height={33}
						width={33}
						alt='Facebook'
					/>
				</div>
			</Link>
			<p className='text-primary font-medium rotate-180 h-24 z-20' style={{ writingMode: 'vertical-lr' }}>Find us on</p>
		</div>
	);
};

type SocialButtonListProps = {

};

export default SocialButtonList;