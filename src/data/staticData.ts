import { FAQ } from '@/utils/types';
import { Review } from '@/services/review/types';
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
	// { id: 1, title: 'Courses', link: '/courses', target: '_self' },

];

export const reviewList: Review[] = [{ "id": 1, "customerName": "John Doe", "planName": "Suraksha+", "reviewText": "I have been using this service for a few months now and I am very satisfied. The investment advice has been very helpful and the claim management process is very smooth." }, { "id": 2, "customerName": "Jane Smith", "planName": "Claim+", "reviewText": "I had to file a claim recently and the process was very easy. The team was very helpful and responsive throughout the process. Highly recommended!" }, { "id": 3, "customerName": "David Lee", "planName": "Suraksha+", "reviewText": "I have been using this service for over a year and I can't imagine managing my investments without it. The advice has helped me grow my portfolio significantly and the team is always available to answer any questions I have." }, { "id": 4, "customerName": "Lisa Hernandez", "planName": "Claim+", "reviewText": "I had to file a claim recently and I was impressed with how quickly it was processed. The team was very professional and kept me informed every step of the way." }, { "id": 5, "customerName": "Mark Wilson", "planName": "Suraksha+", "reviewText": "I was hesitant to invest with this service at first, but I'm glad I did. The advice has been very helpful and my portfolio has grown significantly as a result. Highly recommend!" }]

export const faqList: FAQ[] = [{ "id": 1, "question": "What is the difference between Suraksha+ and Claim+?", "answer": "Suraksha+ is our investment advice service, while Claim+ is our claim management service. Suraksha+ is designed to help you make informed investment decisions and grow your portfolio, while Claim+ is designed to help you file and manage claims with ease." }, { "id": 2, "question": "How does your investment advice service work?", "answer": "Our investment advice service, Suraksha+, is designed to help you make informed investment decisions. We offer personalized investment recommendations based on your investment goals, risk tolerance, and other factors. Our team of experienced advisors can help you create a diversified investment portfolio that is tailored to your needs." }, { "id": 3, "question": "How do I file a claim with your claim management service?", "answer": "Filing a claim with our claim management service, Claim+, is easy. Simply log in to your account and fill out the online claim form. Once we receive your claim, our team will review it and guide you through the claims process. We strive to make the claims process as smooth and hassle-free as possible." }]


export const socialMediaLinks: Record<string, string> = {

};
