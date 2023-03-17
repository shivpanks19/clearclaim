"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 4117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__]);
_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CodingBootcampSection = ({ imgSrc  })=>{
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col lg:flex-row xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: imgSrc,
                className: "coding_bootcamp absolute md:left-0 -top-32 md:-top-6",
                width: 388,
                height: 314,
                alt: "Coding Bootcamp"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "textSection flex flex-col lg:flex-row items-center gap-5 md:gap-12 w-full md:py-16 md:pl-40 md:pr-8 pt-44 h-74 md:h-auto xs:pt-56 px-5 md:px-0 bg-tertiary rounded",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "textSection",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg md:text-3xl font-semibold text-white mb-4 text-center md:text-left",
                                children: "Attend Live Coding Bootcamp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm md:text-base text-white text-center md:text-left",
                                children: "Register Now to attend coding Bootcamp on Full Stack Development & get 2 Placement Drives"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-white flex-none rounded mb-5 md:mb-0 w-full md:w-64",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm md:text-base text-primary font-medium py-2 md:py-4",
                            onClick: onOpen,
                            children: " Reserve my seat"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                isOpen: isOpen,
                onClose: onClose
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodingBootcampSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ReviewList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/common/Rating.tsx
var Rating = __webpack_require__(7671);
;// CONCATENATED MODULE: ./src/components/common/review-list/ReviewCard.tsx




const ReviewCard = ({ studentName , designation , companyName , ctc , reviewText , rating , studentImage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card w-full flex gap-3 md:gap-8 my-3 md:my-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-none relative w-9 h-9 md:w-16 md:h-16 rounded-full overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: studentImage?.url,
                    className: "pfp",
                    width: 114,
                    height: 114,
                    alt: studentName
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "textSection flex flex-col gap-3 md:gap-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "studentIntro flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "studentName text-sm md:text-xl text-primary font-semibold",
                                        children: studentName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prevDesg text-aphonic mb-1 text-xs md:text-xl",
                                        children: "Tap Student"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Rating/* default */.Z, {
                                        rating: rating
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "desgSection flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "desgName mb-1 text-sm md:text-xl text-primary font-medium",
                                        children: designation
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prevDesg mb-1 text-desc text-xs md:text-xl",
                                        children: companyName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ctc flex text-aphonic",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-bold text-xs md:text-xl",
                                                children: "CTC:\xa0"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-xs md:text-xl",
                                                children: [
                                                    ctc,
                                                    " LPA"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "reviewText text-aphonic text-xs md:text-sm",
                        children: reviewText
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const review_list_ReviewCard = (ReviewCard);

// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: ./src/components/common/Pagination.tsx + 1 modules
var Pagination = __webpack_require__(3031);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(4980);
;// CONCATENATED MODULE: ./src/components/common/review-list/ReviewList.tsx








const ReviewSection = ({ headline , subHeadline , reviewList , showReadMore =true  })=>{
    const [currentList, setCurrentList] = (0,external_react_.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                title: headline,
                subtitle: subHeadline,
                className: "mb-4 md:mb-10 mx-5"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:w-76 mx-auto relative pt-5 md:pt-10 mb-14 md:mb-20",
                children: [
                    showReadMore && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "read_more absolute right-5 top-0 flex gap-3 align-middle",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: routes/* default.studentReviews */.Z.studentReviews(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs md:text-base text-tertiary",
                                    children: "Read more"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/arrow_right_blue.png",
                                width: 20,
                                height: 20,
                                alt: "Right arrow"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cardContainer w-42 md:grid-cols-2 gap-9 mx-5 grid",
                        children: currentList?.length > 0 && currentList.map((review)=>/*#__PURE__*/ jsx_runtime_.jsx(review_list_ReviewCard, {
                                studentName: review.studentName,
                                designation: review.designation,
                                companyName: review.companyName,
                                ctc: review.ctc,
                                reviewText: review.reviewText,
                                rating: review.rating,
                                studentImage: review.studentImage
                            }, review.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                        fullList: reviewList,
                        pageSize: 4,
                        setCurrentList: setCurrentList,
                        autoScroll: 3000
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ReviewList = (ReviewSection);


/***/ }),

/***/ 4982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getReviewList(_locale, populate, pageNumber) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getReviewList */ .Z.getReviewList, {
        _locale,
        populate
    });
}
const ReviewService = {
    getReviewList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;