import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames';
import Routes from '@/utils/routes';
import { ContentCategory } from '@/services/blogs/types';

const BlogCard: React.FC<BlogCardProps> = ({ blogName, showDescription = true, description, contentCategory, slug, heroImage, publishedAt }) => {
	return (
		<div className='flex shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col w-99'>
			<div className="relative flex-none w-99 h-72">
				<Image
					src={heroImage}
					fill
					alt='Blog thumbnail'
				/>
			</div>
			<div className="flex flex-col text px-5 pt-5 relative h-full">
				<p className="blog-heading md:text-2xl font-semibold text-title mb-2">{blogName}</p>
				<div className="blog-description text-desc mb-4 grow">
					{showDescription && (
						<p className="blog-desc text-sm md:text-base">
							{description}
						</p>
					)}
				</div>
				<div className="flex justify-between mb-5">
					<div className="date text-aphonic">{new Date(publishedAt).toDateString()}</div>
					<Link href={Routes.blog(contentCategory, slug)}>
						<div className="readMore text-tertiary font-regular">Read more 	&rarr;</div>
					</Link>
				</div>
			</div>
		</div>
	)
};

type BlogCardProps = {
	blogName: string;
	showDescription?: boolean;
	description: string;
	contentCategory: ContentCategory;
	slug: string;
	heroImage: string;
	publishedAt: Date;
};

export default BlogCard;