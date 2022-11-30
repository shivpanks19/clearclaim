import { Blog, ContentCategory } from '@/services/blogs/types';
import { Service } from '@/services/clientServices/types';
import { Portfolio, PortfolioCategory } from '@/services/portfolio/types';
import { UrlObject } from 'url';

const contactUs = ( ): UrlObject => {
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

const portfoliosByCategory = (category: PortfolioCategory, page?: number): UrlObject => {
	return {
		pathname: `/portfolio/${category.slug}`,
		...(page && { query: { page } })
	};
};

const portfolio = (category: ContentCategory, portfolio: Portfolio): UrlObject => {
	return {
		pathname: `/portfolio/${category.slug}/${portfolio.slug}`
	};
};

const serviceRoute = (service: Service): UrlObject => {
	return {
		pathname: `/services/${service.slug}`
	};
};
const Routes = {
	contactUs,
	blogs,
	blogsByCategory,
	blog,
	portfolios,
	portfoliosByCategory,
	portfolio,
	serviceRoute
};

export default Routes;
