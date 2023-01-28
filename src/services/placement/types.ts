import { Id, ImageType } from "@/utils/types";

export type Placement = {
	id: Id;
	studentName: string,
	collegeCourseName: string,
	collegeName: string,
	designation: string,
	ctc: string,
	studentImage: ImageType,
	companyImage: ImageType
};
