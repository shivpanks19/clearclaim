import { Blog, ContentCategory } from '@/services/blogs/types';
import { UrlObject } from 'url';

const contactUs = (): UrlObject => {
	return {
		pathname: '/contact-us'
	};
};

const blogs = (page?: number, _q?: string, contentCategoryId?: number): UrlObject => {
	return {
		pathname: '/blogs',
		query: { page, _q, contentCategory: contentCategoryId }
	}
};

const aboutUs = (): UrlObject => {
	return {
		pathname: '/about-us'
	};
};

const courses = (): UrlObject => {
	return {
		pathname: '/courses'
	};
};

const courseDetail = (slug: string): UrlObject => {
	return {
		pathname: `/courses/${slug}`
	};
};

const records = (): UrlObject => {
	return {
		pathname: '/records'
	};
};

const events = (page?: number, _q?: string): UrlObject => {
	return {
		pathname: '/events',
		query: { page, _q }
	}
};

const studentReviews = (): UrlObject => {
	return {
		pathname: '/student-reviews'
	};
};

const blogsByCategory = (category: ContentCategory, page?: number): UrlObject => {
	return {
		pathname: `/blogs/${category.slug}`,
		...(page && { query: { page } })
	};
};

const blog = (category: ContentCategory, slug: string): UrlObject => {
	return {
		pathname: `/blogs/${category.slug}/${slug}`
	};
};

const privacyPolicy = (page?: number): UrlObject => {
	return {
		pathname: '/privacy-policy',
		query: { page }
	};
};

const Routes = {
	contactUs,
	aboutUs,
	blogs,
	courses,
	courseDetail,
	records,
	events,
	studentReviews,
	blogsByCategory,
	blog,
	privacyPolicy
};

export default Routes;
