import { post } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function postRegistrationForm(formData: Record<string, any>, locale?: string): Promise<Record<string, any>> {
	return post(Services.postRegistrationForm, {}, { locale, data: formData });
};

const RegistrationService = {
	postRegistrationForm
};
export default RegistrationService;
