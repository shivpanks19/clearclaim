import React from "react";
import Image from 'next/image';
import { Blog, ContentCategory } from '@/services/blogs/types';
import Rating from "@/components/common/Rating";
import CategoryFilter from '@/components/blogs/CategoryFilter';
import PrevNextPost from '@/components/blogs/PrevNextPost';
import { marked } from 'marked';

const BlogBody: React.FC<BlogBodyProps> = ({ headline, content, categoryList }) => {
	const body = marked.parse(content);
	return (
		<div className="container w-96 lg:w-216 mb-12">
			<div className="tableOfContents"></div>
			<div className='prose max-w-none mb-12' dangerouslySetInnerHTML={{ __html: body }}></div>
			<hr className='mb-8' />
			<div className="flex justify-between">
				<div className="rating">
					<p className="text-primary font-medium mb-4">Rate our Content</p>
					<Rating rating={5} large />
				</div>
				<div className="actions flex place-items-end gap-9">
					<div className="grid place-items-center">
						<Image
							src='/img/like.png'
							width={37}
							height={37}
							alt='Like'
						/>
						<p className="font-medium text-primary text-sm">Like</p>
					</div>
					<div className="grid place-items-center">
						<Image
							src='/img/comment.png'
							width={32}
							height={32}
							alt='Comment'
						/>
						<p className="font-medium text-primary text-sm">Comment</p>
					</div>
				</div>
			</div>

		</div >
	)
};

type BlogBodyProps = {
	headline: string;
	content: string;
	categoryList: ContentCategory[];
};

export default BlogBody;