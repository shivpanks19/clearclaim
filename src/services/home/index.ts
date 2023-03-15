import { get, post } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getHomePageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getHomePageInformation, { _locale: locale, populate });
}

function getInTouch(email: string): Promise<void> {
	return post(Services.getInTouch, {}, { email });
}

const HomeService = {
	getHomePageInformation,
	getInTouch
};
export default HomeService;
