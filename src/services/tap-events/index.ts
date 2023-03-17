import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

type GetEventsParams = {
	start: number;
	limit: number;
	latest: boolean;
	_q: string;
	content_category_eq: string;
	featured_eq: boolean;
};

function getTapEventPageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getTapEventPageInformation, { _locale: locale, populate });
}

function getTapEventList(_locale?: string, populate?: string, params?: Partial<GetEventsParams>, sortingOrder?: 'ASC' | 'DESC'): Promise<Record<string, any>> {
	return get(Services.getTapEventList, {
		_locale,
		populate,
		_start: params?.start,
		_limit: params?.limit,
		_sort: params?.latest ? 'updated_at:desc' : undefined,
		_q: params?._q,
		searchFields: ['eventName', 'eventDescription'],
		sort: [sortingOrder === 'ASC' ? 'eventName': 'eventName:desc']
	});
}
const TapEventService = {
	getTapEventPageInformation,
	getTapEventList
};
export default TapEventService;
