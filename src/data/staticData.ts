// import { toast } from 'react-hot-toast';

export const contactUsFormLink = '/contact-us';

export type NavItem = {
	title: string
	link: string
	target: '_blank' | '_self' | '_parent' | '_top' | 'framename'
	className?: string
}
export const navItems: Array<NavItem> = [
	{ title: 'Courses', link: '/courses', target: '_self' },
	{ title: 'Placement', link: '/placements', target: '_self' },
	{ title: 'Student Reviews', link: '/student-reviews', target: '_self' },
	{ title: 'Contact Us', link: '/contact-us', target: '_self' },
	{ title: 'Blogs', link: '/blogs', target: '_self' }
];

// export const comingSoonHandler = (navItem: NavItem): void => {
// 	if (!navItem.link || navItem.link === '#') {
// 		toast.success('Coming Soon...', { duration: 2000 });
// 	}
// };


export const socialMediaLinks: Record<string, string> = {
	
};
