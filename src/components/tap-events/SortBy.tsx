import React from "react";
import { ContentCategory } from '@/services/blogs/types';
import {
	FormControl,
	Select
} from '@chakra-ui/react';

const SortBy: React.FC<SortByProps> = ({
	categoryList
}) => {
	return (
		<div className="container ml-8 w-40">
			{categoryList?.length > 0 && (
				<div className="w-40">
					<FormControl className='mb-6 ml-2' variant="floating" id="sortBy" >
						<Select placeholder='Sort By' className='border border-tertiary'>
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
	categoryList: ContentCategory[];
};

export default SortBy;