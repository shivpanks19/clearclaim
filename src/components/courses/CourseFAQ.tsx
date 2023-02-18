import React from "react";
import { FAQ } from '@/services/course/types';
import { uuid } from 'uuidv4';
import styl from '@/styles/courseFAQ.module.scss';

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
			<div className={styl.faqContainer}>
				{faqList?.length > 0 && faqList.map((faq, idx) => (
					<div
						key={uuid()}
						className={styl.faqcard}
						style={{
							transition: 'width 0.5s'
						}}
					>
						<div className={styl.question}>
							<p className={styl.questionNumber}>Q{idx + 1}</p>
							<p className={styl.questionText}>
								{faq.question}
							</p>
							<p className={styl.questionText2}>
								{faq.question}
							</p>
						</div>
						<p className={styl.answer}>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</div >
	)
};

type CourseFAQProps = {
	courseName: string;
	faqList: FAQ[];
};

export default CourseFAQ;