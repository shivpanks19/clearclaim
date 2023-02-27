// import { toast } from 'react-hot-toast';
import { ImageSetAnimationDetail } from '@/data/types';
import { Id } from '@/utils/types';

export const contactUsFormLink = '/contact-us';

export type NavItem = {
	id: Id
	title: string
	link: string
	target: '_blank' | '_self' | '_parent' | '_top' | 'framename'
	className?: string,
	subLinks?: NavItem[]
}
export const navItems: Array<NavItem> = [
	{ id: 1, title: 'Courses', link: '/courses', target: '_self' },
	{ id: 2, title: 'About Us', link: '/about-us', target: '_self' },
	{ id: 3, title: 'Records', link: '/records', target: '_self' },
	{ id: 4, title: 'Reviews', link: '/student-reviews', target: '_self' },
	{ id: 5, title: 'Drives', link: '/upcoming-drives', target: '_self' },
	{ id: 6, title: 'Contact Us', link: '/contact-us', target: '_self' },
	{ id: 7, title: 'Blogs', link: '/blogs', target: '_self' }
];

// export const comingSoonHandler = (navItem: NavItem): void => {
// 	if (!navItem.link || navItem.link === '#') {
// 		toast.success('Coming Soon...', { duration: 2000 });
// 	}
// };

export const humanRiverData: Array<ImageSetAnimationDetail> = [
	{
		src: '/img/home/heroHuman.png',
		level: 1,
		speed: 9
	},
	{
		src: '/img/home/heroHuman.png',
		level: 1,
		speed: 9
	},
	{
		src: '/img/home/heroHuman.png',
		level: 1,
		speed: 9
	},
	{
		src: '/img/home/heroHuman.png',
		level: 1,
		speed: 9
	},
	{
		src: '/img/home/heroHuman.png',
		level: 2,
		speed: 15
	},
	{
		src: '/img/home/heroHuman.png',
		level: 2,
		speed: 15
	},
	{
		src: '/img/home/heroHuman.png',
		level: 2,
		speed: 15
	},
	{
		src: '/img/home/heroHuman.png',
		level: 2,
		speed: 15
	},
	{
		src: '/img/home/heroHuman.png',
		level: 2,
		speed: 15
	},
	{
		src: '/img/home/heroHuman.png',
		level: 3,
		speed: 20
	},
	{
		src: '/img/home/heroHuman.png',
		level: 3,
		speed: 20
	},
	{
		src: '/img/home/heroHuman.png',
		level: 3,
		speed: 20
	},
	{
		src: '/img/home/heroHuman.png',
		level: 3,
		speed: 20
	},
	{
		src: '/img/home/heroHuman.png',
		level: 3,
		speed: 20
	}
];


export const socialMediaLinks: Record<string, string> = {

};
