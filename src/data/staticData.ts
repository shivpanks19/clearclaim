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
	{ id: 7, title: 'Blogs', link: '/blogs', target: '_self' },
	{ id: 8, title: 'Events', link: '/events', target: '_self' }
];

// export const comingSoonHandler = (navItem: NavItem): void => {
// 	if (!navItem.link || navItem.link === '#') {
// 		toast.success('Coming Soon...', { duration: 2000 });
// 	}
// };

export const humanRiverData: Array<ImageSetAnimationDetail> = [
	{
		src: '/img/riverImages/adarsh.jpg',
		level: 1,
		speed: 9
	},
	{
		src: '/img/riverImages/kashmira.jpg',
		level: 1,
		speed: 9
	},
	{
		src: '/img/riverImages/nikitha.jpeg',
		level: 1,
		speed: 9
	},
	{
		src: '/img/riverImages/niva.jpeg',
		level: 1,
		speed: 9
	},
	{
		src: '/img/riverImages/omer.jpg',
		level: 2,
		speed: 15
	},
	{
		src: '/img/riverImages/rahul.jpg',
		level: 2,
		speed: 15
	},
	{
		src: '/img/riverImages/raja.jpeg',
		level: 2,
		speed: 15
	},
	{
		src: '/img/riverImages/saptarishi.jpeg',
		level: 2,
		speed: 15
	},
	{
		src: '/img/riverImages/shameem.jpg',
		level: 2,
		speed: 15
	},
	{
		src: '/img/riverImages/shashank.jpeg',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/siva.jpg',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/swapnil.jpg',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/tejas.png',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/venkatesh.jpg',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/vinaykumar.jpg',
		level: 3,
		speed: 20
	},
	{
		src: '/img/riverImages/yasmeen.jpg',
		level: 3,
		speed: 20
	}
];


export const socialMediaLinks: Record<string, string> = {

};
