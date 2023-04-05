import { GetStaticProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'; 
import SearchBar from '@/components/common/SearchBar';
import EventList from '@/components/tap-events/EventList';
import TapEventHero from '@/components/tap-events/TapEventHero';
import SocialButtonList from '@/components/common/SocialButtonList';
import SortBy from '@/components/tap-events/SortBy';
import CourseService from '@/services/course';
import TapService from '@/services/tap-events';
import { Course } from '@/services/course/types';
import { TapEventPageInformation, TapEvent } from '@/services/tap-events/types';

const Events: NextPage<EventsProps> = ({ tapEventPageInfo, courseList }) => {
	const [q, setQ] = useState(null);
	const [sortingOrder, setSortingOrder] = useState<'ASC'|'DESC'>('DESC');
	const [_eventList, setEventList] = useState<TapEvent[]>([]);

	useEffect(() => {
		(async () => {
			let eventList = await TapService.getTapEventList('EN', '*', { start: 0, limit: 4, _q: q }, sortingOrder);
			const parsedEventList: TapEvent[] = eventList.data.map((event) => ({
				...event.attributes,
				id: event.id,
				eventImage: { url: event.attributes.eventImage?.data.attributes.url },
			}));
			setEventList(parsedEventList);
		})()
	}, [q, sortingOrder]);

	return (
		<div className='relative'>
			<Head>
				{tapEventPageInfo.metaTitle && (
					<title>{tapEventPageInfo.metaTitle}</title>
				)}
				{tapEventPageInfo.metaDescription && (
					<meta name='description' content={tapEventPageInfo.metaDescription} />
				)}
			</Head>
			<SocialButtonList />
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<TapEventHero
				headline={tapEventPageInfo.headline}
				headlineBold={tapEventPageInfo.headlineBold}
				subHeadline={tapEventPageInfo.subHeadline}
				heroImage={tapEventPageInfo.heroImage}
			/>

			<div className="flex flex-col gap-4 md:flex-row-reverse justify-between lg:place-items-center xl:w-76 mx-auto mb-4 md:mb-20">
				{/* SearchBar */}
				<SearchBar
					onChange={(e) => setQ(e.target.value)}
				/>

				{/* Categories */}
				<SortBy
					categoryList={[
						{ id: 'DESC', title: 'Descending: Date Published' },
						{ id: 'ASC', title: 'Ascending: Date Published' },
					]}
					sortingOrder={sortingOrder}
					setSortingOrder={setSortingOrder}
				/>
			</div>

			{/* Events list */}
			<EventList
				showReadMore={false}
				eventList={_eventList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type EventsProps = {
	tapEventPageInfo: TapEventPageInformation;
	eventList: TapEvent[];
	courseList: Course[];
}

export const getStaticProps: GetStaticProps = async ({
	locale
}: Record<string, any>) => {
	const tapEventPageInfo = await TapService.getTapEventPageInformation(locale, '*');
	const eventList = await TapService.getTapEventList(locale, '*', { start: 0, limit: 4, _q: '' }, 'ASC');
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			tapEventPageInfo: {
				...tapEventPageInfo?.data?.attributes,
				heroImage: tapEventPageInfo.data.attributes.heroImage?.data.attributes,
			},
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			eventList: eventList.data.map((event) => ({
				...event.attributes,
				id: event.id,
				eventImage: event.attributes.eventImage?.data.attributes,
			})),
		},
		revalidate: 60
	};
};

export default Events;