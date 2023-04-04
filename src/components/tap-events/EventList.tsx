import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EventCard from '@/components/tap-events/EventCard';
import { TapEvent } from '@/services/tap-events/types';
import Pagination from '@/components/common/Pagination';
import Routes from '@/utils/routes';

const EventList: React.FC<EventListProps> = ({ eventList, showReadMore = true }) => {
	const [currentList, setCurrentList] = useState([]);

	return (
		<div className='mb-16 lg:mb-32'>
			<div className="xl:w-76 mx-auto relative pt-10 mb-4">
				{showReadMore && (
					<div className='read_more absolute right-5 top-0 flex gap-3 align-middle'>
						<Link href={Routes.studentReviews()}>
							<p className="text-tertiary">See more events</p>
						</Link>
						<Image
							src='/img/arrow_right_blue.png'
							width={20}
							height={20}
							alt='Right arrow'
						/>
					</div>
				)}

				<div className="cardContainer w-42 md:w-80 xl:w-76 gap-14 grid px-5 md:mx-auto place-items-center">
					{currentList?.length > 0 && currentList.map((event) => (
						<EventCard
							key={event.id}
							event={event}
						/>
					))}
				</div>
			</div>
			<Pagination
				fullList={eventList}
				pageSize={3}
				setCurrentList={setCurrentList}
			/>
		</div>
	)
};

type EventListProps = {
	eventList: TapEvent[];
	showReadMore?: boolean;
};

export default EventList;