import React from "react";
import Link from 'next/link';
import { ContentCategory } from '@/services/blogs/types';
import { BsArrowRight } from 'react-icons/bs';

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categoryList
}) => {
	return (
		<div className="container mb-20 mx-auto xl:w-76">
			{categoryList?.length > 0 && (
				<>
					<p className="font-semibold text-primary mb-3">Categories:</p>
					<div className="flex justify-between place-items-center">
						<div className="categoryList flex gap-3">
							{categoryList.map((category) => (
								<Link href={category.slug} key={category.id}>
									<p className="border border-primary2 rounded px-6 py-3">{category.title}</p>
								</Link>
							))}
						</div>
						<BsArrowRight className="text-tertiary" size={36} />
					</div>
				</>
			)}
		</div >
	);
};

type CategoryFilterProps = {
	categoryList: ContentCategory[];
};

export default CategoryFilter;