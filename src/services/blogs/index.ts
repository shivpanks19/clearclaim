import { Blog } from '@/services/blogs/types';
import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';
import { Id } from '@/utils/types';

type GetBlogsParams = {
	start: number;
	limit: number;
	latest: boolean;
	_q: string;
	content_category_eq: string;
	featured_eq: boolean;
	contentCategory: Id;
};

function getBlogsStaticData(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getBlogsPageStaticData, { _locale: locale, populate });
}

function getBlogs(_locale?: string, populate?: string, params?: Partial<GetBlogsParams>): Promise<Record<string, any>> {
	return get(Services.getBlogs, {
		_locale,
		populate,
		_start: params?.start,
		_limit: params?.limit,
		_sort: params?.latest ? 'updated_at:desc' : undefined,
		_q: params?._q,
		searchFields: ['title', 'description'],
		contentCategory: params?.contentCategory
	});
}

function getBlogById(id: Id, _locale?: string): Promise<Blog> {
	const url = `${Services.getBlog}/${id}`;
	return get(url, { _locale });
}

function getBlogBySlug(slug: string, _locale?: string): Promise<any> {
	const url = `${Services.getBlog}/${slug}`;
	return get(url, { _locale });
}

function getBlogsCount(contentCategory?: Id): Promise<number> {
	return get(Services.getBlogsCount, { contentCategory });
}

function getBlogCategories(_locale?: string): Promise<Record<string, any>> {
	return get(Services.getBlogCategories, { _locale });
}

const BlogService = {
	getBlogs,
	getBlogById,
	getBlogBySlug,
	getBlogsCount,
	getBlogCategories,
	getBlogsStaticData
};

export default BlogService;
