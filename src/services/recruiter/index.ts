import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getRecruiterList(_locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getRecruiterList, { _locale, populate });
}

const RecruiterService = {
	getRecruiterList
};
export default RecruiterService;
