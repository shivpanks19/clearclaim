import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { Blog } from '@/services/blogs/types';

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ featuredBlog }) => {
	return (
		<div className='flex grow xl:w-256 shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col md:flex-row justify-evenly'>
			<Image
				src='/img/featured_blog.png'
				className='flex-none'
				height={371}
				width={437}
				sizes='(min-width: 768px) 300px,
						256px'
				alt='Blog thumbnail'
			/>
			<div className="flex flex-col text px-6">
				<p className="blog-heading md:text-2xl lg:text-4xl font-semibold text-title mb-3 mt-6">{featuredBlog.title}</p>
				<div className="blog-description text-desc mb-3">
					<p className="blog-desc text-sm md:text-base">
						{featuredBlog.description}
					</p>
				</div>
				<div className="flex justify-between mb-6">
					<div className="date text-desc2">{new Date(featuredBlog.publishedAt).toDateString()}</div>
					<div className="readMore text-tertiary font-regular">Read more &rarr;</div>
				</div>
			</div>
		</div>
	)
};

type FeaturedBlogCardProps = {
	featuredBlog: Blog;
};

export default FeaturedBlogCard;