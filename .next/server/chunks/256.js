"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 9966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ placement_list_PlacementList)
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
;// CONCATENATED MODULE: ./src/components/common/placement-list/PlacementCard.tsx



const PlacementCard = ({ studentName , collegeCourseName , collegeName , designation , ctc , companyImage , studentImage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card rounded shadow w-full md:w-96 flex flex-col items-center py-7 md:py-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-full overflow-hidden h-16 w-16 lg:w-28 lg:h-28 grid place-items-center mb-4 border",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: studentImage?.url,
                    width: 114,
                    height: 114,
                    alt: studentName
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "studentName mb-4 md:text-2xl text-primary font-semibold",
                children: studentName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "courseName text-tertiary text-sm md:text-base font-medium",
                children: collegeCourseName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "collegeName text-desc text-xs md:text-base mb-5 md:mb-10",
                children: collegeName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-6 md:mb-10 grow",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: companyImage?.url,
                    width: 152,
                    height: 39,
                    alt: "Priya"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "designation text-primary text-sm md:text-base font-semibold",
                children: designation
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "ctc md:text-2xl text-tertiary font-bold",
                children: [
                    ctc,
                    " LPA"
                ]
            })
        ]
    });
};
/* harmony default export */ const placement_list_PlacementCard = (PlacementCard);

// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: ./src/components/common/Pagination.tsx + 1 modules
var Pagination = __webpack_require__(3031);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(4980);
;// CONCATENATED MODULE: ./src/components/common/placement-list/PlacementList.tsx








const PlacementList = ({ headline , subHeadline , placementList , showReadMore =true  })=>{
    const [currentList, setCurrentList] = (0,external_react_.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: "success-stories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                title: headline,
                subtitle: subHeadline,
                className: "mb-4 md:mb-10 mx-5"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:w-76 mx-auto relative pt-10 mb-14 md:mb-20",
                children: [
                    showReadMore && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "read_more absolute right-5 top-0 flex gap-3 align-middle",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: routes/* default.studentReviews */.Z.studentReviews(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-tertiary",
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
                        className: "cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 mb-4",
                        children: currentList?.length > 0 && currentList.map((placement)=>/*#__PURE__*/ jsx_runtime_.jsx(placement_list_PlacementCard, {
                                studentName: placement.studentName,
                                collegeCourseName: placement.collegeCourseName,
                                collegeName: placement.collegeName,
                                designation: placement.designation,
                                ctc: placement.ctc,
                                companyImage: placement.companyImage,
                                studentImage: placement.studentImage
                            }, placement.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                        fullList: placementList,
                        pageSize: 3,
                        setCurrentList: setCurrentList,
                        autoScroll: 3000
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const placement_list_PlacementList = (PlacementList);


/***/ }),

/***/ 9197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getPlacementList(_locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPlacementList */ .Z.getPlacementList, {
        _locale,
        populate
    });
}
const PlacementService = {
    getPlacementList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlacementService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;