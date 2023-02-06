import { Id, ImageType } from '@/utils/types';

export type ContentCategory = {
	id: Id;
	title: string;
	slug: string;
};

export type Blog = {
	id: Id;
	title: string;
	slug: string;
	author: string;
	description: string;
	thumbnail: ImageType;
	contentCategory: ContentCategory;
	content: string;
	readingTime: number;
	recommendedBlogs: Array<Blog>;
	createdAt: Date;
	updatedAt: Date;
};
export type TBlogListPageData = {
	id: Id;
	createdAt: string;
	updatedAt: string;
};
