import React, { useEffect, useRef } from 'react';
import { DOTS, usePagination } from '@/hooks/usePagination';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Pagination: React.FC<PaginationProps> = ({
	className,
	pageSize,
	fullList,
	setCurrentList,
	autoScroll,
	siblingCount,
	onPageChange,
}) => {
	const currentPage = useRef(1);

	const totalPageCount = Math.ceil(fullList.length / pageSize);

	useEffect(() => {
		setCurrentList(fullList.slice(0, pageSize))
		let interval;
		if (autoScroll) {
			interval = setInterval(() => {
				if (currentPage.current < totalPageCount) {
					onNext();
				} else {
					setCurrentList(fullList.slice(0, pageSize))
					currentPage.current = 1;
				}
			}, autoScroll)
		}
		return (() => { clearInterval(interval) })
	}, [fullList]);

	const paginationRange = usePagination({
		totalPageCount,
		currentPage: currentPage.current as number,
		siblingCount
	});

	if (currentPage.current === 0 || totalPageCount === 1) {
		return null;
	}

	const onNext = (): void => {
		setCurrentList(fullList.slice(pageSize * currentPage.current, pageSize * (currentPage.current + 1)))
		currentPage.current = currentPage.current + 1
		onPageChange && onPageChange(currentPage.current + 1);
	};

	const onPrevious = (): void => {
		setCurrentList(fullList.slice(pageSize * (currentPage.current - 2), pageSize * (currentPage.current - 1)))
		currentPage.current = currentPage.current - 1
		onPageChange && onPageChange(currentPage.current - 1);
	};

	return (
		<section className={`flex items-center justify-center space-x-2 sm:space-x-10 ${className ?? ''}`}>
			<button
				onClick={onPrevious}
				disabled={currentPage.current === 1}
			>
				<AiFillCaretLeft />
			</button>
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
							onClick={() => {
								setCurrentList(fullList.slice(pageSize * (pageNumber - 1), pageSize * pageNumber))
								currentPage.current = pageNumber
								onPageChange && onPageChange(pageNumber)
							}}
						>
							<p className={`${pageNumber === currentPage.current ? 'bg-tertiary text-white font-semibold' : ''} px-3 py-1 rounded-full`}>
								{pageNumber}
							</p>
						</button>
					);
				})}
			</div>
			<button
				onClick={onNext}
				disabled={totalPageCount - currentPage.current <= 0}
			>
				<AiFillCaretRight />
			</button>
		</section>
	);
};

type PaginationProps = {
	className?: string;
	siblingCount?: number;
	pageSize: number;
	fullList: any[];
	autoScroll?: number;
	setCurrentList: (a) => void;
	onPageChange?: (pageNumber: number) => void;
}

Pagination.defaultProps = {
	siblingCount: 1
};

export default Pagination;
