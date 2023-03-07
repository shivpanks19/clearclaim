import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface Heading {
	title: string;
	id: string;
}

interface TableOfContentsProps {
	headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleTableOfContents = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="table-of-contents bg-lightblue shadow border border-gray-200 p-4 mb-14">
			<div className="flex items-center justify-between mb-2 pt-5 px-7">
				<h2 className="text-primary text-2xl font-semibold mb-3">Table of Contents</h2>
				<button
					onClick={toggleTableOfContents}
					className={`${isOpen ? 'rotate-180' : ''
						} transform transition-transform duration-300 hover:rotate-180`}
				>
					{isOpen ? (
						<FiChevronUp className="h-5 w-5 text-primary" />
					) : (
						<FiChevronDown className="h-5 w-5 text-primary" />
					)}
				</button>
			</div>
			<ul
				className={`${isOpen ? 'block' : 'hidden'
					} mt-2 transition-all duration-500 ease-in-out px-7`}
			>
				{headings.map((heading, index) => (
					<li key={index} className='mb-1'>
						<a
							className="text-primary hover:text-title transition-all duration-300 ease-in-out transform hover:scale-110"
							href={`#${heading.id}`}
						>
							{heading.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
