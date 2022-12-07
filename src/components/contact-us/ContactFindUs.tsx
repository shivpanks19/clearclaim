import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

const ContactFindUsSection: React.FC<ContactFindUsSectionProps> = () => {
	return (
		<div className='flex flex-col w-76 mx-auto mb-24'>
			<h1 className="font-semibold text-3xl mb-14 text-primary">
				Find us on
			</h1>
			<div className="grid grid-cols-3 gap-14">
				<div className="address flex flex-col text-lg font-medium gap-14">
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none">
							<Image
								src='/img/youtube.png'
								height={55}
								width={55}
								alt='Youtube'
							/>
						</div>

						<p className="addressText">
							@TAPACADEMY
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<Image
							src='/img/fb.png'
							height={55}
							width={55}
							alt='Facebook'
							className=''
						/>
						<p className="addressText">
							@tapacademy_online
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<Image
							src='/img/ig.png'
							height={55}
							width={55}
							alt='Instagram'
							className=''
						/>
						<p className="addressText">
							@tapacademy_online
						</p>
					</div>
				</div>
				<div className="col-span-2">
					<ContactForm />
				</div>
			</div>
		</div>
	)
};

type ContactFindUsSectionProps = {};

export default ContactFindUsSection;