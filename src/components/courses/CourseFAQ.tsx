import React, { useEffect, useState } from "react";
import { FAQ } from '@/services/course/types';
import { uuid } from 'uuidv4';
import debounce from 'lodash.debounce';
import classNames from "classnames";

const CourseFAQ: React.FC<CourseFAQProps> = ({ courseName, faqList }) => {
	const [activeIdx, setActiveIdx] = useState(0);
	const bgList = ['bg-tertiary', 'bg-tertiary', 'bg-tertiary', 'bg-primary', 'bg-secondary'];

	const isActive = (idx) => {
		return idx === activeIdx;
	};

	const handleHover = debounce((e) => {
		console.log('actieve', e)
		setActiveIdx(0);
	}, 200);

	useEffect(() => {
		const cards = document.querySelectorAll('.faqcard');
		cards.forEach((card) => {
			card.addEventListener('hover', handleHover);
		});
		return (
			cards.forEach((card) => {
				card.removeEventListener('hover', handleHover);
			})
		)
	}, [])

	return (
		<div className="mx-5 md:mx-auto xl:w-76">
			<h2 className="text-primary text-center text-lg md:text-3xl font-semibold mb-5 md:mb-12">
				Why
				<span className="text-tertiary">
					&nbsp;{courseName}&nbsp;
				</span>
				?
			</h2>
			<div className='flex justify-between px-5 mb-12 md:mb-24 gap-5 h-96'>
				{faqList?.length > 0 && faqList.map((faq, idx) => (
					<div
						key={uuid()}
						// className={classNames(bgList[idx], {
						// 	'faqcard mb-3 pt-6 px-12 w-52 transition-all rounded': true,
						// 	'w-full': isActive(idx)
						// })}
						className={
							`faqcard mb-3 pt-6 px-12 w-52 transition-all rounded hover:w-full ${bgList[idx]}`
						}

					>
						<div className="flex place-items-center mb-3">
							<p className="text-price-yellow font-extrabold text-4xl lg:text-7xl">Q{idx + 1}</p>
							<p className="text-lg md:text-2xl font-semibold pl-4 mb-2.5 text-white ">
								{faq.question}
							</p>
						</div>
						<p className='text-white hover:block'>
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