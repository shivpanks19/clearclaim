exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 8998:
/***/ ((module) => {

// Exports
module.exports = {
	"upInfinte": "animation_upInfinte__LsbOq",
	"slideUp": "animation_slideUp__te1Lg",
	"speed-1": "animation_speed-1__b9aQH",
	"speed-2": "animation_speed-2__oetSU",
	"speed-3": "animation_speed-3__38mK6",
	"slideRight": "animation_slideRight__GakCW",
	"slideLeft": "animation_slideLeft__7TAZz",
	"fadeIn": "animation_fadeIn__q32um"
};


/***/ }),

/***/ 3548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4947);
/* harmony import */ var _components_common_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3031);
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8998);
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const RecruiterSection = ({ headline , subHeadline , recruiterList  })=>{
    const [currentList, setCurrentList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "mb-5 md:mb-12 mx-5",
                title: headline,
                subtitle: subHeadline
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-14 md:mb-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `cards mb-4 xl:w-76 mx-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-8 place-items-center md:gap-14 ${(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slideLeft)}`,
                        children: currentList?.length > 0 && currentList.map((recruiter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `relative w-36 md:w-60 h-9 md:h-16 mb-4  `,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: recruiter.recruiterImage.url,
                                    fill: true,
                                    alt: recruiter.recruiterName
                                })
                            }, recruiter.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fullList: recruiterList,
                        pageSize: 8,
                        autoScroll: 3000,
                        setCurrentList: setCurrentList
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecruiterSection);


/***/ }),

/***/ 6143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getRecruiterList(_locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getRecruiterList */ .Z.getRecruiterList, {
        _locale,
        populate
    });
}
const RecruiterService = {
    getRecruiterList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecruiterService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;