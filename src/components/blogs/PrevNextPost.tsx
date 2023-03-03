import React from "react";
import FeaturedBlogCard from '@/components/blogs/FeaturedBlogCard';
import SocialButtonList from '@/components/common/SocialButtonList';
import { Blog, ContentCategory } from '@/services/blogs/types';
import Rating from "@/components/common/Rating";
import BlogCard from '@/components/blogs/BlogCard';

const PrevNextPost: React.FC<PrevNextPostProps> = ({ blogList }) => {
	return (
		<div className="grid lg:grid-cols-2 gap-16">
			{blogList?.length > 0 && blogList.slice(0, 2).map((blog) => (
				<BlogCard
					key={blog.id}
					blogName={blog.title}
					showDescription={false}
					description={blog.description}
					slug={blog.slug}
					contentCategory={blog.contentCategory}
					heroImage={blog.thumbnail.url}
					publishedAt={blog.publishedAt}
				/>
			))}
		</div>
	)
};

type PrevNextPostProps = {
	blogList: Blog[];
};

export default PrevNextPost;