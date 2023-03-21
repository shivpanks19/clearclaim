import React, { useState } from "react";
import Image from "next/image";
import SectionHeadline from '@/components/common/SectionHeadline';
import { ImageType } from "@/utils/types";
import Pagination from '@/components/common/Pagination';

const Team: React.FC<TeamProps> = ({ headline, subHeadline, teamPics }) => {
	const [currentList, setCurrentList] = useState([]);

	return (
		<div className='mb-11 lg:mb-24'>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-5 lg:mb-16'
			/>
			<div className="grid gap-5 lg:gap-0 lg:grid-cols-4 xl:w-76 mx-auto mb-6">
				{currentList?.length > 0 && currentList.map((pic) => (<>
					<div className="grid place-items-center mb-9 lg:mb-0">
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
				</>
				))}
			</div>
			<Pagination
				fullList={teamPics}
				pageSize={4}
				autoScroll={3000}
				setCurrentList={setCurrentList}
			/>
		</div>
	);
};

type TeamProps = {
	headline: string;
	subHeadline: string;
	teamPics: ImageType[],
};

export default Team;