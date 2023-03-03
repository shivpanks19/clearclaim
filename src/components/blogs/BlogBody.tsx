import React from "react";
import { Blog, ContentCategory } from '@/services/blogs/types';
import Rating from "@/components/common/Rating";
import CategoryFilter from '@/components/blogs/CategoryFilter';
import PrevNextPost from '@/components/blogs/PrevNextPost';
import { marked } from 'marked';

const BlogBody: React.FC<BlogBodyProps> = ({ headline, content, categoryList }) => {
	const body = marked.parse(content);
	return (
		<div className="container">
			<div className="grid grid-cols-5 gap-16 xl:w-76 mx-auto">
				<div className="col-span-4">
					<div className="tableOfContents"></div>
					<div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: body }}></div>
					<div className="ratingAndActions"><Rating /></div>
				</div>
				<div className="rightCol">
					<div className="featuredCourse"></div>
					<div className="recommendedBlogs"></div>
				</div>
			</div >
		</div >
	)
};

type BlogBodyProps = {
	headline: string;
	content: string;
	categoryList: ContentCategory[];
};

export default BlogBody;