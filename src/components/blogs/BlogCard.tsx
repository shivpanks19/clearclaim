import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames';

const BlogCard: React.FC<BlogCardProps> = ({ blogName, description, slug, heroImage, publishedAt }) => {
	return (
		<div className='flex shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col justify-evenly'>
			<div className={
				classNames({
					'mb-3': true
				})
			}
			>
				<Image
					src={heroImage}
					className='flex-none'
					height={243}
					width={392}
					alt='Blog thumbnail'
				/>
				<div className="flex flex-col text px-5 pt-5">
					<p className="blog-heading md:text-2xl font-semibold text-title mb-2">{blogName}</p>
					<div className="blog-description text-desc mb-4">
						<p className="blog-desc text-sm md:text-base">
							{description}
						</p>
					</div>
					<div className="flex justify-between mb-5">
						<div className="date text-aphonic">{new Date(publishedAt).toDateString()}</div>
						<div className="readMore text-tertiary font-regular">Read more 	&rarr;</div>
					</div>
				</div>
			</div>
		</div>
	)
};

type BlogCardProps = {
	blogName: string;
	description: string;
	slug: string;
	heroImage: string;
	publishedAt: Date;
};

export default BlogCard;