import React from "react";
import { FAQ } from '@/services/course/types';
import { uuid } from 'uuidv4';

const CourseFAQ: React.FC<CourseFAQProps> = ({ courseName, faqList }) => {
	return (
		<div className="mx-5 md:mx-auto xl:w-76">
			<h2 className="text-primary text-center text-lg md:text-3xl font-semibold mb-5 md:mb-12">
				Why
				<span className="text-tertiary">
					&nbsp;{courseName}&nbsp;
				</span>
				?
			</h2>
			<div className='grid md:grid-cols-3 mb-12 md:mb-24 gap-5'>
				{faqList?.length > 0 && faqList.map((faq) => (
					<div
						key={uuid()}
						className='mb-3'
					>
						<p className="text-lg md:text-2xl text-primary3 font-semibold border-l-4 border-tertiary pl-4 mb-2.5 ">
							{faq.question}
						</p>
						<p className='text-aphonic'>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</div>
	)
};

type CourseFAQProps = {
	courseName: string;
	faqList: FAQ[];
};

export default CourseFAQ;