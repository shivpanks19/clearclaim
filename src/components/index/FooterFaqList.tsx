import React from 'react';
import Image from "next/image";
import SectionHeadline from '@/components/common/SectionHeadline';
import FaqList from '@/components/index/FaqList';
import { FAQ } from '@/utils/types';

const FooterFaqList: React.FC<FooterFaqListProps> = ({ headline, faqList }) => {
	return (
		<div className='pt-10'>
			<a id='faqs' />
			<SectionHeadline
				title={headline}
				className='mb-4 md:mb-10 mx-5'
			/>
			<div className='grid md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center md:grid-cols-2'>
				<div className='flex flex-col mb-8 relative w-67 h-48 lg:w-136 lg:h-98 mx-auto'>
					<Image
						src='/img/home/faq.png'
						fill
						alt='Hero Image'
					/>
				</div>
				<div className="">
					{(faqList?.length > 0) && (
						<div className='mb-12'>

							{faqList?.length > 0 && (
								<FaqList
									headline='About Course'
									faqList={faqList}
								/>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

type FooterFaqListProps = {
	headline: string;
	faqList: FAQ[];
};

export default FooterFaqList;
