import React from "react";
import Image from 'next/image';
import { ContentCategory } from '@/services/blogs/types';
import Rating from "@/components/common/Rating";
import { marked } from 'marked';

const BlogBody: React.FC<BlogBodyProps> = ({ content }) => {
	const body = marked.parse(content);
	return (
		<div className="container lg:w-216 mb-9 md:mb-12">
			<div className='prose prose-sm md:prose-base max-w-none mb-4 md:mb-12' dangerouslySetInnerHTML={{ __html: body }}></div>
			<hr className='mb-8 w-72 md:w-full' />
			<div className="flex justify-between pr-5">
				<div className="rating">
					<p className="text-primary font-medium mb-4 hidden md:block">Rate our Content</p>
					<Rating rating={5} className='large' />
				</div>
				<div className="actions flex place-items-end gap-9">
					<div className="grid place-items-center">
						<div className="relative w-6 h-6 md:w-9 h-9">
							<Image
								src='/img/like.png'
								fill
								alt='Like'
							/>
						</div>
						<p className="font-medium text-primary text-xxs md:text-sm">Like</p>
					</div>
					<div className="grid place-items-center">
						<div className="relative w-6 h-6 md:w-9 h-9">
							<Image
								src='/img/comment.png'
								fill
								alt='Comment'
							/>
						</div>
						<p className="font-medium text-primary text-xxs md:text-sm">Comment</p>
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