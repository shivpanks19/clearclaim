import { AxiosError } from 'axios';
import { get, post } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';
import { formatErrorMesage } from '@/utils/helper';

function getHomePageInformation(locale?: string): Promise<Record<string, any>> {
	return get(Services.getHomePageInformation, { _locale: locale });
}

function getInTouch(email: string): Promise<void> {
	return post(Services.getInTouch, {}, { email });
}

function subscribe(email: string): Promise<string> {
	return post(Services.subscribe, {}, { email })
		.then(() => 'Thank you for subscribing us!')
		.catch((error: AxiosError) => {
			if (error.response.status === 422) {
				throw 'You have already subscribed!';
			}
			else {
				const message = formatErrorMesage(error);
				throw message || 'Something went wrong! Please try again!';
			}
		});
}

const HomeService = {
	getHomePageInformation,
	getInTouch,
	subscribe
};
export default HomeService;
