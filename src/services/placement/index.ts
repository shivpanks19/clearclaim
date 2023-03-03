import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getPlacementList(_locale?: string, populate?: string, pageNumber?: string): Promise<Record<string, any>> {
	const paginationOptions = {
		'pagination[page]': pageNumber ?? 1,
		'pagination[pageSize]': 3,
	}
	return get(Services.getPlacementList, { _locale, populate, ...paginationOptions });
}

const PlacementService = {
	getPlacementList
};
export default PlacementService;
