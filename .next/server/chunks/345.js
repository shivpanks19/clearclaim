"use strict";
exports.id = 345;
exports.ids = [345];
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

/***/ 7786:
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



const CourseAttr = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-3 max-w-full course-attrs mb-3 md:mb-5 gap-4 justify-evenly",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex course-attr items-center gap-1 md:gap-5 w-24 md:w-40 lg:w-52",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-4 h-4 md:w-10 md:h-10 flex-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/img/home/online_offline_classes.png",
                            alt: "Online and offline classes",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "attr-desc text-primary text-xxs md:text-xs lg:text-base",
                        children: "Online & Offline Classes"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex course-attr items-center gap-3 md:gap-5 w-24 md:w-40 lg:w-52",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-4 h-4 md:w-10 md:h-10 flex-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/img/home/certification_course.png",
                            alt: "Certification Courses",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "attr-desc text-primary text-xxs md:text-xs lg:text-base",
                        children: "Certification Courses"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex course-attr items-center gap-3 md:gap-5 w-24 md:w-40 lg:w-52",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-4 h-4 md:w-10 md:h-10 flex-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/img/home/placement_assistance.png",
                            alt: "Placement Assistance",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "attr-desc text-primary text-xxs md:text-xs lg:text-base",
                        children: "100% Placement Assistance"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseAttr);


/***/ }),

/***/ 1220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WhyUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/common/why-us/WhyUsTab.tsx




const WhyUsTab = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    /* @ts-ignore */ const tabProps = (0,react_.useTab)({
        ...props,
        ref
    });
    const isSelected = !!tabProps["aria-selected"];
    const { topTab , bottomTab  } = props;
    const styles = (0,react_.useMultiStyleConfig)("Tabs", tabProps);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: styles,
        className: external_classnames_default()({
            "bg-white w-full p-5 h-22 cursor-pointer": true,
            "border-r-8 border-yellow text-white bg-why-us-selected": isSelected,
            "rounded-tl-2xl": topTab,
            "rounded-bl-2xl": bottomTab
        }),
        ...tabProps,
        children: tabProps.children
    });
});
WhyUsTab.displayName = "Why Us Tab";
/* harmony default export */ const why_us_WhyUsTab = (WhyUsTab);

;// CONCATENATED MODULE: ./src/components/common/why-us/WhyUsNav.tsx





const WhyUsNav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tabs, {
        isFitted: true,
        variant: "unstyled",
        orientation: "vertical",
        className: "w-76 mb-36 mx-auto bg-corporate-light rounded-2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabList, {
                className: "w-full justify-between w-35",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsTab, {
                        topTab: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/job-openings.png",
                                    width: 68,
                                    height: 71,
                                    alt: "Job Openings"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-semibold",
                                    children: "Information on Job Openings"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsTab, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/project-collaboration.png",
                                    width: 79,
                                    height: 79,
                                    alt: "Mock interviews"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-semibold",
                                    children: "Mock interviews"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsTab, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/interview-experiences.png",
                                    width: 75,
                                    height: 66,
                                    alt: "Competitive coding"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-semibold",
                                    children: "Competitive coding"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsTab, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/competitive-coding.png",
                                    width: 65,
                                    height: 75,
                                    alt: "Competitive Coding"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-semibold",
                                    children: "Major Announcements"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsTab, {
                        bottomTab: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/major-announcements.png",
                                    width: 80,
                                    height: 60,
                                    alt: "Major Accouncements"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-semibold",
                                    children: "24/7 LMS Access"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabPanels, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        className: "bg-whyus h-full flex rounded-r-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 m-1 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/job_description.png",
                                fill: true,
                                alt: "Hero Image"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        className: "bg-whyus h-full flex rounded-r-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 m-1 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/mock_interviews.webp",
                                fill: true,
                                alt: "Mock Interviews"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        className: "bg-whyus h-full flex rounded-r-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 m-1 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/competitive_coding.png",
                                fill: true,
                                alt: "Competitive Coding"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        className: "bg-whyus h-full flex rounded-r-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 m-1 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/major_announcements.png",
                                fill: true,
                                alt: "MAajor Announcements"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        className: "bg-whyus h-full flex rounded-r-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 m-1 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/lms.png",
                                fill: true,
                                alt: "LMS"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const why_us_WhyUsNav = (WhyUsNav);

;// CONCATENATED MODULE: ./src/components/common/why-us/WhyUs.tsx




const WhyUsSection = ({ headline , subHeadline  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden xl:block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: "why-tap-academy"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                className: "mb-12",
                title: headline,
                subtitle: subHeadline
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(why_us_WhyUsNav, {})
        ]
    });
};
/* harmony default export */ const WhyUs = (WhyUsSection);


/***/ })

};
;