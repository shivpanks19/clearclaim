import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getStudentReviewPageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getStudentReviewPageInformation, { _locale: locale, populate });
}

const StudentReviewPageService = {
	getStudentReviewPageInformation
};
export default StudentReviewPageService;
