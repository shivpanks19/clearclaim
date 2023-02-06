import { Blog, ContentCategory, TBlogListPageData } from '@/services/blogs/types';
import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';
import { Id } from '@/utils/types';

type GetBlogsParams = {
	start: number;
	limit: number;
	latest: boolean;
	contentCategory: Id;
};

function getBlogsStaticData(): Promise<TBlogListPageData> {
	return get(Services.getBlogsPageStaticData);
}

function getBlogs(_locale?: string, params?: Partial<GetBlogsParams>): Promise<Array<Blog>> {
	return get(Services.getBlogs, {
		_locale,
		_start: params?.start,
		_limit: params?.limit,
		_sort: params?.latest ? 'updated_at:desc' : undefined,
		contentCategory: params?.contentCategory
	});
}

function getBlogById(id: Id, _locale?: string): Promise<Blog> {
	const url = `${Services.getBlog}/${id}`;
	return get(url, { _locale });
}

function getBlogBySlug(slug: string, _locale?: string): Promise<Blog> {
	const url = `${Services.getBlog}/${slug}`;
	return get(url, { _locale });
}

function getBlogsCount(contentCategory?: Id): Promise<number> {
	return get(Services.getBlogsCount, { contentCategory });
}

function getBlogCategories(_locale?: string): Promise<Array<ContentCategory>> {
	return get(Services.getBlogCategories, { _locale });
}

const BlogsService = {
	getBlogs,
	getBlogById,
	getBlogBySlug,
	getBlogsCount,
	getBlogCategories,
	getBlogsStaticData
};

export default BlogsService;
