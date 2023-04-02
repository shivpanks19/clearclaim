import React from "react";
import {useRouter} from 'next/router';
import { ContentCategory } from '@/services/blogs/types';
import { BsArrowRight } from 'react-icons/bs';
import classNames from "classnames";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categoryList,
	onCategorySelect
}) => {
	const router = useRouter();
	console.log('qq',router.query.contentCategory);
	return (
		<div className="container mb-4 md:mb-20 mx-auto max-w-full xl:w-76 px-5 pb-5">
			{categoryList?.length > 0 && (
				<>
					<div className='hidden md:block'>
						<p className="font-semibold text-primary mb-3">Categories:</p>
						<div className="flex justify-between place-items-center">
							<div className="categoryList flex gap-3">
								{categoryList.map((category) => (
									<p className={classNames({
										'border border-primary2 rounded px-6 py-3 cursor-pointer': true,
										'font-bold border-2': router.query.contentCategory === category.slug
									})}
									key={category.id}
									onClick={() => onCategorySelect(category.slug)}
									>
										{category.title}</p>
								))}
							</div>
							<BsArrowRight className="text-tertiary" size={36} />
						</div>
					</div>
					<div className="md:hidden w-6/12">
						<div className='mb-6 mt-2' id="category" >
							<select placeholder='Category' className='border border-tertiary p-3 rounded' onChange={(e)=>onCategorySelect(e.target.value)}>
								{categoryList.map((category) => (
									<option key={category.id} value={category.slug}>{category.title}</option>
								))}
							</select>
						</div>
					</div>
				</>
			)}
		</div >
	);
};

type CategoryFilterProps = {
	categoryList: ContentCategory[];
	onCategorySelect: (cat) => void;
};

export default CategoryFilter;