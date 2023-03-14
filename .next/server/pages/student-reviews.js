"use strict";
(() => {
var exports = {};
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 7671:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const Rating = ({ className , rating , large  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("stars flex gap-1 mr-3", className),
        children: rating && Array.apply(null, Array(rating)).map((_, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                    "relative  ": true,
                    "w-5 h-5 md:h-9 md:w-9": large,
                    "w-3 h-3 md:w-5 md:h-5": !large
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/img/home/star.png",
                    fill: true,
                    alt: "Course thumbnail"
                })
            }, idx))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rating);


/***/ }),

/***/ 6606:
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




const ReviewHeroSection = ({ headline , subHeadline , heroImage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "xl:w-76 grid md:grid-cols-2 md:gap-8 px-5 mx-auto mb-12 md:mb-32 items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:pt-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl md:text-hero font-semibold text-primary mb-5",
                                children: headline
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-aphonic text-subhero mb-10",
                                children: subHeadline
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-10",
                        children: heroImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: heroImage.url,
                            width: 496,
                            height: 500,
                            alt: "Hero Image"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewHeroSection);


/***/ }),

/***/ 4054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7675);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7117);
/* harmony import */ var _components_common_review_list_ReviewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1957);
/* harmony import */ var _components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3548);
/* harmony import */ var _components_student_reviews_ReviewHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6606);
/* harmony import */ var _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4117);
/* harmony import */ var _components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9966);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_student_reviews_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9978);
/* harmony import */ var _services_placement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9197);
/* harmony import */ var _services_review__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4982);
/* harmony import */ var _services_recruiter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6143);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_6__, _services_student_reviews_page__WEBPACK_IMPORTED_MODULE_9__, _services_placement__WEBPACK_IMPORTED_MODULE_10__, _services_review__WEBPACK_IMPORTED_MODULE_11__, _services_recruiter__WEBPACK_IMPORTED_MODULE_12__, _services_course__WEBPACK_IMPORTED_MODULE_13__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_6__, _services_student_reviews_page__WEBPACK_IMPORTED_MODULE_9__, _services_placement__WEBPACK_IMPORTED_MODULE_10__, _services_review__WEBPACK_IMPORTED_MODULE_11__, _services_recruiter__WEBPACK_IMPORTED_MODULE_12__, _services_course__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const StudentReviewPage = ({ headline , subHeadline , heroImage , placementList , reviewList , recruiterList , achievementHeadline , achievementSubHeadline , recruiterHeadline , recruiterSubHeadline , reviewHeadline , reviewSubHeadline , placementPagination , reviewPagination , recruiterPagination , courseList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_student_reviews_ReviewHero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                headline: headline,
                subHeadline: subHeadline,
                heroImage: heroImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                headline: achievementHeadline,
                subHeadline: achievementSubHeadline,
                placementList: placementList,
                showReadMore: false,
                placementPagination: placementPagination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_review_list_ReviewList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                headline: reviewHeadline,
                subHeadline: reviewSubHeadline,
                reviewList: reviewList,
                showReadMore: false,
                reviewPagination: reviewPagination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                imgSrc: "/img/coding_bootcamp_1.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                headline: recruiterHeadline,
                subHeadline: recruiterSubHeadline,
                recruiterList: recruiterList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ locale , query  })=>{
    const studentReviewPageInfo = await _services_student_reviews_page__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getStudentReviewPageInformation */ .Z.getStudentReviewPageInformation(locale, "*");
    const placementList = await _services_placement__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getPlacementList */ .Z.getPlacementList(locale, "*");
    const reviewList = await _services_review__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getReviewList */ .Z.getReviewList(locale, "*");
    const recruiterList = await _services_recruiter__WEBPACK_IMPORTED_MODULE_12__/* ["default"].getRecruiterList */ .Z.getRecruiterList(locale, "*");
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_13__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    return {
        props: {
            ...studentReviewPageInfo.data.attributes,
            heroImage: studentReviewPageInfo.data.attributes.heroImage?.data.attributes,
            placementList: placementList.data.map((placement)=>({
                    ...placement.attributes,
                    id: placement.id,
                    companyImage: placement.attributes.companyImage?.data.attributes,
                    studentImage: placement.attributes.studentImage?.data.attributes
                })),
            placementPagination: placementList.meta.pagination,
            reviewList: reviewList.data.map((review)=>({
                    ...review.attributes,
                    id: review.id,
                    studentImage: review.attributes.studentImage?.data.attributes
                })),
            reviewPagination: reviewList.meta.pagination,
            recruiterList: recruiterList.data.map((recruiter)=>({
                    ...recruiter.attributes,
                    id: recruiter.id,
                    recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes
                })),
            recruiterPagination: recruiterList.meta.pagination,
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentReviewPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getStudentReviewPageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getStudentReviewPageInformation */ .Z.getStudentReviewPageInformation, {
        _locale: locale,
        populate
    });
}
const StudentReviewPageService = {
    getStudentReviewPageInformation
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentReviewPageService);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,728,514,31,756,256,496], () => (__webpack_exec__(4054)));
module.exports = __webpack_exports__;

})();