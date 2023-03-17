"use strict";
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 3031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash.range"
var external_lodash_range_ = __webpack_require__(1054);
var external_lodash_range_default = /*#__PURE__*/__webpack_require__.n(external_lodash_range_);
;// CONCATENATED MODULE: ./src/hooks/usePagination.tsx


const DOTS = -1;
const usePagination = ({ totalPageCount , siblingCount =1 , currentPage  })=>{
    const paginationRange = (0,external_react_.useMemo)(()=>{
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;
        /*
			Case 1:
			If the number of pages is less than the page numbers we want to show in our
			paginationComponent, we return the range [1..totalPageCount]
		*/ if (totalPageNumbers >= totalPageCount) {
            return external_lodash_range_default()(1, totalPageCount + 1);
        }
        /*
			Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
		*/ const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        /*
		* We do not show dots just when there is just one page number to be inserted between the extremes of sibling and
		* the page limits i.e 1 and totalPageCount.
		* Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
		*/ const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        /*
			Case 2: No left dots to show, but rights dots to be shown
		*/ if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = external_lodash_range_default()(1, leftItemCount + 1);
            return [
                ...leftRange,
                DOTS,
                totalPageCount
            ];
        }
        /*
			Case 3: No right dots to show, but left dots to be shown
		*/ if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = external_lodash_range_default()(totalPageCount - rightItemCount + 1, totalPageCount + 1);
            return [
                firstPageIndex,
                DOTS,
                ...rightRange
            ];
        }
        /*
			Case 4: Both left and right dots to be shown
		*/ if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = external_lodash_range_default()(leftSiblingIndex, rightSiblingIndex + 1);
            return [
                firstPageIndex,
                DOTS,
                ...middleRange,
                DOTS,
                lastPageIndex
            ];
        }
    }, [
        totalPageCount,
        siblingCount,
        currentPage
    ]);
    return paginationRange;
};

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./src/components/common/Pagination.tsx





const Pagination = ({ className , pageSize , fullList , setCurrentList , autoScroll , siblingCount , onPageChange  })=>{
    const currentPage = (0,external_react_.useRef)(1);
    const totalPageCount = Math.ceil(fullList.length / pageSize);
    (0,external_react_.useEffect)(()=>{
        setCurrentList(fullList.slice(0, pageSize));
        let interval;
        if (autoScroll) {
            interval = setInterval(()=>{
                if (currentPage.current < totalPageCount) {
                    onNext();
                } else {
                    setCurrentList(fullList.slice(0, pageSize));
                    currentPage.current = 1;
                }
            }, autoScroll);
        }
        return ()=>{
            clearInterval(interval);
        };
    }, [
        fullList
    ]);
    const paginationRange = usePagination({
        totalPageCount,
        currentPage: currentPage.current,
        siblingCount
    });
    if (currentPage.current === 0 || totalPageCount === 1) {
        return null;
    }
    const onNext = ()=>{
        setCurrentList(fullList.slice(pageSize * currentPage.current, pageSize * (currentPage.current + 1)));
        currentPage.current = currentPage.current + 1;
        onPageChange && onPageChange(currentPage.current + 1);
    };
    const onPrevious = ()=>{
        setCurrentList(fullList.slice(pageSize * (currentPage.current - 2), pageSize * (currentPage.current - 1)));
        currentPage.current = currentPage.current - 1;
        onPageChange && onPageChange(currentPage.current - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `flex items-center justify-center space-x-2 sm:space-x-10 ${className ?? ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                onClick: onPrevious,
                rounded: "full",
                disabled: currentPage.current === 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillCaretLeft, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex space-x-1 sm:space-x-4",
                children: paginationRange.map((pageNumber, index)=>{
                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "…"
                        }, index);
                    }
                    // Render our Page Pills
                    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "px-3 py-1 bg-transparent",
                        onClick: ()=>{
                            setCurrentList(fullList.slice(pageSize * (pageNumber - 1), pageSize * pageNumber));
                            currentPage.current = pageNumber;
                            onPageChange && onPageChange(pageNumber);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${pageNumber === currentPage.current ? "bg-tertiary text-white font-semibold" : ""} px-3 py-1 rounded-full`,
                            children: pageNumber
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                onClick: onNext,
                rounded: "full",
                disabled: totalPageCount - currentPage.current <= 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillCaretRight, {})
            })
        ]
    });
};
Pagination.defaultProps = {
    siblingCount: 1
};
/* harmony default export */ const common_Pagination = (Pagination);


/***/ })

};
;