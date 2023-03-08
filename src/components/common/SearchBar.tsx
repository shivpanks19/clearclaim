import React from "react";
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar: React.FC<SearchBarProps> = ({
	onChange
}) => {
	return (
		<div className="grid place-items-center">
			<div className="flex flex-col lg:flex-row place-items-center">
				<p className="text-xl text-tertiary font-semibold mr-8 mb-4">What are you looking for?</p>
				<div className="searchBox border rounded relative">
					<input className="text-aphonic text-base w-85 lg:w-120 h-12 pl-6" placeholder='Search' onChange={onChange} />
					<div className="absolute right-5 top-4 w-5 h-5"><BiSearchAlt2 /></div>
				</div>
			</div>
		</div>
	);
};

type SearchBarProps = {
	onChange: (e: any) => void;
};

export default SearchBar;