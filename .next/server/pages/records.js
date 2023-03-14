"use strict";
(() => {
var exports = {};
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 2946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2115);




const RecordHeroSection = ({ headline , subHeadline , heroImage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:pt-20 mb-7 md:mb-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl md:text-hero font-semibold text-primary mb-5",
                                children: headline
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-aphonic text-lg",
                                children: subHeadline
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col mb-8",
                        children: heroImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: heroImage.url,
                            width: 552,
                            height: 461,
                            alt: "Hero Image"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordHeroSection);


/***/ }),

/***/ 7176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ records_SalarySection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/records/SalaryBars.tsx


const SalaryBars = ({ low , high  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex my-3 md:my-8 justify-between items-baseline",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-12 bg-tertiaryFade2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-16 bg-tertiaryFade1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-14 bg-tertiaryFade2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-10 bg-tertiaryFade2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-8 bg-tertiaryFade2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-9 h-6 bg-tertiaryFade2"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "limits flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "lowerlimit text-xs text-primary",
                                children: [
                                    "₹ ",
                                    low,
                                    " LPA"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lowerlimit text-xs text-primary",
                                children: "LOW"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "upperlimit text-xs text-primary",
                                children: [
                                    "₹ ",
                                    high,
                                    " LPA"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "upperlimit text-xs text-primary",
                                children: "HIGH"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const records_SalaryBars = (SalaryBars);

;// CONCATENATED MODULE: ./src/components/records/SalaryCard.tsx



const SalaryCard = ({ position , numberOfSalaries , low , high , avg  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card shadow rounded flex flex-col my-3 md:my-8 p-5 w-72",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm md:text-lg text-primary font-semibold",
                children: position
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm md:text-base font-medium text-primary",
                children: "Average LPA"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xl md:text-3xl font-bold text-tertiary",
                children: [
                    "₹ ",
                    avg
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(records_SalaryBars, {
                low: low,
                high: high
            })
        ]
    });
};
/* harmony default export */ const records_SalaryCard = (SalaryCard);

// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: external "uuidv4"
var external_uuidv4_ = __webpack_require__(3398);
;// CONCATENATED MODULE: ./src/components/records/SalarySection.tsx





const SalarySection = ({ headline , subHeadline , salaryCardList  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                title: headline,
                subtitle: subHeadline,
                className: " mx-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xl:w-76 mx-auto relative mb-12 md:mb-20 md:pt-10 cardContainer md:w-42 md:grid-cols-2 lg:grid-cols-3 md:gap-9 px-5 grid place-items-center",
                children: salaryCardList?.length && salaryCardList.map((salaryCard)=>/*#__PURE__*/ jsx_runtime_.jsx(records_SalaryCard, {
                        position: salaryCard.position,
                        numberOfSalaries: salaryCard.numberOfSalaries,
                        low: salaryCard.low,
                        high: salaryCard.high,
                        avg: salaryCard.avg
                    }, (0,external_uuidv4_.uuid)()))
            })
        ]
    });
};
/* harmony default export */ const records_SalarySection = (SalarySection);


/***/ }),

/***/ 125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7675);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7117);
/* harmony import */ var _components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3548);
/* harmony import */ var _components_records_RecordHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2946);
/* harmony import */ var _components_records_SalarySection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7176);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_record_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6012);
/* harmony import */ var _services_recruiter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6143);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _services_record_page__WEBPACK_IMPORTED_MODULE_7__, _services_recruiter__WEBPACK_IMPORTED_MODULE_8__, _services_course__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _services_record_page__WEBPACK_IMPORTED_MODULE_7__, _services_recruiter__WEBPACK_IMPORTED_MODULE_8__, _services_course__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const RecordPage = ({ headline , subHeadline , heroImage , recruiterHeadline , recruiterSubHeadline , salaryHeadline , salarySubHeadline , newsHeadline , newsSubHeadline , recruiterList , salaryCardList , courseList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_records_RecordHero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                headline: headline,
                subHeadline: subHeadline,
                heroImage: heroImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                headline: recruiterHeadline,
                subHeadline: recruiterSubHeadline,
                recruiterList: recruiterList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_records_SalarySection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                headline: salaryHeadline,
                subHeadline: salarySubHeadline,
                salaryCardList: salaryCardList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    const recordPageInfo = await _services_record_page__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getRecordPageInformation */ .Z.getRecordPageInformation(locale, "*");
    const recruiterList = await _services_recruiter__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getRecruiterList */ .Z.getRecruiterList(locale, "*");
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    return {
        props: {
            ...recordPageInfo.data.attributes,
            heroImage: recordPageInfo.data.attributes.heroImage?.data.attributes,
            recruiterList: recruiterList.data.map((recruiter)=>({
                    ...recruiter.attributes,
                    id: recruiter.id,
                    recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes
                })),
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getRecordPageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getRecordPageInformation */ .Z.getRecordPageInformation, {
        _locale: locale,
        populate
    });
}
const RecordPageService = {
    getRecordPageInformation
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordPageService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1054:
/***/ ((module) => {

module.exports = require("lodash.range");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,728,514,31,496], () => (__webpack_exec__(125)));
module.exports = __webpack_exports__;

})();