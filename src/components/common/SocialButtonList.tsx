import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialButtonList: React.FC<SocialButtonListProps> = () => {
	return (
		<div className='hidden md:grid absolute right-5 top-56 gap-7 place-items-center'>
			<Link href='https://www.youtube.com/channel/UCvT21bzLRHrnAc-F1SRqRSw' target='_blank'>
				<Image
					src='/img/social_youtube.png'
					height={33}
					width={33}
					alt='Youtube'
				/>
			</Link>
			<Link href='https://instagram.com/tapacademy.online?igshid=NTdlMDg3MTY=' target='_blank'>
				<Image
					src='/img/social_instagram.png'
					height={33}
					width={33}
					alt='Instagram'
				/>
			</Link>
			<Link href='https://www.facebook.com/thetapacademy' target='_blank'>
				<Image
					src='/img/social_facebook.png'
					height={33}
					width={33}
					alt='Facebook'
				/>
			</Link>
			<p className='text-primary font-medium rotate-180 z-20' style={{ writingMode: 'vertical-lr' }}>Find us on</p>
		</div>
	);
};

type SocialButtonListProps = {

};

export default SocialButtonList;