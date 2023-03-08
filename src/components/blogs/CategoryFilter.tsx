import React from "react";
import Link from 'next/link';
import { ContentCategory } from '@/services/blogs/types';
import { BsArrowRight } from 'react-icons/bs';
import {
	FormControl,
	FormLabel,
	Select
} from '@chakra-ui/react';

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categoryList
}) => {
	return (
		<div className="container mb-4 md:mb-20 mx-auto max-w-full overflow-x-scroll xl:w-76 px-5 pb-5">
			{categoryList?.length > 0 && (
				<>
					<div className='hidden md:block'>
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
					</div>
					<div className="md:hidden w-6/12">
						<FormControl className='mb-6 ml-2' variant="floating" id="category" >
							<Select placeholder='Category' className='border border-tertiary'>
								{categoryList.map((category) => (
									<option key={category.id} value={category.id}>{category.title}</option>
								))}
							</Select>
						</FormControl>
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