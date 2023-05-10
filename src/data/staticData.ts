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

export const faqList: FAQ[] = [{ "id": 1, "question": "What will I get in this Tax+?", "answer": "You’ll get 1:1 advice from tax consultants to save up to 50% on taxes for the upcoming financial year." }, { "id": 2, "question": "Should I apply to Tax+ if my salary is just Rs. 5 lakh?", "answer": "Yes, Tax+ is for anyone whose income is taxable as per tax slabs, including those earning Rs. 5 lakhs. If you fall into this category, Tax+ is for you." }, { "id": 3, "question": "How much tax can I save through the Tax+ plan?", "answer": "f you choose Tax+ for tax planning, you can save up to 50%. We provide legal tax-saving options to maximise your savings." },{ "id": 4, "question": "I’m confused about which tax regime I should opt, will Tax+ help me?", "answer": "Yes, Tax+ will give a comprehensive comparison of your taxation considering both old and new regime align with all possible tax savings options" }, {"id": 5, "question": "I am an NRI, can you help me with my taxation in India?", "answer": "Yes, Tax+ will help you plan your taxes in India." },{"id": 6, "question": "I have some income from foreign, is Tax+ for me as well?", "answer": "Yes, with the assistance of our Tax+ expert tax consultants, we can help you plan your taxes considering your foreign income." },{"id": 7, "question": "I am an HNI, can you help me with my taxation?", "answer": "Yes, we can help you with your taxation. HNI tax planning comes under customized pricing. Default pricing (Rs. 999/-) is not applicable for HNIs. Give us a call."},{"id": 8, "question": "Is Tax+ helpful in getting a tax refund from last year?", "answer": "It comes under income tax return, and we’re introducing income tax return in Tax+ in a couple of months. "}]


export const socialMediaLinks: Record<string, string> = {

};
