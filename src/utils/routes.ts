import { Blog, ContentCategory } from '@/services/blogs/types';
import { UrlObject } from 'url';

const contactUs = (): UrlObject => {
	return {
		pathname: '/contact-us'
	};
};

const blogs = (page?: number): UrlObject => {
	return {
		pathname: '/blogs',
		query: { page }
	};
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

const records = (): UrlObject => {
	return {
		pathname: '/records'
	};
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

const blog = (category: ContentCategory, blog: Blog): UrlObject => {
	return {
		pathname: `/blogs/${category.slug}/${blog.slug}`
	};
};

const portfolios = (page?: number): UrlObject => {
	return {
		pathname: '/portfolio',
		query: { page }
	};
};

const Routes = {
	contactUs,
	aboutUs,
	blogs,
	courses,
	records,
	studentReviews,
	blogsByCategory,
	blog,
	portfolios
};

export default Routes;
