import { Id, ImageType } from "@/utils/types";

export type UpcomingDrivesInformation = {
	headline: string;
	subHeadline: string;
	driveHeadline: string;
	driveSubHeadline: string;
	heroImage: ImageType;
	conductedDrives: number;
	upcomingDrives: number;
};

export type Drive = {
	id: Id;
	position: string;
	company: string;
	location: string;
	date: Date;
	ctc: number;
	numberOfApplicants: number;
	numberOfApplicantsSelected: number;
	driveImage: ImageType;
}