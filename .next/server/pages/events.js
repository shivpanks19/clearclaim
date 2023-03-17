"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 7747:
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
/* harmony import */ var _components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4024);
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4491);
/* harmony import */ var _utils_addEllipsis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_3__]);
_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const EventCard = ({ event , showDescription =true  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card rounded shadow w-full md:w-96 xl:w-76 flex flex-col lg:flex-row pt-5 md:pt-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-40 h-36 md:w-64 md:h-56 mb-6 md:mb-10 mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: event.eventImage?.url,
                    fill: true,
                    alt: "Event Image"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col text px-5 pt-5 relative h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "blog-heading md:text-2xl font-semibold text-title",
                        children: (0,_utils_addEllipsis__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(event.eventName, 12)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "date text-sm text-aphonic mb-2",
                        children: [
                            new Date(event.eventDate).toDateString(),
                            " | ",
                            (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(new Date(event.eventDate))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blog-description text-desc mb-4 grow",
                        children: showDescription && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "blog-desc text-sm md:text-base",
                            children: [
                                event.eventDescription.split(" ").slice(0, 20).join(" "),
                                "..."
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mb-5 gap-4 place-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-40",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            }),
                            event.totalCapacity - event.numberOfAttendees < 100 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm md:text-base font-semibold text-red-700",
                                children: [
                                    "Only ",
                                    event.totalCapacity - event.numberOfAttendees,
                                    " seats left!"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4899:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_tap_events_EventCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7747);
/* harmony import */ var _components_common_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3031);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_tap_events_EventCard__WEBPACK_IMPORTED_MODULE_4__]);
_components_tap_events_EventCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const EventList = ({ eventList , showReadMore =true  })=>{
    const [currentList, setCurrentList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-16 lg:mb-32",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "xl:w-76 mx-auto relative pt-10 mb-4",
                children: [
                    showReadMore && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "read_more absolute right-5 top-0 flex gap-3 align-middle",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: _utils_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].studentReviews */ .Z.studentReviews(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-tertiary",
                                    children: "Read more"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/img/arrow_right_blue.png",
                                width: 20,
                                height: 20,
                                alt: "Right arrow"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cardContainer w-42 md:w-80 xl:w-76 gap-14 grid px-5 md:mx-auto place-items-center",
                        children: currentList?.length > 0 && currentList.map((event)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tap_events_EventCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                event: event
                            }, event.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Pagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fullList: eventList,
                pageSize: 3,
                setCurrentList: setCurrentList
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const SortBy = ({ categoryList  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container ml-8 w-40 h-10",
        children: categoryList?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-40",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                className: "mb-6 ml-2",
                variant: "floating",
                id: "sortBy",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    placeholder: "Sort By",
                    className: "border border-tertiary",
                    children: categoryList.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: category.id,
                            children: category.title
                        }, category.id))
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortBy);


/***/ }),

/***/ 8834:
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




const TapEventHero = ({ headline , headlineBold , subHeadline , heroImage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        className: "pt-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-12 md:mb-32",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:pt-20 px-5 mb-7",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-3xl md:text-hero text-primary mb-3 md:mb-5",
                                children: [
                                    headline,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-semibold",
                                        children: headlineBold
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-aphonic mb-4 md:mb-10",
                                children: [
                                    subHeadline,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col pb-8",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TapEventHero);


/***/ }),

/***/ 4714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7675);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7117);
/* harmony import */ var _components_common_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1537);
/* harmony import */ var _components_tap_events_EventList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4899);
/* harmony import */ var _components_tap_events_TapEventHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8834);
/* harmony import */ var _components_tap_events_SortBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6511);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4980);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1468);
/* harmony import */ var _services_tap_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9047);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_tap_events_EventList__WEBPACK_IMPORTED_MODULE_6__, _services_course__WEBPACK_IMPORTED_MODULE_10__, _services_tap_events__WEBPACK_IMPORTED_MODULE_11__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_tap_events_EventList__WEBPACK_IMPORTED_MODULE_6__, _services_course__WEBPACK_IMPORTED_MODULE_10__, _services_tap_events__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Events = ({ tapEventPageInfo , eventList , courseList  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [q, setQ] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].events */ .Z.events(undefined, q), undefined, {
            scroll: false
        });
    }, [
        q
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tap_events_TapEventHero__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                headline: tapEventPageInfo.headline,
                headlineBold: tapEventPageInfo.headlineBold,
                subHeadline: tapEventPageInfo.subHeadline,
                heroImage: tapEventPageInfo.heroImage
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4 md:flex-row-reverse justify-between lg:place-items-center xl:w-76 mx-auto mb-4 md:mb-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SearchBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onChange: (e)=>setQ(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tap_events_SortBy__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        categoryList: [
                            {
                                id: "1",
                                slug: "asd",
                                title: "TitleCat"
                            }
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tap_events_EventList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                eventList: eventList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ locale , query  })=>{
    const tapEventPageInfo = await _services_tap_events__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getTapEventPageInformation */ .Z.getTapEventPageInformation(locale, "*");
    const eventList = await _services_tap_events__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getTapEventList */ .Z.getTapEventList(locale, "*", {
        start: query?.start,
        limit: 4,
        _q: query?._q
    });
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    return {
        props: {
            tapEventPageInfo: {
                ...tapEventPageInfo?.data?.attributes,
                heroImage: tapEventPageInfo.data.attributes.heroImage?.data.attributes
            },
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            eventList: eventList.data.map((event)=>({
                    ...event.attributes,
                    id: event.id,
                    eventImage: event.attributes.eventImage?.data.attributes
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getTapEventPageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getTapEventPageInformation */ .Z.getTapEventPageInformation, {
        _locale: locale,
        populate
    });
}
function getTapEventList(_locale, populate, params) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getTapEventList */ .Z.getTapEventList, {
        _locale,
        populate,
        _start: params?.start,
        _limit: params?.limit,
        _sort: params?.latest ? "updated_at:desc" : undefined,
        _q: params?._q,
        searchFields: [
            "eventName",
            "eventDescription"
        ]
    });
}
const TapEventService = {
    getTapEventPageInformation,
    getTapEventList
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TapEventService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ addEllipsis)
/* harmony export */ });
function addEllipsis(text, wordlimit) {
    return text.split(" ").length > 12 ? text.split(" ").slice(0, 12).join(" ") + "..." : text;
}


/***/ }),

/***/ 4491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ formatAMPM)
/* harmony export */ });
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4305:
/***/ ((module) => {

module.exports = require("lodash.debounce");

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

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,728,514,31,537,24], () => (__webpack_exec__(4714)));
module.exports = __webpack_exports__;

})();