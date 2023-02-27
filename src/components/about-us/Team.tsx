import React from "react";
import Image from "next/image";
import SectionHeadline from '@/components/common/SectionHeadline';

const Team: React.FC<TeamProps> = ({ headline, subHeadline }) => {
	return (
		<>
			<SectionHeadline
				title={headline}
				subtitle={subHeadline}
				className='mb-5 lg:mb-16'
			/>
			<div className="grid gap-5 lg:gap-0 lg:grid-cols-3 xl:w-76 mx-auto mb-11 lg:mb-24">
				<div className="grid place-items-center mb-9 lg:mb-0">
					<div className="relative w-44 h-44 lg:w-56 lg:h-56 mb-2 lg:mb-3 rounded-full border-primary border-4 overflow-hidden">
						<Image
							src='/img/team_member_1.jpeg'
							fill
							alt='team_member_1'
						/>
					</div>
					<p className="text-lg lg:text-2xl text-primary">Name</p>
					<p className="text-sm lg:text-xl text-aphonic">Designation</p>
				</div>
				<div className="grid place-items-center mb-9 lg:mb-0">
					<div className="relative w-44 h-44 lg:w-56 lg:h-56 mb-2 lg:mb-3 rounded-full border-primary border-4 overflow-hidden">
						<Image
							src='/img/team_member_2.jpeg'
							fill
							alt='team_member_2'
						/>
					</div>
					<p className="text-lg lg:text-2xl text-primary">Name</p>
					<p className="text-sm lg:text-xl text-aphonic">Designation</p>
				</div>
				<div className="grid place-items-center">
					<div className="relative w-44 h-44 lg:w-56 lg:h-56 mb-2 lg:mb-3 rounded-full border-primary border-4 overflow-hidden">
						<Image
							src='/img/team_member_3.webp'
							fill
							alt='team_member_3'
						/>
					</div>
					<p className="text-lg lg:text-2xl text-primary">Name</p>
					<p className="text-sm lg:text-xl text-aphonic">Designation</p>
				</div>
			</div>
		</>

	)
};

type TeamProps = {
	headline: string;
	subHeadline: string;
};

export default Team;