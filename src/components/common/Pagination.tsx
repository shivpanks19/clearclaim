import React from 'react';
import { DOTS, usePagination } from '@/hooks/usePagination';
import { Button } from '@chakra-ui/react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Pagination: React.FC<PaginationProps> = ({
	className,
	totalPageCount,
	currentPage,
	siblingCount,
	onPageChange
}) => {
	const paginationRange = usePagination({
		totalPageCount,
		currentPage,
		siblingCount
	});

	if (currentPage === 0 || totalPageCount === 1) {
		return null;
	}

	const onNext = (): void => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = (): void => {
		onPageChange(currentPage - 1);
	};

	return (
		<section className={`flex items-center justify-center space-x-2 sm:space-x-10 ${className ?? ''}`}>
			<Button
				onClick={onPrevious}
				rounded='full'
				disabled={currentPage === 1}
			>
				<AiFillCaretLeft />
			</Button>
			<div className='flex space-x-1 sm:space-x-4'>
				{paginationRange.map((pageNumber, index) => {
					// If the pageItem is a DOT, render the DOTS unicode character
					if (pageNumber === DOTS) {
						return <div key={index}>&#8230;</div>;
					}

					// Render our Page Pills
					return (
						<button
							key={index}
							className='px-3 py-1 bg-transparent'
							onClick={() => onPageChange(pageNumber)}
						>
							<p className={`${pageNumber === currentPage ? 'bg-tertiary text-white font-semibold' : ''} px-3 py-1 rounded-full`}>
								{pageNumber}
							</p>
						</button>
					);
				})}
			</div>
			<Button
				onClick={onNext}
				rounded='full'
				disabled={totalPageCount - currentPage <= 0}
			>
				<AiFillCaretRight />
			</Button>
		</section>
	);
};

type PaginationProps = {
	className?: string;
	totalPageCount: number;
	siblingCount?: number;
	currentPage: number;
	onPageChange: (pageNumber: number) => void;
}

Pagination.defaultProps = {
	siblingCount: 1
};

export default Pagination;
