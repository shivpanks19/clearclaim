import { ImageType } from '@/utils/types';

export type HomePageInformation = {
	headline: string,
	subHeadline: string,
	metaTitle: string,
	metaDescription: string,
	studentsTrained: number,
	workshopsConducted: number,
	placementDrives: number,
	nextBatchDate: Date,
	videoURL: string,
	demoVideoHeadline: string,
	demoVideoSubHeadline: string,
	courseHeadline: string,
	courseSubHeadline: string,
	specialSectionHeadline: string,
	specialSectionSubHeadline: string,
	achievementHeadline: string,
	achievementSubHeadline: string,
	reviewHeadline: string,
	reviewSubHeadline: string,
	whyUsHeadline: string,
	whyUsSubHeadline: string,
	recruiterHeadline: string,
	recruiterSubHeadline: string,
	recognitionHeadline: string,
	recognitionSubHeadline: string,
	riverImages: ImageType[]
	riverImagesLv2: ImageType[]
	riverImagesLv3: ImageType[]
	corporateProgramPics: ImageType[]
};
