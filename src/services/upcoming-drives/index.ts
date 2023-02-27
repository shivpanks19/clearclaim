import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';


function getDrivePageInformation(locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getDrivePageInformation, { _locale: locale, populate });
}

function getDriveList(_locale?: string, populate?: string, pageNumber?: string): Promise<Record<string, any>> {
	const paginationOptions = {
		'pagination[page]': pageNumber ?? 1,
		'pagination[pageSize]': 9,
	}
	return get(Services.getDriveList, { _locale, populate, ...paginationOptions });
}

const DriveService = {
	getDrivePageInformation,
	getDriveList
};
export default DriveService;
