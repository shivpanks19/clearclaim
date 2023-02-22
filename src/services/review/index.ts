import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getReviewList(_locale?: string, populate?: string, pageNumber?: string): Promise<Record<string, any>> {
	const paginationOptions = {
		'pagination[page]': pageNumber ?? 1,
		'pagination[pageSize]': 2,
	}
	return get(Services.getReviewList, { _locale, populate, ...paginationOptions });
}

const ReviewService = {
	getReviewList
};
export default ReviewService;
