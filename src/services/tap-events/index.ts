import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';


function getTapEventPageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getTapEventPageInformation, { _locale: locale, populate });
}

function getTapEventList(_locale?: string, populate?: string, pageNumber?: string): Promise<Record<string, any>> {
	const paginationOptions = {
		'pagination[page]': pageNumber ?? 1,
		'pagination[pageSize]': 9,
	}
	return get(Services.getTapEventList, { _locale, populate, ...paginationOptions });
}

const TapEventService = {
	getTapEventPageInformation,
	getTapEventList
};
export default TapEventService;
