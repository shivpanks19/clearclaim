const Services = {
	getHomePageInformation: 'home',
	getCourseListPageInformation: 'course-list-page',
	getCourseDetailPageInformation: 'course-detail-page',
	getContactUsInformation: 'contact-us-page',
	getStudentReviewPageInformation: 'student-review-page',
	getRecordPageInformation: 'record-page',
	getCourseList: 'courses',
	getPlacementList: 'placements',
	getReviewList: 'reviews',
	getRecruiterList: 'recruiters',
	getFaqList: 'faq',
	postContactUsForm: 'enquiries',
	postRegistrationForm: 'students',

	getClientTestimonials: 'testimonials',
	getTeamMembers: 'team-members',
	getInTouch: 'home/get-in-touch',
	subscribe: 'subscribers',

	getClientServices: 'services',
	getClientServicesCategories: 'service-categories',
	getServicePageStaticData: 'service-page-list-data',

	getAboutUsSections: 'about-us',

	getBlogs: 'blogs',
	getBlog: 'blogs',
	getBlogsCount: 'blogs/count',
	getBlogsPageStaticData: 'blog-list-page',


	getBlogCategories: 'content-categories',
	sendContactQuery: 'contact-us',
	reqQoute: 'quotes',

	getProducts: 'products',
	getProductHeader: 'product-header',

	getPortfolios: 'portfolios',
	getPortfolio: 'portfolios',
	getPortfolioCount: 'portfolios/count',
	getPortfolioCategories: 'portfolio-categories',
	getPortfolioStaticData: 'portfolio-list-page-data'
} as const;

export default Services;
