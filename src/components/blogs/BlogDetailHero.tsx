import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentCategory } from '@/services/blogs/types';
import { ImageType } from "@/utils/types";

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ headline, heroImage, contentCategory, readingTime, publishedAt }) => {
	const [url, setUrl] = useState('');
	useEffect(() => {
		if (window)
			setUrl(window.location.href)
	}, [])
	return (
		<>
			<div>
				<h1 className='pt-14 lg:pt-20 mb-6 text-2xl lg:text-5xl font-semibold text-primary'>
					{headline ?? ''}
				</h1>
				<div className="blogDetails flex justify-between text-desc mb-9 lg:mb-12 border-t lg:border-t-0">
					<div className="details flex gap-1.5 lg:gap-3 place-items-center">
						<p className='text-tertiary font-medium text-xs lg:text-base'>{contentCategory.title}</p>
						<p>|</p>
						<p className='flex gap-1 lg:gap-2 place-items-center text-xxs lg:text-base'><span className="relative w-4 h-4 lg:w-5 md:h-5"><Image src='/img/clock.png' fill alt='Reading Time' /></span>{readingTime} Min Read</p>
						<p>|</p>
						<p className=" text-xxs lg:text-base">{new Date(publishedAt).toDateString()}</p>
					</div>
					<div className="share flex gap-1.5 lg:gap-4 place-items-center mr-3">
						<p className="font-medium text-title text-xxs lg:text-base hidden lg:block">Share with: </p>
						<div className="relative w-5 h-5 lg:w-9 lg:h-9">
							<Link
								href={`https://www.facebook.com/sharer.php?u=${url}`}
								target='_blank'
							>

								<Image src='/img/share_fb.svg' width={36} height={36} alt='Share on Facebook' />
							</Link>
						</div>
						<div className="relative w-5 h-5 lg:w-9 lg:h-9 bg-[#0D87D4] rounded-full grid place-items-center">
							<Link
								href={`https://twitter.com/intent/tweet
								?url=${url}
								&text=${headline}
								&hashtags=${contentCategory.title}`}
								target='_blank'
							>
								<Image src='/img/twitter_white.svg' width={25} height={25} alt='Share on Twitter' style={{objectFit: 'contain'}}/>
							</Link>
						</div>
						<div className="relative w-5 h-5 lg:w-9 lg:h-9">
							<Link
								href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
								target='_blank'
							>
								<Image src='/img/share_linkedin.svg' width={36} height={36} alt='Share on Linkedin' />
							</Link>
						</div>
					</div>
				</div>
				<div className="relative w-72 h-52 sm:w-96 sm:h-80 lg:w-216 lg:h-136 mb-10 lg:mb-21 mx-auto">
					<Image
						src={heroImage.url}
						fill
						sizes='(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						33vw'
						alt='Blog Hero'
					/>
				</div>
			</div>
		</>
	)
};

type BlogDetailHeroProps = {
	headline: string;
	heroImage: ImageType;
	contentCategory: ContentCategory;
	readingTime: number;
	publishedAt: Date;
};

export default BlogDetailHero;