import React from "react";
import Image from "next/image";
import GMap from '@/components/contact/GMap';

const ContactOptionSection: React.FC<ContactOptionSectionProps> = () => {
	return (
		<div className='flex flex-col w-76 mx-auto mb-24'>
			<h1 className="font-semibold text-3xl mb-14 text-primary">
				Contact Options
			</h1>
			<div className="grid grid-cols-3 gap-14">
				<div className="address flex flex-col text-lg font-medium gap-14">
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none">
							<Image
								src='/img/location.png'
								height={52}
								width={52}
								alt='Location'
							/>
						</div>

						<p className="addressText">
							Bldg 3, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, Bengaluru,
							Karnataka 560076
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<Image
							src='/img/mail.png'
							height={52}
							width={52}
							alt='Mail'
							className=''
						/>
						<p className="addressText">
							info@thetapacademy.com
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<Image
							src='/img/phone.png'
							height={52}
							width={52}
							alt='Phone'
							className=''
						/>
						<p className="addressText">
							+91 8884881203
						</p>
					</div>
				</div>
				<div className="map col-span-2">
					<GMap />
				</div>
			</div>
		</div>
	)
};

type ContactOptionSectionProps = {};

export default ContactOptionSection;