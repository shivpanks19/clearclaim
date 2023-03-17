import React from "react";
import {
	FormControl,
	Select
} from '@chakra-ui/react';

const SortBy: React.FC<SortByProps> = ({
	categoryList,
	sortingOrder,
	setSortingOrder
}) => {
	return (
		<div className="container ml-2 md:ml-8 w-64 h-10">
			{categoryList?.length > 0 && (
				<div className="w-40">
					<FormControl className='mb-6 ml-2' variant="floating" id="sortBy" >
						<Select placeholder='Sort By' className='border border-tertiary' value={sortingOrder} onChange={(e)=>{setSortingOrder(e.target.value)}}>
							{categoryList.map((category) => (
								<option key={category.id} value={category.id}>{category.title}</option>
							))}
						</Select>
					</FormControl>
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
	setSortingOrder: (order: string)=>void
};

export default SortBy;