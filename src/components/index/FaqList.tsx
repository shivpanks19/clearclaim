import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FAQ } from '@/utils/types';

const FaqList: React.FC<FaqListProps> = ({ faqList }) => {
	const [activeFaqIndex, setActiveFaqIndex] = useState(-1);

	const toggleFaq = (index: number) => {
		if (activeFaqIndex === index) {
			setActiveFaqIndex(-1);
		} else {
			setActiveFaqIndex(index);
		}
	};

	return (
		<div className="shadow rounded-3xl mx-5 md:mx-0">
			<div className="pt-8 md:pt-11 mb-8 md:mb-0">
				
				{faqList.map((faq, index) => (
					<div key={faq.id} className="mb-4">
						<button
							className="w-full flex justify-between items-center bg-white rounded-md py-2 px-8 text-sm font-medium text-left focus:outline-none"
							onClick={() => toggleFaq(index)}
						>
							<span className="text-primary font-semibold md:text-xl mr-4">
								{faq.question}
							</span>
							<span className="flex-none">
								{activeFaqIndex === index ? (
									<FaMinus className="text-tertiary" size={24} />
								) : (
									<FaPlus className="text-tertiary" size={24} />
								)}
							</span>
						</button>
						<div className={`answer ${activeFaqIndex === index ? 'answer--active' : 'h-0'}`}>
							<p className="text-aphonic pt-4 pb-3 px-5">{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

type FaqListProps = {
	headline: string;
	faqList: FAQ[];
};

export default FaqList;
