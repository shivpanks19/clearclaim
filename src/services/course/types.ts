import { Id, ImageType } from "@/utils/types";

export type CourseListPageInformation = {
	headline1: string,
	headline2: string,
	subHeadline: string,
	courseHeadline: string,
	courseSubHeadline: string,
	whyUsHeadline: string,
	whyUsSubHeadline: string,
	reviewHeadline: string,
	reviewSubHeadline: string,
};

export type CourseDetailPageInformation = {
	headline1: string,
	headline2: string,
	subHeadline: string,
	achievementHeadline: string,
	achievementSubHeadline: string,
	whyUsHeadline: string,
	whyUsSubHeadline: string,
	studentsTrained: number,
	workshopsConducted: number,
	placementDrives: number,
};

export type Course = {
	id: Id;
	courseName: string;
	description: string;
	price: number;
	numberOfStudents: number;
	slug: string;
	aboutCourse: string;
	courseSummary: string[];
	courseFAQ: FAQ[];
	isFree: boolean;
	heroImage: Record<string, Array<Record<string, ImageType>>>;
}

export type FAQ = {
	id: Id;
	question: string;
	answer: string;
}