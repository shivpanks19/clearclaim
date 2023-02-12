import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { FAQ } from '@/services/course/types';

const FaqList: React.FC<FaqListProps> = ({ headline, faqList }) => {
	return (
		<div className="shadow rounded-sm mx-5 md:mx-0">
			<Accordion allowToggle className='pt-8 md:pt-11 mb-8 md:mb-0'>
				<p className="p text-xl md:text-2xl text-tertiary font-semibold text-center mb-8">
					{headline}
				</p>
				{faqList.map((faq) => (
					<AccordionItem key={faq.id}>
						{({ isExpanded }) => (
							<>
								<h2>
									<AccordionButton
										flex={1}
										justifyContent='space-between'
									>
										<Box
											as="span"
											className='ml-4 my-2'
											textAlign='left'
										>
											<p className="text-primary font-semibold md:text-xl">
												{faq.question}
											</p>
										</Box>
										<div className="flex-none">
											{isExpanded ? (
												<AiOutlineMinus fontSize='20px' />
											) : (
												<AiOutlinePlus fontSize='20px' />
											)}
										</div>
									</AccordionButton>
								</h2>
								<AccordionPanel >
									<p className="text-aphonic pt-4 pb-3 pl-5">
										{faq.answer}
									</p>
								</AccordionPanel>
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

type FaqListProps = {
	headline: string;
	faqList: FAQ[];
};

export default FaqList;
