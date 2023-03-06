import { get } from '@/services/serverConfig';
import Services from '@/services/serviceUrls';

function getPlacementList(_locale?: string, populate?: string): Promise<Record<string, any>> {
	return get(Services.getPlacementList, { _locale, populate });
}

const PlacementService = {
	getPlacementList
};
export default PlacementService;
