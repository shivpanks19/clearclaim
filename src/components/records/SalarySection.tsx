import React from 'react';
import Image from 'next/image';
import { SalaryCardType } from '@/services/record-page/types';
import SalaryCard from '@/components/records/SalaryCard';
import SectionHeadline from '@/components/common/SectionHeadline';
import { uuid } from 'uuidv4';

const SalarySection: React.FC<SalarySectionProps> = ({
	headline,
	subHeadline,
	salaryCardList
}) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className=' mx-5'
			/>
			<div className="xl:w-76 mx-auto relative mb-12 md:mb-20 md:pt-10 cardContainer md:w-42 md:grid-cols-2 lg:grid-cols-3 md:gap-9 px-5 grid place-items-center">
				{
					salaryCardList?.length && salaryCardList.map((salaryCard) => (
						<SalaryCard
							key={uuid()}
							position={salaryCard.position}
							numberOfSalaries={salaryCard.numberOfSalaries}
							low={salaryCard.low}
							high={salaryCard.high}
							avg={salaryCard.avg}
						/>
					))
				}
			</div>
		</>
	)
};

type SalarySectionProps = {
	headline: string;
	subHeadline: string;
	salaryCardList: SalaryCardType[];
};



export default SalarySection;