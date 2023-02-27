import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getAboutUsInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getAboutUsInformation, { _locale: locale, populate });
}

const AboutUsService = {
	getAboutUsInformation
};
export default AboutUsService;
