import React from "react";
import Link from "next/link";
import Image from "next/image";
import Routes from '@/utils/routes';
import { ImageType } from "@/utils/types";
import { ContentCategory } from '@/services/blogs/types';

const MiniBlogCard: React.FC<MiniBlogCardProps> = ({ blogName, heroImage, publishedAt, contentCategory, slug }) => {
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
				<Link href={Routes.blog(contentCategory, slug)}>
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
	contentCategory: ContentCategory;
	slug: string;
};

export default MiniBlogCard;