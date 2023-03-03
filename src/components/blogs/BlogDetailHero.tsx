import React from "react";
import FeaturedBlogCard from '@/components/blogs/FeaturedBlogCard';
import SocialButtonList from '@/components/common/SocialButtonList';
import { Blog } from '@/services/blogs/types';

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ headline }) => {
	return (
		<div
		>
			<div className=' md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center'>
				<h1 className='pt-20 mb-12 text-3xl lg:text-5xl font-semibold text-primary text-center'>
					{headline ?? ''}
				</h1>
			</div>
			<SocialButtonList />
		</div>
	)
};

type BlogDetailHeroProps = {
	headline: string;
};

export default BlogDetailHero;