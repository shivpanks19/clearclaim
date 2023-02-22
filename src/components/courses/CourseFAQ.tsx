import React, { useRef } from "react";
import { FAQ } from '@/services/course/types';
import { uuid } from 'uuidv4';
import styl from '@/styles/courseFAQ.module.scss';

const CourseFAQ: React.FC<CourseFAQProps> = ({ courseName, faqList }) => {
	const activeCard = useRef(0);

	const handleMouseEnter = (idx) => {
		activeCard.current = idx;
		const cards = document.querySelectorAll('.courseFaqCard');
		cards[idx].classList.add(styl.activeCard);
		if ([1, 2].includes(activeCard.current)) {
			cards[0].classList.remove(styl.activeCard);
		}
	};

	const handleMouseLeave = (idx) => {
		const cards = document.querySelectorAll('.courseFaqCard');
		cards[idx].classList.remove(styl.activeCard);
		if ([1, 2].includes(activeCard.current)) {
			activeCard.current = 0;
			cards[0].classList.add(styl.activeCard);
		}
	};

	const getCardClass = (idx) => {
		if (activeCard.current === idx) {
			return styl.activeCard
		};
		return ''
	};

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
						className={`courseFaqCard ${styl.faqcard} ${getCardClass(idx)}`}
						onMouseEnter={() => handleMouseEnter(idx)}
						onMouseLeave={() => handleMouseLeave(idx)}
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