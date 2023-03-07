import React from "react";
import BlogCard from '@/components/blogs/BlogCard';
import { Blog } from '@/services/blogs/types';

const BlogList: React.FC<BlogListProps> = ({ blogList, numberOfBlogs }) => {
	return (
		<div className='mb-3 md:mb-28 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 xl:w-76'>
			{blogList?.length > 0 && (
				numberOfBlogs ? blogList.slice(0, numberOfBlogs).map((blog) => (
					<BlogCard
						key={blog.id}
						blogName={blog.title}
						description={blog.description}
						slug={blog.slug}
						contentCategory={blog.contentCategory}
						heroImage={blog.thumbnail.url}
						publishedAt={blog.publishedAt}
					/>
				)) : (
					blogList.map((blog) => (
						<BlogCard
							key={blog.id}
							blogName={blog.title}
							description={blog.description}
							slug={blog.slug}
							contentCategory={blog.contentCategory}
							heroImage={blog.thumbnail.url}
							publishedAt={blog.publishedAt}
						/>
					))
				)
			)}
		</div>
	)
};

type BlogListProps = {
	blogList: Blog[];
	numberOfBlogs: number;
};

export default BlogList;
