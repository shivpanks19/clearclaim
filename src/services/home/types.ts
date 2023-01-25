import { Id, ImageType } from '@/utils/types';

export type FooterTop = {
	question: string,
	buttonLabel: string
}

export type HomePageInformation = {
	headline: string,
	subHeadline: string,
	footerTop: FooterTop
};

export type ClientOrganisation = {
	id: Id,
	name: string,
	logo: ImageType
};

export type Testimonial = {
	id: Id,
	author: string,
	designation: string,
	content: string,
	organisation: ClientOrganisation
};
