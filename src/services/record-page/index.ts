import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getRecordPageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getRecordPageInformation, { _locale: locale, populate });
}

const RecordPageService = {
	getRecordPageInformation
};
export default RecordPageService;
