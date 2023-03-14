(() => {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 7070:
/***/ ((module) => {

// Exports
module.exports = {
	"faqContainer": "courseFAQ_faqContainer__ryd37",
	"faqcard": "courseFAQ_faqcard__pRik4",
	"question": "courseFAQ_question__yNapd",
	"questionNumber": "courseFAQ_questionNumber__FTUYK",
	"questionText": "courseFAQ_questionText__I04bg",
	"questionText2": "courseFAQ_questionText2__DxrHM",
	"answer": "courseFAQ_answer__jfEB0",
	"activeCard": "courseFAQ_activeCard__RmOUs"
};


/***/ }),

/***/ 6415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HeroBg = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBg);


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const Title = ({ text , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("text-primary md:text-3xl font-semibold", className),
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 2441:
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



const CodingBootcampSection = ({ imgSrc , price  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 place-items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "pricing"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: imgSrc,
                className: "coding_bootcamp absolute left-3 md:left-0 -top-48 md:-top-20",
                width: 364,
                height: 366,
                alt: "Value for money"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "textSection flex flex-col items-center gap-4 w-full md:py-7 md:pl-40 md:pr-8 pt-44 px-5 md:px-0 bg-tertiary rounded",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg md:text-3xl font-semibold text-white md:mb-4 text-center md:text-left",
                        children: "Get the best value for your money"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-5xl md:text-7xl font-semibold text-price-yellow mb-5",
                        children: [
                            "₹ ",
                            price
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white mb-5 md:mb-0 text-center",
                        children: "Pay in two installments in the first month of your course joining"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodingBootcampSection);


/***/ }),

/***/ 5394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutCourse)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/common/Title.tsx
var Title = __webpack_require__(150);
// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
;// CONCATENATED MODULE: ./src/components/layout/Col.tsx


const Col = ({ children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: children
    });
};
/* harmony default export */ const layout_Col = (Col);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/courses/[slug]/CourseUsp.tsx





const CourseUsp = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Col, {
        className: "md:mt-16",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-5 md:gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "point place-items-center flex gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex-none w-7 h-7 md:w-10 md:h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/ar.png",
                                fill: true,
                                alt: "AR"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs md:text-lg text-primary font-medium",
                            children: "Augumented Reality enabled  Training"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "point place-items-center flex gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex-none w-7 h-7 md:w-10 md:h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/community.png",
                                fill: true,
                                alt: "Large Community of our alumini"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs md:text-lg text-primary font-medium",
                            children: "Large Community of our alumini"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "point place-items-center flex gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex-none w-7 h-7 md:w-10 md:h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/person.png",
                                fill: true,
                                alt: "Mock interviews & feedback sessions"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs md:text-lg text-primary font-medium",
                            children: "Mock interviews & feedback sessions"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "point place-items-center flex gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex-none w-7 h-7 md:w-10 md:h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/linkedin.png",
                                fill: true,
                                alt: "Resume & Linkedin profile building sessions"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs md:text-lg text-primary font-medium",
                            children: "Resume & Linkedin profile building sessions"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "point place-items-center flex gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex-none w-7 h-7 md:w-10 md:h-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/business-card.png",
                                fill: true,
                                alt: "Company specific grooming sessions"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs md:text-lg text-primary font-medium",
                            children: "Company specific grooming sessions"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const _slug_CourseUsp = (CourseUsp);

;// CONCATENATED MODULE: ./src/components/courses/AboutCourse.tsx






const CourseOverviewSection = ({ aboutCourse  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-12 mb-12 md:mb-24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: "course-overview"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                title: "Course Overview",
                subtitle: "Know the details of the course",
                className: "mb-3 md:mb-8"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid md:grid-cols-3 mb-10 mx-auto md:mb-24 px-5 xl:w-76",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:col-span-2 mb-5 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                                text: "About Course",
                                className: "mb-1 md:mb-8 text-sm md:text-lg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-aphonic mr-12 text-sm md:text-base",
                                children: aboutCourse
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_slug_CourseUsp, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 gap-5 md:grid-cols-7 place-items-center md:gap-8 px-5 md:px-20 xl:w-76 mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "course_attr flex flex-col place-items-center w-28 md:w-48",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/daily_course_material.png",
                                    alt: "course material",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-tertiary text-sm md:text-2xl font-semibold text-center",
                                children: "Daily Course Material"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block relative w-20 h-0.5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/dotted_line.png",
                            alt: "line",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "course_attr flex flex-col place-items-center w-28 md:w-48",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/lifetime_access.png",
                                    alt: "Lifetime access",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-tertiary text-sm md:text-2xl font-semibold text-center",
                                children: "Lifetime LMS Access"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block relative w-20 h-0.5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/dotted_line.png",
                            alt: "line",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "course_attr flex flex-col place-items-center w-28 md:w-48",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/course_content.png",
                                    alt: "300+ hours course content",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-tertiary text-sm md:text-2xl font-semibold text-center",
                                children: "300+ hours Course Content"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block relative w-20 h-0.5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/dotted_line.png",
                            alt: "line",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "course_attr flex flex-col place-items-center w-28 md:w-48",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/support.png",
                                    alt: "Support",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-tertiary text-sm md:text-2xl font-semibold text-center",
                                children: "Dedicated Support"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AboutCourse = (CourseOverviewSection);


/***/ }),

/***/ 7299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CourseCurriculum)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/layout/Container.tsx
var Container = __webpack_require__(2439);
// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/courses/CourseCurriculum/CurriculumTab.tsx




const CurriculumTab = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
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
            "bg-tertiary text-white w-full p-6 h-22 cursor-pointer": true,
            "border-l-8 border-yellow text-price-yellow bg-why-us-selected": isSelected,
            "rounded-tl": topTab,
            "rounded-bl": bottomTab
        }),
        ...tabProps,
        children: tabProps.children
    });
});
CurriculumTab.displayName = "Curriculum Tab";
/* harmony default export */ const CourseCurriculum_CurriculumTab = (CurriculumTab);

;// CONCATENATED MODULE: ./src/components/courses/CourseCurriculum/CurriculumNav.tsx




const CurriculumNav = ({ curriculumList  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-loader-gray w-76 mb-36 mx-auto rounded grid place-items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tabs, {
                isFitted: true,
                variant: "unstyled",
                orientation: "vertical",
                className: "border-0 border-b border-tertiary grid grid-cols-2 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabList, {
                        className: "w-full justify-between",
                        children: curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(CourseCurriculum_CurriculumTab, {
                                topTab: idx === 0,
                                bottomTab: curriculumList.length - 1 === idx,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "index text-3xl font-semibold px-16",
                                            children: idx + 1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-2xl font-semibold",
                                            children: curriculumPoint.title
                                        })
                                    ]
                                })
                            }, idx))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanels, {
                        children: curriculumList?.length > 0 && curriculumList.map((curriculumPoint, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                padding: 0,
                                className: "h-42",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-loader-gray h-full p-11 flex flex-col rounded-r",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: " bg-white rounded flex-1 p-11 relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xl font-semibold mb-8",
                                                children: curriculumPoint.text1
                                            }),
                                            curriculumPoint.text2?.length > 0 && curriculumPoint.text2.map((txt, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-aphonic",
                                                    children: txt
                                                }, idx))
                                        ]
                                    })
                                })
                            }, idx))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "bg-tertiary text-white py-3.5 px-44 rounded my-9 ",
                children: "Download Curriculum"
            })
        ]
    });
};
/* harmony default export */ const CourseCurriculum_CurriculumNav = (CurriculumNav);

;// CONCATENATED MODULE: ./src/components/courses/CourseCurriculum/CourseCurriculum.tsx





const CourseCurriculumSection = ({ curriculumList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        className: "hidden xl:block",
        children: curriculumList?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    id: "course-curriculum"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                    title: "Course Curriculum",
                    subtitle: "Dowload the course curriculum",
                    className: "mb-8"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(CourseCurriculum_CurriculumNav, {
                    curriculumList: curriculumList
                })
            ]
        })
    });
};
/* harmony default export */ const CourseCurriculum = (CourseCurriculumSection);


/***/ }),

/***/ 7192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_course_list_CourseAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7786);
/* harmony import */ var _components_common_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7671);
/* harmony import */ var _components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3048);
/* harmony import */ var _components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4024);
/* harmony import */ var _components_common_Stat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(734);
/* harmony import */ var _components_common_HeroBg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6415);
/* harmony import */ var _components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_6__, _components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_7__]);
([_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_6__, _components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CourseHeroSection = ({ headline , subHeadline , heroImage , heroVideo , numberOfStudents , studentsTrained , workshopsConducted , placementDrives  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_HeroBg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid md:grid-cols-2 md:gap-8 xl:w-76 mx-5 md:mx-auto mb-6 md:mb-32 items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col md:pt-20",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-3xl md:text-hero text-primary",
                                        children: "Master Course"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-3xl md:text-hero font-semibold text-primary mb-5",
                                        children: [
                                            headline,
                                            ":"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-aphonic text-lg md:text-2xl mb-4 md:mb-10",
                                        children: subHeadline
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "course-rating flex place-items-center mb-6 md:mb-14",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Rating__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                rating: 4
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "student-number text-desc font-normal",
                                                children: [
                                                    " ",
                                                    numberOfStudents,
                                                    " students"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden md:flex md:flex-row md:gap-14 md:mb-20 pr-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative w-full h-52 md:h-96 max-w-full md:mt-5 mb-6 md:mb-14",
                                        children: heroVideo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "hidden lg:block",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: "/img/course_detail.png",
                                                        alt: "Course Detail Image",
                                                        fill: true
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    className: "absolute w-full lg:left-12 lg:top-8 lg:w-10/12 h-full lg:h-72 rounded",
                                                    src: heroVideo ?? "https://www.youtube.com/embed/2E73SftV0co",
                                                    title: "YouTube video player",
                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                                    allowFullScreen: true
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: heroImage,
                                            alt: "Course Detail Image",
                                            fill: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col md:hidden gap-10 mb-6 md:mb-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_course_list_CourseAttr__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Stat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        studentsTrained: studentsTrained,
                        workshopsConducted: workshopsConducted,
                        placementDrives: placementDrives
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseHeroSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7070);
/* harmony import */ var _styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const CourseFAQ = ({ courseName , faqList  })=>{
    const activeCard = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const handleMouseEnter = (idx)=>{
        activeCard.current = idx;
        const cards = document.querySelectorAll(".courseFaqCard");
        cards[idx].classList.add((_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeCard));
        if ([
            1,
            2
        ].includes(activeCard.current)) {
            cards[0].classList.remove((_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeCard));
        }
    };
    const handleMouseLeave = (idx)=>{
        const cards = document.querySelectorAll(".courseFaqCard");
        cards[idx].classList.remove((_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeCard));
        if ([
            1,
            2
        ].includes(activeCard.current)) {
            activeCard.current = 0;
            cards[0].classList.add((_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeCard));
        }
    };
    const getCardClass = (idx)=>{
        if (activeCard.current === idx) {
            return (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().activeCard);
        }
        return "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-5 md:mx-auto xl:w-76",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-primary text-center text-lg md:text-3xl font-semibold mb-5 md:mb-12",
                children: [
                    "Why",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-tertiary",
                        children: [
                            "\xa0",
                            courseName,
                            "\xa0"
                        ]
                    }),
                    "?"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().faqContainer),
                children: faqList?.length > 0 && faqList.map((faq, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `courseFaqCard ${(_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().faqcard)} ${getCardClass(idx)}`,
                        onMouseEnter: ()=>handleMouseEnter(idx),
                        onMouseLeave: ()=>handleMouseLeave(idx),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().question),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().questionNumber),
                                        children: [
                                            "Q",
                                            idx + 1
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().questionText),
                                        children: faq.question
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().questionText2),
                                        children: faq.question
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_courseFAQ_module_scss__WEBPACK_IMPORTED_MODULE_3___default().answer),
                                children: faq.answer
                            })
                        ]
                    }, (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.uuid)()))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseFAQ);


/***/ }),

/***/ 5529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_4__]);
_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CourseInfoNav = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const localLink = router.asPath.split("#")[1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " gap-8 items-center mb-5 mx-auto sticky top-0 bg-white shadow-courseDetailNav py-4 w-screen z-30",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden lg:flex w-full justify-between place-items-center xl:w-76 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#course-overview",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "course-overview" ? "text-tertiary" : "text-primary"}`,
                            children: "Course Overview"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#course-curriculum",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "course-curriculum" ? "text-tertiary" : "text-primary"}`,
                            children: "Course Curriculum"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#why-tap-academy",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "why-tap-academy" ? "text-tertiary" : "text-primary"}`,
                            children: "Why Tap Academy?"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#success-stories",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "success-stories" ? "text-tertiary" : "text-primary"}`,
                            children: "Success Stories"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#pricing",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "pricing" ? "text-tertiary" : "text-primary"}`,
                            children: "Pricing"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#faqs",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-bold ${localLink === "faqs" ? "text-tertiary" : "text-primary"}`,
                            children: "FAQs"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "justify-end md:flex-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex justify-end px-5 lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_RegisterButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseInfoNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6972:
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
/* harmony import */ var _components_common_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony import */ var _components_layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2439);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_5__);






const CourseSummary = ({ summaryList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "course-summary"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col-reverse lg:flex-row place-items-center px-5 mb-8 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:mr-24 mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/img/placement_assistance.png",
                            width: 300,
                            height: 374,
                            alt: "Placement Assistance"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Title__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                text: "What will you learn?",
                                className: "mb-8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "mb-8 px-5 md:px-0",
                                style: {
                                    listStyleImage: "url('/img/bullet.png')",
                                    listStylePosition: "outside"
                                },
                                children: summaryList?.length > 0 && summaryList.map((point)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4 pl-4",
                                        children: point
                                    }, (0,uuidv4__WEBPACK_IMPORTED_MODULE_5__.uuid)()))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSummary);


/***/ }),

/***/ 359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _slug_BasePaySection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/elements/Button.tsx
var Button = __webpack_require__(4539);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/courses/[slug]/SalaryBar.tsx



const Loader = ({ percentage , text , label  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "italic mb-2",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-loader-gray relative rounded-lg w-full border",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()(`bg-tertiary abosolute rounded-lg p-1.5 pl-7 left-0 `, `${percentage}`),
                    children: text && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white font-medium",
                        children: text
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SalaryBar = (Loader);

;// CONCATENATED MODULE: ./src/components/courses/[slug]/GlassdoorSalaryBars.tsx


const GlassdoorSalaryBars = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex my-3 md:my-8 justify-between items-baseline gap-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-20 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-36 bg-gd-salary-bar-blue"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-28 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-16 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-8 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-6 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-5 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-4 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-3 bg-gd-salary-bar-gray"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 rounded h-2 bg-gd-salary-bar-gray"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "limits flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "lowerlimit text-xs text-primary",
                            children: "₹3L"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lowerlimit text-xs text-primary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lowerlimit text-xs text-primary",
                                children: "Median: ₹7L"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "upperlimit text-xs text-primary",
                            children: "₹15L"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _slug_GlassdoorSalaryBars = (GlassdoorSalaryBars);

;// CONCATENATED MODULE: ./src/components/courses/[slug]/BasePaySection.tsx






const BasePaySection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full px-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " mx-auto xl:w-76 mt-52 mb-20 pt-115 xs:pt-80 md:pt-96 lg:pt-56 border border-primary2 rounded relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header w-10/12 mx-auto rounded-3xl shadow-gdSalaryBox absolute -top-14 -mt-20 left-0 right-0 bg-white p-10 mb-18 flex flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mr-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm lg:text-base font-semibold",
                                    children: "Average Base Pay"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-lg lg:text-3xl font-bold",
                                    children: [
                                        "₹ 6,50,000 ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-aphonic",
                                            children: "/yr"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm lg:text-base mb-4 lg:mb-10",
                                    children: "Same as national average"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm lg:text-base mb-5 text-aphonic",
                                    children: "Not including cash compensation"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    variant: "bg-transparent",
                                    className: "px-3 md:px-7 py-3 w-42 mb-3 md:mb-0 border border-primary2 rounded",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-primary text-xs md:text-base font-bold",
                                        children: "See More Insights"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full lg:w-7/12 flex items-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(_slug_GlassdoorSalaryBars, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8",
                    children: "Market Salaries"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-10 mb-9 grid lg:grid-cols-3 gap-7",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SalaryBar, {
                            percentage: "w-7/12",
                            text: "Rs.23.7 LPA",
                            label: "Maximum"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SalaryBar, {
                            percentage: "w-9/12",
                            text: "Rs.10.7 LPA",
                            label: "Average"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SalaryBar, {
                            percentage: "w-7/12",
                            text: "Rs.3 LPA",
                            label: "Minimum"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-center text-primary font-bold mb-9",
                    children: [
                        "View source:\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            target: "_blank",
                            href: "https://www.glassdoor.co.in/Salaries/pune-full-stack-developer-salary-SRCH_IL.0,4_IM1072_KO5,25.htm#:~:text=The%20average%20salary%20for%20Full,7%2C500%20%2D%20%E2%82%B94%2C04%2C016.",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-normal text-tertiary italic underline ",
                                children: "Glassdoor"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const _slug_BasePaySection = (BasePaySection);


/***/ }),

/***/ 2071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _slug_FooterFaqList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./src/components/courses/[slug]/FaqList.tsx





const FaqList = ({ headline , faqList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shadow rounded-sm mx-5 md:mx-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Accordion, {
            allowToggle: true,
            className: "pt-8 md:pt-11 mb-8 md:mb-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p text-xl md:text-2xl text-tertiary font-semibold text-center mb-8",
                    children: headline
                }),
                faqList.map((faq)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionItem, {
                        children: ({ isExpanded  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                                            flex: 1,
                                            justifyContent: "space-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    as: "span",
                                                    className: "ml-4 my-2",
                                                    textAlign: "left",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-primary font-semibold md:text-xl",
                                                        children: faq.question
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-none",
                                                    children: isExpanded ? /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMinus, {
                                                        fontSize: "20px"
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlinePlus, {
                                                        fontSize: "20px"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-aphonic pt-4 pb-3 pl-5",
                                            children: faq.answer
                                        })
                                    })
                                ]
                            })
                    }, faq.id))
            ]
        })
    });
};
/* harmony default export */ const _slug_FaqList = (FaqList);

;// CONCATENATED MODULE: ./src/components/courses/[slug]/FooterFaqList.tsx




const FooterFaqList = ({ headline , subHeadline , faqList1 , faqList2  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: "faqs"
            }),
            (faqList1?.length > 0 || faqList2?.length > 0) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                        title: headline,
                        subtitle: subHeadline,
                        className: "mb-4 md:mb-10 mx-5"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:grid md:grid-cols-2 gap-4 xl:w-76 mx-auto",
                        children: [
                            faqList1?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(_slug_FaqList, {
                                headline: "About Course",
                                faqList: faqList1
                            }),
                            faqList2?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(_slug_FaqList, {
                                headline: "Course Impact",
                                faqList: faqList2
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _slug_FooterFaqList = (FooterFaqList);


/***/ }),

/***/ 2439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("xl:w-76 mx-auto", className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 7831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7675);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7117);
/* harmony import */ var _components_common_banner_ValueForMoneyBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2441);
/* harmony import */ var _components_courses_CourseFAQ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _components_courses_CourseInfoNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5529);
/* harmony import */ var _components_courses_CourseCurriculum_CourseCurriculum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7299);
/* harmony import */ var _components_courses_CourseDetailHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7192);
/* harmony import */ var _components_common_why_us_WhyUs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1220);
/* harmony import */ var _components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9966);
/* harmony import */ var _components_courses_AboutCourse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5394);
/* harmony import */ var _components_courses_CourseSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6972);
/* harmony import */ var _components_courses_slug_FooterFaqList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2071);
/* harmony import */ var _components_courses_slug_BasePaySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(359);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1468);
/* harmony import */ var _services_placement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_courses_CourseInfoNav__WEBPACK_IMPORTED_MODULE_5__, _components_courses_CourseDetailHero__WEBPACK_IMPORTED_MODULE_7__, _services_course__WEBPACK_IMPORTED_MODULE_15__, _services_placement__WEBPACK_IMPORTED_MODULE_16__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_courses_CourseInfoNav__WEBPACK_IMPORTED_MODULE_5__, _components_courses_CourseDetailHero__WEBPACK_IMPORTED_MODULE_7__, _services_course__WEBPACK_IMPORTED_MODULE_15__, _services_placement__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const CourseDetailPage = ({ course , courseDetailPageInfo , placementList , faqList1 , faqList2 , placementPagination , courseList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_CourseDetailHero__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                headline: course.courseName,
                subHeadline: course.description,
                heroVideo: course.heroVideo,
                heroImage: course.heroImage?.data[0].attributes.url,
                numberOfStudents: course.numberOfStudents,
                studentsTrained: courseDetailPageInfo.studentsTrained,
                workshopsConducted: courseDetailPageInfo.workshopsConducted,
                placementDrives: courseDetailPageInfo.placementDrives
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_CourseInfoNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_AboutCourse__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                aboutCourse: course.aboutCourse
            }),
            course.courseSummary && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_CourseSummary__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                summaryList: course.courseSummary
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_slug_BasePaySection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            course.courseFAQ && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_CourseFAQ__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                courseName: course.courseName,
                faqList: course.courseFAQ
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_CourseCurriculum_CourseCurriculum__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                curriculumList: course.curriculumList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_why_us_WhyUs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                headline: courseDetailPageInfo.whyUsHeadline,
                subHeadline: courseDetailPageInfo.whyUsSubHeadline
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                headline: courseDetailPageInfo.achievementHeadline,
                subHeadline: courseDetailPageInfo.achievementSubHeadline,
                placementList: placementList,
                placementPagination: placementPagination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_ValueForMoneyBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                imgSrc: "/img/price-tag.png",
                price: course.price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_courses_slug_FooterFaqList__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                headline: courseDetailPageInfo.faqHeadline,
                subHeadline: courseDetailPageInfo.faqSubHeadline,
                faqList1: faqList1,
                faqList2: faqList2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                showFooterTop: true
            })
        ]
    });
};
const getStaticProps = async ({ locale , params  })=>{
    const courseDetailPageInfo = await _services_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getCourseDetailPageInformation */ .Z.getCourseDetailPageInformation(locale);
    const course = await _services_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getCourseBySlug */ .Z.getCourseBySlug(params.slug, locale);
    const placementList = await _services_placement__WEBPACK_IMPORTED_MODULE_16__/* ["default"].getPlacementList */ .Z.getPlacementList(locale, "*");
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    return {
        props: {
            course: {
                ...course?.data?.attributes,
                id: course.data.id,
                courseSummary: course.data.attributes.courseSummary?.data ?? null,
                courseFAQ: course.data.attributes.courseFAQ?.data ?? null
            },
            placementList: placementList.data.map((placement)=>({
                    ...placement.attributes,
                    id: placement.id,
                    companyImage: placement.attributes.companyImage?.data.attributes,
                    studentImage: placement.attributes.studentImage?.data.attributes
                })),
            placementPagination: placementList.meta.pagination,
            courseDetailPageInfo: courseDetailPageInfo?.data?.attributes,
            faqList1: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[0] : [],
            faqList2: course.data?.attributes.footerFaq?.length ? course.data?.attributes.footerFaq[1] : [],
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__.serverSideTranslations)(locale, [
                "common",
                "course-detail-page"
            ])
        },
        revalidate: 60
    };
};
const getStaticPaths = async ()=>{
    const courses = await _services_course__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getCourseList */ .Z.getCourseList();
    console.log("course list", courses);
    const paths = courses.data.map((course)=>({
            params: {
                slug: course.attributes.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseDetailPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1054:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.range");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 5856:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/go");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 7658:
/***/ ((module) => {

"use strict";
module.exports = require("react-odometerjs");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3398:
/***/ ((module) => {

"use strict";
module.exports = require("uuidv4");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,866,728,514,31,345,256,416,24], () => (__webpack_exec__(7831)));
module.exports = __webpack_exports__;

})();