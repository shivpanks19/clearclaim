import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SectionHeadline from '@/components/common/SectionHeadline';
import { ImageType } from "@/utils/types";

const Team: React.FC<TeamProps> = ({ headline, subHeadline, teamPics }) => {
	return (
		<div className='mb-11 lg:mb-24'>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-5 lg:mb-16'
			/>
			<div className="xl:w-76 mx-auto mb-6">
				<Splide options={{
					perPage: 3,
					breakpoints: {
						1200: { perPage: 2 },
						400: { perPage: 1 }
					},
					autoplay: true,
					rewind: true
				}} aria-label="Team Members">
					{teamPics?.length > 0 && teamPics.map((pic) => (
						<>
							<SplideSlide key={pic.id}>
								<div className="grid place-items-center mb-9">
									<div className="relative w-44 h-44 lg:w-56 lg:h-56 mb-2 lg:mb-3 rounded-full border-primary border-4 overflow-hidden">
										<Image
											src={pic.formats.small.url}
											fill
											alt='team_member_1'
										/>
									</div>
									<p className="text-lg lg:text-2xl text-primary">{pic.caption?.split(',')[0]}</p>
									<p className="text-sm lg:text-xl text-aphonic">{pic.caption?.split(',')[1]}</p>
								</div>
							</SplideSlide>
						</>
					))}
				</Splide>
			</div>
		</div>
	);
};

type TeamProps = {
	headline: string;
	subHeadline: string;
	teamPics: ImageType[],
};

export default Team;