import React, { useEffect, useState } from "react";
import { FAQ } from '@/services/course/types';
import { uuid } from 'uuidv4';
import debounce from 'lodash.debounce';
import classNames from "classnames";

const CourseFAQ: React.FC<CourseFAQProps> = ({ courseName, faqList }) => {
	const bgList = ['bg-tertiary', 'bg-tertiary', 'bg-tertiary', 'bg-primary', 'bg-secondary'];
	let activeIdx = 0;
	const isActive = (idx) => {
		return idx === activeIdx;
	};
	console.log('rerender');

	const handleHover = (idx) => {
		console.log('active', idx)
		activeIdx = idx;
	};

	// useEffect(() => {
	// 	const cards = document.querySelectorAll('.faqcard');
	// 	console.log('card', cards);
	// 	cards.forEach((card) => {
	// 		card.addEventListener('mouseenter', handleHover);
	// 	});
	// 	return (
	// 		cards.forEach((card) => {
	// 			card.removeEventListener('mouseenter', handleHover);
	// 		})
	// 	)
	// }, [])

	return (
		<div className="mx-5 md:mx-auto xl:w-76">
			<h2 className="text-primary text-center text-lg md:text-3xl font-semibold mb-5 md:mb-12">
				Why
				<span className="text-tertiary">
					&nbsp;{courseName}&nbsp;
				</span>
				?
			</h2>
			<div className='flex justify-between px-5 mb-12 md:mb-24 gap-5 h-96 w-full xl:w-76 transition-all max-w-76'>
				{faqList?.length > 0 && faqList.map((faq, idx) => (
					<div
						key={uuid()}
						// className={classNames(bgList[idx], {
						// 	'faqcard mb-3 pt-6 px-12 rounded': true,
						// 	'grow w-76': activeIdx === idx,
						// 	'flex-none w-52': activeIdx !== idx
						// })}
						className={`
							faqcard mb-3 pt-6 px-12 rounded hover:grow hover:w-6/12
							${bgList[idx]} 
							${activeIdx === idx ? ' grow w-6/12' : ''}
							${activeIdx !== idx ? ' flex-none w-32' : ''}
						`}
						onMouseEnter={() => handleHover(idx)}
						style={{
							transition: 'width 2s'
						}}

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