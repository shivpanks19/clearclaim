import { Id, ImageType } from "@/utils/types";

export type Review = {
	id: Id;
	studentName: string;
	designation: string;
	companyName: string;
	ctc: number;
	reviewText: string;
	rating: number;
	studentImage: ImageType;
};
