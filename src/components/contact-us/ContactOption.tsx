import React from "react";
import Image from "next/image";
import GMap from '@/components/contact/GMap';

const ContactOptionSection: React.FC<ContactOptionSectionProps> = () => {
	return (
		<div className='flex flex-col xl:w-76 px-5 mx-auto md:mb-24'>
			<h1 className="font-semibold md:text-3xl mb-4 md:mb-14 text-primary">
				Contact Options
			</h1>
			<div className="grid lg:grid-cols-3 md:gap-14">
				<div className="address flex flex-col text-lg font-medium md:gap-14">
					<div className="addressDetail flex gap-7 items-center mb-6 ">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/location.png'
								alt='Location'
								fill
							/>
						</div>

						<p className="addressText text-sm md:text-base">
							Bldg 3, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, Bengaluru,
							Karnataka 560076
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center mb-6">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/mail.png'
								alt='Mail'
								fill
							/>
						</div>

						<p className="addressText text-sm md:text-base">
							info@thetapacademy.com
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center mb-12">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/phone.png'
								alt='Phone'
								fill
							/>
						</div>
						<p className="addressText text-sm md:text-base">
							+91 8884881203
						</p>
					</div>
				</div>
				<div className="map col-span-2 relative h-72 overflow-hidden mb-12">
					<GMap />
				</div>
			</div>
		</div>
	)
};

type ContactOptionSectionProps = {};

export default ContactOptionSection;