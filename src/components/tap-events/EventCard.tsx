import React from 'react';
import Image from 'next/image';
import RegisterButton from '@/components/common/button/RegisterButton';
import { TapEvent } from '@/services/tap-events/types';
import formatTime from '@/utils/formatTime';
import addEllipsis from '@/utils/addEllipsis';

const EventCard: React.FC<EventCardProps> = ({
	event,
	showDescription = true
}) => {

	return (
		<div className="card rounded shadow w-full md:w-96 xl:w-76 flex flex-col lg:flex-row pt-5 md:pt-8">
			<div className="relative w-40 h-36 md:w-64 md:h-56 mb-6 md:mb-10 mx-auto">
				<Image
					src={event.eventImage?.url}
					fill
					alt='Event Image'
				/>
			</div>
			<div className="flex flex-col text px-5 pt-5 relative h-full">
				<p className="blog-heading md:text-2xl font-semibold text-title">{addEllipsis(event.eventName, 12)}</p>
				<p className="date text-sm text-aphonic mb-2">{new Date(event.eventDate).toDateString()} | {formatTime(new Date(event.eventDate))}</p>
				<div className="blog-description text-desc mb-4 grow">
					{showDescription && (
						<p className="blog-desc text-sm md:text-base">
							{event.eventDescription.split(' ').slice(0, 20).join(' ')}...
						</p>
					)}
				</div>
				<div className="flex mb-5 gap-4 place-items-center">
					<div className="w-40">
						<RegisterButton />
					</div>
					{event.totalCapacity - event.numberOfAttendees < 100 && (<p className="text-sm md:text-base font-semibold text-red-700">Only {event.totalCapacity - event.numberOfAttendees} seats left!</p>)}
				</div>
			</div>
		</div>
	)
};

type EventCardProps = {
	event: TapEvent;
	showDescription?: boolean;
};

export default EventCard;