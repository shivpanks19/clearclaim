import { ImageType } from "@/utils/types";

export type AboutPageInformation = {
	headline: string,
	subHeadline: string,
	newsHeadline: string,
	newsSubHeadline: string,
	heroImage: ImageType,
	lifeAtTapHeadline: string,
	lifeAtTapSubHeadline: string,
	lifeAtTapImage: ImageType,
	teamPics: ImageType[],
	founderWordHeadline: string,
	founderWordSubHeadline: string,
	founderImage: ImageType,
	recognitionHeadline: string,
	recognitionSubHeadline: string,
	teamHeadline: string,
	teamSubHeadline: string,
};
