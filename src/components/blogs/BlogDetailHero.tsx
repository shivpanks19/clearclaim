import React from "react";
import Image from "next/image";
import FeaturedBlogCard from '@/components/blogs/FeaturedBlogCard';
import SocialButtonList from '@/components/common/SocialButtonList';
import { Blog, ContentCategory } from '@/services/blogs/types';
import { ImageType } from "@/utils/types";

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ headline, heroImage, contentCategory, readingTime, publishedAt }) => {
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
							<Image src='/img/share_fb.svg' width={36} height={36} alt='Share on Faccebook' />
						</div>
						<div className="relative w-5 h-5 lg:w-9 lg:h-9">
							<Image src='/img/share_ig.svg' width={36} height={36} alt='Share on Instagram' />
						</div>
						<div className="relative w-5 h-5 lg:w-9 lg:h-9">
							<Image src='/img/share_linkedin.svg' width={36} height={36} alt='Share on Linkedin' />
						</div>
					</div>
				</div>
				<div className="relative w-72 h-52 sm:w-96 sm:h-80 lg:w-216 lg:h-134 mb-10 lg:mb-21 mx-auto">
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
			<SocialButtonList />
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