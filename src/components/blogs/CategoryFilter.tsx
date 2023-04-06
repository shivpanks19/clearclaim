import React from "react";
import { ContentCategory } from '@/services/blogs/types';
import { BsArrowRight } from 'react-icons/bs';
import classNames from "classnames";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categoryList,
	currentCategory,
	onCategorySelect
}) => {
	return (
		<div className="container mb-4 md:mb-20 mx-auto max-w-full xl:w-76 overflow-x-scroll scrollbar px-5 pb-5">
			{categoryList?.length > 0 && (
				<>
					<div className='hidden md:block'>
						<p className="font-semibold text-primary mb-3">Categories:</p>
						<div className="flex justify-between place-items-center">
							<div className="categoryList flex gap-3">
								{categoryList.map((category) => (
									<p className={classNames({
										'border border-primary2 rounded px-6 py-3 cursor-pointer': true,
										'font-bold border-2': currentCategory === category.id
									})}
										key={category.id}
										onClick={() => onCategorySelect(category.id)}
									>
										{category.title}</p>
								))}
							</div>
							<BsArrowRight className="text-tertiary" size={36} />
						</div>
					</div>
					<div className="md:hidden w-6/12">
						<div className='mb-6 mt-2' id="category" >
							{/* @ts-ignore */}
							<select placeholder='Category' className='border border-tertiary p-3 rounded' onClick={(e) => onCategorySelect(e.target.value)}>
								<option key='None' value=''>Filter by Category</option>
								{categoryList.map((category) => (
									<option key={category.id} value={category.id} >{category.title}</option>
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
	currentCategory: number;
	onCategorySelect: (cat) => void;
};

export default CategoryFilter;