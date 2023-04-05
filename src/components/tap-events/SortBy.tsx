import React from "react";

type SortingOrder = 'ASC' | 'DESC';

const SortBy: React.FC<SortByProps> = ({
	categoryList,
	sortingOrder,
	setSortingOrder
}) => {
	return (
		<div className="container ml-2 md:ml-8 w-64 h-10">
			{categoryList?.length > 0 && (
				<div className="w-40">
					<div className='mb-6 ml-2' id="sortBy" >
						<select placeholder='Sort By' className='border border-tertiary' value={sortingOrder} onChange={(e) => { setSortingOrder(e.target.value as SortingOrder) }}>
							{categoryList.map((category) => (
								<option key={category.id} value={category.id}>{category.title}</option>
							))}
						</select>
					</div>
				</div>
			)}
		</div >
	);
};

type SortByProps = {
	categoryList: {
		id: string;
		title: string;
	}[];
	sortingOrder: string;
	setSortingOrder: (order: 'ASC' | 'DESC') => void
};

export default SortBy;