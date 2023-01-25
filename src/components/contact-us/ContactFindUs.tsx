import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

const ContactFindUsSection: React.FC<ContactFindUsSectionProps> = () => {
	return (
		<div className='flex flex-col xl:w-76 px-5 mx-auto mb-24'>
			<h1 className="font-semibold text-3xl mb-5 md:mb-14 text-primary">
				Find us on
			</h1>
			<div className="md:grid md:grid-cols-3 gap-14 mb-12">
				<div className="address flex flex-col text-lg font-medium gap-5 md:gap-14 mb-12">
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/youtube.png'
								alt='Youtube'
								fill
							/>
						</div>
						<p className="addressText">
							@TAPACADEMY
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/fb.png'
								alt='Facebook'
								fill
							/>
						</div>
						<p className="addressText">
							@tapacademy_online
						</p>
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/ig.png'
								alt='Instagram'
								fill
							/>
						</div>
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