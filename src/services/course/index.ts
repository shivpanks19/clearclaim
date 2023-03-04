import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getCourseListPageInformation(locale?: string): Promise<Record<string, any>> {
	return get(Services.getCourseListPageInformation, { _locale: locale });
}

function getCourseDetailPageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getCourseDetailPageInformation, { _locale: locale, populate });
}

function getCourseList(_locale?: string, populate?: string, sort?: string): Promise<Record<string, any>> {
	return get(Services.getCourseList, { _locale, populate, sort });
}

function getCourseBySlug(slug: string, _locale?: string): Promise<Record<string, any>> {
	const url = `${Services.getCourseList}/${slug}`;
	return get(url, { _locale });
}

const CourseListPageService = {
	getCourseListPageInformation,
	getCourseDetailPageInformation,
	getCourseList,
	getCourseBySlug
};
export default CourseListPageService;
