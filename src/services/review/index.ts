import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getReviewList(_locale?: string, populate?: string, pageNumber?: string): Promise<Record<string, any>> {
	return get(Services.getReviewList, { _locale, populate });
}

const ReviewService = {
	getReviewList
};
export default ReviewService;
