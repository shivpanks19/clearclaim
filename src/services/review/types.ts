import { Id, ImageType } from "@/utils/types";

export type Review = {
	id: Id;
	customerName: string;
	planName: string;
	reviewText: string;
	customerImage?: ImageType;
};
