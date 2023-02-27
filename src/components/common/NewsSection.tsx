import React from 'react';
import NewsCard from '@/components/records/NewsCard';
import SectionHeadline from '@/components/common/SectionHeadline';

const NewsSection: React.FC<NewsSectionProps> = ({
	headline,
	subHeadline
}) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-4 mx-5'
			/>
			<div className="cardContainer md:w-42 md:grid-cols-2 lg:grid-cols-3 px-5 grid md:gap-8 xl:w-76 mx-auto relative mb-5 md:mb-20 md:pt-10">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</>
	)
};

type NewsSectionProps = {
	headline: string;
	subHeadline: string;
};

export default NewsSection;