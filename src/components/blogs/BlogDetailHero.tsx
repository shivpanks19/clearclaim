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
				<h1 className='pt-20 mb-6 text-3xl lg:text-5xl font-semibold text-primary'>
					{headline ?? ''}
				</h1>
				<div className="blogDetails flex justify-between text-desc mb-12">
					<div className="details flex gap-3 place-items-center">
						<p className='text-tertiary font-medium'>{contentCategory.title}</p>
						<p>|</p>
						<p className='flex gap-2 place-items-center'><span><Image src='/img/clock.png' width={22} height={22} alt='Reading Time' /></span>{readingTime} Min Read</p>
						<p>|</p>
						<p>{new Date(publishedAt).toDateString()}</p>
					</div>
					<div className="share flex gap-4 place-items-center mr-3">
						<p className="font-medium text-title">Share with: </p>
						<Image src='/img/share_fb.svg' width={36} height={36} alt='Share on Faccebook' />
						<Image src='/img/share_ig.svg' width={36} height={36} alt='Share on Instagram' />
						<Image src='/img/share_linkedin.svg' width={36} height={36} alt='Share on Linkedin' />
					</div>
				</div>
				<div className="relative w-96 lg:w-216 lg:h-134 mb-21">
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