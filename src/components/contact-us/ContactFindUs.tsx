import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

const ContactFindUsSection: React.FC<ContactFindUsSectionProps> = ({
	ytLink,
	fbLink,
	igLink
}) => {
	return (
		<div className='flex flex-col xl:w-76 px-5 mx-auto mb-24'>
			<h1 className="font-semibold md:text-3xl mb-5 md:mb-14 text-primary">
				Find us on
			</h1>
			<div className="md:grid md:grid-cols-3 gap-14 mb-12">
				<div className="address flex flex-col font-medium gap-5 md:gap-14 mb-12">
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/youtube.png'
								alt='Youtube'
								fill
							/>
						</div>
						{ytLink?.text && (
							<Link href={ytLink?.link}>
								<p className="addressText text-sm md:text-lg text-primary">
									{ytLink.text}
								</p>
							</Link>
						)}
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/fb.png'
								alt='Facebook'
								fill
							/>
						</div>
						{fbLink?.text && (
							<Link href={fbLink?.link}>
								<p className="addressText text-sm md:text-lg text-primary">
									{fbLink.text}
								</p>
							</Link>
						)}
					</div>
					<div className="addressDetail flex gap-7 items-center">
						<div className="flex-none relative w-7 h-7 md:w-14 md:h-14">
							<Image
								src='/img/ig.png'
								alt='Instagram'
								fill
							/>
						</div>
						{igLink?.text && (
							<Link href={igLink?.link}>
								<p className="addressText text-sm md:text-lg text-primary">
									{igLink.text}
								</p>
							</Link>
						)}
					</div>
				</div>
				<div className="col-span-2">
					<ContactForm />
				</div>
			</div>
		</div>
	)
};

type ContactFindUsSectionProps = {
	ytLink: Record<string, string>;
	fbLink: Record<string, string>;
	igLink: Record<string, string>;
};

export default ContactFindUsSection;