import React from "react";
import SectionHeadline from '@/components/common/SectionHeadline';
import MiniBlogCard from '@/components/blogs/MiniBlogCard';
import { Blog } from '@/services/blogs/types';

const MiniBlogList: React.FC<MiniBlogListProps> = ({ blogList, numberOfBlogs = blogList.length }) => {
	return (
		<div className='mb-10 md:mb-28 mx-auto gap-7 '>
			<SectionHeadline
				title='Recommended Posts'
				subtitle=''
				className='mb-11'
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
				{blogList?.length > 0 &&
					blogList.slice(0, numberOfBlogs).map((blog) => (
						<MiniBlogCard
							key={blog.id}
							blogName={blog.title}
							heroImage={blog.thumbnail}
							contentCategory={blog.contentCategory}
							slug={blog.slug}
							publishedAt={blog.publishedAt}
						/>
					))
				}
			</div>
		</div>
	)
};

type MiniBlogListProps = {
	blogList: Blog[];
	numberOfBlogs?: number;
};

export default MiniBlogList;
