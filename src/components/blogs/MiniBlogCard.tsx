import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageType } from "@/utils/types";

const MiniBlogCard: React.FC<MiniBlogCardProps> = ({ blogName, heroImage, publishedAt }) => {
	return (
		<div className='flex shadow rounded mx-auto mb-4 md:mb-10 bg-white w-99'>
			<div className="relative flex-none w-40 h-36">
				<Image
					src={heroImage.url}
					fill
					alt='Blog thumbnail'
				/>
			</div>
			<div className="flex flex-col text px-5 pt-5 relative ">
				<Link href="#">
					<p className="blog-heading font-semibold text-title mb-2">{blogName}</p>
				</Link>
				<div className="flex justify-between mb-5">
					<div className="date text-aphonic text-xs">{new Date(publishedAt).toDateString()}</div>
				</div>
			</div>
		</div>
	)
};

type MiniBlogCardProps = {
	blogName: string;
	heroImage: ImageType;
	publishedAt: Date;
};

export default MiniBlogCard;