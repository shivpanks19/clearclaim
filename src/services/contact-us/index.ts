import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getContactUsInformation(locale?: string): Promise<Record<string, any>> {
	return get(Services.getContactUsInformation, { _locale: locale });
};

const ContactUsService = {
	getContactUsInformation
};
export default ContactUsService;
