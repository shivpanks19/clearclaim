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
	contentCategoryId: Id;
};

function getBlogsStaticData(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getBlogsPageStaticData, { _locale: locale, populate });
}

function getBlogs(_locale?: string, populate?: string, params?: Partial<GetBlogsParams>): Promise<Record<string, any>> {
	const contentCategory = params?.contentCategoryId
	const queryParams = {
		_locale,
		populate,
		_start: params?.start,
		_limit: params?.limit,
		_sort: 'updated_at:desc',
		_q: params?._q ?? '',
		searchFields: ['title', 'description'],
	}
	if (contentCategory)
		queryParams['contentCategory'] = contentCategory
	return get(Services.getBlogs, queryParams);
}

function getBlogById(id: Id, _locale?: string): Promise<Blog> {
	const url = `${Services.getBlog}/${id}`;
	return get(url, { _locale });
}

function getBlogBySlug(slug: string, _locale?: string, populate?: string): Promise<any> {
	const url = `${Services.getBlog}/${slug}`;
	return get(url, { _locale, populate });
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
