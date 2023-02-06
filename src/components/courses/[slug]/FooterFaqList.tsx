import React from 'react';
import SectionHeadline from '@/components/common/SectionHeadline';
import FaqList from '@/components/courses/[slug]/FaqList';
import { FAQ } from '@/services/course/types';

const FooterFaqList: React.FC<FooterFaqListProps> = ({ headline, subHeadline, faqList1, faqList2 }) => {
	return (
		<>
			{(faqList1?.length > 0 || faqList2?.length > 0) && (
				<div className='mb-12'>
					<SectionHeadline
						title={headline}
						subtitle={subHeadline}
						className='mb-4 md:mb-10 mx-5'
					/>
					<div className="md:grid md:grid-cols-2 gap-4 xl:w-76 mx-auto">
						{faqList1?.length > 0 && (
							<FaqList
								headline='About Course'
								faqList={faqList1}
							/>
						)}
						{faqList2?.length > 0 && (
							<FaqList
								headline='Course Impact'
								faqList={faqList2}
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
};

type FooterFaqListProps = {
	headline: string;
	subHeadline: string;
	faqList1: FAQ[];
	faqList2: FAQ[];
};

export default FooterFaqList;
