"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 9885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DriveBanner = ({})=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-5 lg:p-14 xl:w-76 mx-auto bg-tertiaryLight mb-16 lg:mb-24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-primary text-xl lg:text-5xl font-semibold mb-5 lg:mb-14 w-10/12 lg:w-7/12",
                    children: "Finding your dream job is just a Tap away"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "bg-tertiary rounded text-white text-sm lg:text-xl font-semibold px-5 py-3",
                    children: "APPLY NOW"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriveBanner);


/***/ }),

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DriveHero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/common/Counter.tsx


const Counter = ({ finalNum  })=>{
    const [num, setNum] = (0,external_react_.useState)(0);
    const [inProgress, setInProgress] = (0,external_react_.useState)(true);
    const interval = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!inProgress) {
            clearInterval(interval.current);
        } else {
            if (finalNum - num > 200) {
                setNum(finalNum - 199);
            }
            interval.current = setInterval(()=>{
                setNum((num)=>num + 1);
            }, 5);
        }
        if (num === finalNum || num > finalNum) {
            setInProgress(false);
        }
        return ()=>clearInterval(interval.current);
    }, [
        inProgress,
        num,
        finalNum
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: num
    });
};
/* harmony default export */ const common_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/drive/PlacementDriveStat.tsx



const PlacementDriveStat = ({ conductedDrives , upcomingDrives  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex justify-center items-center md:justify-evenly p-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center items-center md:mb-0 border-primary2 md:border-0 border-r h-30 md:h-20 w-64 md:w-1/3 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl lg:text-5xl text-primary font-semibold relative",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "relative z-10 mb-4",
                            style: {
                                letterSpacing: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(common_Counter, {
                                    finalNum: conductedDrives
                                }),
                                " +"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs lg:text-xl text-primary3 font-normal z-10",
                        children: "Placement Drives Conducted"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 md:mb-0 border-primary2 md:border-0 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl lg:text-5xl text-primary font-semibold relative",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "relative z-10 mb-4",
                            style: {
                                letterSpacing: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(common_Counter, {
                                    finalNum: upcomingDrives
                                }),
                                " +"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs lg:text-xl text-primary3 font-normal z-10",
                        children: "Upcoming Placement Drives"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const drive_PlacementDriveStat = (PlacementDriveStat);

// EXTERNAL MODULE: ./src/components/common/SocialButtonList.tsx
var SocialButtonList = __webpack_require__(2115);
;// CONCATENATED MODULE: ./src/components/drive/DriveHero.tsx





const DrivesHero = ({ headline , subHeadline , heroImage , conductedDrives , upcomingDrives  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        className: "pt-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-12 md:mb-32",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col md:pt-20 px-5 mb-7",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-3xl md:text-hero font-semibold text-primary mb-3 md:mb-5",
                                children: [
                                    headline,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-aphonic mb-4 md:mb-10",
                                children: [
                                    subHeadline,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col",
                        children: heroImage?.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: heroImage.url,
                            width: 552,
                            height: 461,
                            alt: "Hero Image"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(drive_PlacementDriveStat, {
                conductedDrives: conductedDrives,
                upcomingDrives: upcomingDrives
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialButtonList/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const DriveHero = (DrivesHero);


/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ drive_DriveList)
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
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/drive/DriveCard.tsx




const DriveCard = ({ position , company , location , date , ctc , numberOfApplicants , numberOfApplicantsSelected , driveImage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card rounded shadow w-full md:w-96 flex flex-col pt-5 md:pt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: driveImage?.url,
                className: "mb-6 md:mb-10 grid mx-auto",
                width: 163,
                height: 155,
                alt: "Drive Image"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "textData border-b px-9 pb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "position md:text-xl text-primary font-semibold",
                        children: position
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "companyName text-primary text-sm md:text-lg font-medium mb-4",
                        children: company
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/location_small.png",
                                    width: 16,
                                    height: 16,
                                    alt: "Location"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "location text-desc text-sm md:text-base mb-2 align-middle",
                                children: location
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/calendar_small.png",
                                    width: 16,
                                    height: 16,
                                    alt: "Calendar"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: external_classnames_default()({
                                    "date text-desc text-sm md:text-base mb-2 align-middle": true,
                                    "text-red-400": new Date(date) < new Date(),
                                    "text-green-400": new Date(date) > new Date()
                                }),
                                children: [
                                    "Posted on ",
                                    new Date(date).toDateString()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/ctc_small.png",
                                    width: 16,
                                    height: 16,
                                    alt: "CTC"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "ctc text-sm md:text-xl text-tertiary font-bold align-middle",
                                children: [
                                    ctc,
                                    " LPA"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "applicantData grid grid-cols-2 text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-aphonic font-medium py-6 text-sm md:text-base border-r",
                        children: [
                            numberOfApplicants,
                            " applicants"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: " text-aphonic font-medium py-6 text-sm md:text-base",
                        children: [
                            numberOfApplicantsSelected,
                            " selected"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const drive_DriveCard = (DriveCard);

// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: ./src/components/common/Pagination.tsx + 1 modules
var Pagination = __webpack_require__(3031);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(4980);
;// CONCATENATED MODULE: ./src/components/drive/DriveList.tsx








const DriveList = ({ headline , subHeadline , driveList , showReadMore =true  })=>{
    const [currentList, setCurrentList] = (0,external_react_.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-16 lg:mb-32",
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
                className: "xl:w-76 mx-auto relative pt-10 mb-4",
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
                        className: "cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 place-items-center",
                        children: currentList?.length > 0 && currentList.map((drive)=>/*#__PURE__*/ jsx_runtime_.jsx(drive_DriveCard, {
                                position: drive.position,
                                company: drive.company,
                                location: drive.location,
                                date: drive.date,
                                ctc: drive.ctc,
                                numberOfApplicants: drive.numberOfApplicants,
                                numberOfApplicantsSelected: drive.numberOfApplicantsSelected,
                                driveImage: drive.driveImage
                            }, drive.id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                fullList: driveList,
                pageSize: 3,
                setCurrentList: setCurrentList
            })
        ]
    });
};
/* harmony default export */ const drive_DriveList = (DriveList);


/***/ }),

/***/ 7173:
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
/* harmony import */ var _components_drive_DriveHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3412);
/* harmony import */ var _components_drive_DriveList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2666);
/* harmony import */ var _components_drive_DriveBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9885);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_upcoming_drives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9524);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _services_upcoming_drives__WEBPACK_IMPORTED_MODULE_7__, _services_course__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _services_upcoming_drives__WEBPACK_IMPORTED_MODULE_7__, _services_course__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const UpcomingDrives = ({ drivePageInfo , driveList , drivePagination , courseList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_drive_DriveHero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                headline: drivePageInfo.headline,
                subHeadline: drivePageInfo.subHeadline,
                heroImage: drivePageInfo.heroImage,
                conductedDrives: drivePageInfo.conductedDrives,
                upcomingDrives: drivePageInfo.upcomingDrives
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_drive_DriveList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                headline: drivePageInfo.driveHeadline,
                subHeadline: drivePageInfo.driveSubHeadline,
                drivePagination: drivePagination,
                driveList: driveList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_drive_DriveBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    const drivePageInfo = await _services_upcoming_drives__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getDrivePageInformation */ .Z.getDrivePageInformation(locale, "*");
    const driveList = await _services_upcoming_drives__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getDriveList */ .Z.getDriveList(locale, "*");
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    return {
        props: {
            drivePageInfo: {
                ...drivePageInfo?.data?.attributes,
                heroImage: drivePageInfo.data.attributes.heroImage?.data.attributes
            },
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            driveList: driveList.data.map((drive)=>({
                    ...drive.attributes,
                    id: drive.id,
                    driveImage: drive.attributes.driveImage?.data.attributes
                })),
            drivePagination: driveList.meta.pagination,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingDrives);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getDrivePageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDrivePageInformation */ .Z.getDrivePageInformation, {
        _locale: locale,
        populate
    });
}
function getDriveList(_locale, populate, pageNumber) {
    const paginationOptions = {
        "pagination[page]": pageNumber ?? 1,
        "pagination[pageSize]": 9
    };
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDriveList */ .Z.getDriveList, {
        _locale,
        populate,
        ...paginationOptions
    });
}
const DriveService = {
    getDrivePageInformation,
    getDriveList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriveService);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,728,514,31], () => (__webpack_exec__(7173)));
module.exports = __webpack_exports__;

})();