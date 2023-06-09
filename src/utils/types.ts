export type Id = string | number

export type ImageType = {
	id: string
	name: string
	alternativeText: string
	formats: Record<string, any>
	caption: string
	width: number
	height: number
	url: string
}

export type VideoType = {
	id: string
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	url: string
}

export type BusinessPoint = {
	title: string;
	description: string;
	imgSrc: string;
}

export type FAQ = {
	id: string | number;
	question: string;
	answer: string;
}