import React from "react";
import FeaturedBlogCard from '@/components/blogs/FeaturedBlogCard';
import { Blog } from '@/services/blogs/types';

const BlogListHero: React.FC<BlogListHeroProps> = ({ headline, featuredBlog }) => {
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className=' md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center'>
				<h1 className='pt-20 mb-12 text-3xl lg:text-5xl font-semibold text-primary text-center'>
					{headline ?? ''} &#128071;
				</h1>
				<FeaturedBlogCard featuredBlog={featuredBlog} />
			</div>
		</div>
	)
};

type BlogListHeroProps = {
	headline: string;
	featuredBlog: Blog;
};

export default BlogListHero;