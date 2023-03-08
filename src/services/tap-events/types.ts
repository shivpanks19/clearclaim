import { Id, ImageType } from "@/utils/types";

export type TapEventPageInformation = {
	headline: string;
	headlineBold: string;
	subHeadline: string;
	driveHeadline: string;
	driveSubHeadline: string;
	heroImage: ImageType;
};

export type TapEvent = {
	id: Id;
	eventName: string;
	eventDescription: string;
	eventDate: Date;
	numberOfAttendees: number;
	totalCapacity: number;
	eventImage: ImageType;
}