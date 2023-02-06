import { get, post } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function postContactUsForm(formData: Record<string, any>, locale?: string): Promise<Record<string, any>> {
	return post(Services.postContactUsForm, {}, { locale, data: formData });
};

const ContactUsService = {
	postContactUsForm
};
export default ContactUsService;
