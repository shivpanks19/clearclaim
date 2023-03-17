(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 688:
/***/ ((module) => {

// Exports
module.exports = {
	"level-2": "misc-style_level-2__WiBND",
	"level-3": "misc-style_level-3__3c1Q_"
};


/***/ }),

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CorporateProgram)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
;// CONCATENATED MODULE: external "@splidejs/react-splide"
const react_splide_namespaceObject = require("@splidejs/react-splide");
;// CONCATENATED MODULE: ./src/components/index/CorporateProgram/CorporateProgram.tsx





const CorporateProgramSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-28 w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                className: "mb-10",
                title: "Campus to Corporate Program",
                subtitle: "Your journey towards your dream job"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-80 md:w-[550px] lg:w-[750px] xl:w-76 h-24 h-48 md:h-80 xl:h-[623px] mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_splide_namespaceObject.Splide, {
                    options: {
                        rewind: true
                    },
                    "aria-label": "React Splide Example",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_splide_namespaceObject.SplideSlide, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-48 md:h-80 lg:h-96 xl:h-[623px] w-76",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/corp_program_1.jpg",
                                    alt: "Dream job journey 1",
                                    fill: true,
                                    sizes: "100vw"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_splide_namespaceObject.SplideSlide, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-48 md:h-80 lg:h-96 xl:h-[623px] w-76",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/corp_program_2.jpg",
                                    alt: "Dream job journey 2",
                                    fill: true,
                                    sizes: "100vw"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_splide_namespaceObject.SplideSlide, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-48 md:h-80 lg:h-96 xl:h-[623px] w-76",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/corp_program_3.jpg",
                                    alt: "Dream job journey 3",
                                    fill: true,
                                    sizes: "100vw"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CorporateProgram = (CorporateProgramSection);


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4947);



const DemoVideo = ({ url , headline , subHeadline  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: headline,
                subtitle: subHeadline
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "video-container relative xl:w-76 mx-auto px-5 mb-12 flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    className: "m-5 rounded-3xl sm:w-35 md:w-full h-48 md:h-160",
                    "data-src": url ?? "https://www.youtube.com/embed/2E73SftV0co",
                    title: "YouTube video player",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoVideo);


/***/ }),

/***/ 6510:
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
/* harmony import */ var _elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5736);
/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4539);
/* harmony import */ var _components_common_Stat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(734);
/* harmony import */ var _components_index_HumanRiver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4668);
/* harmony import */ var _components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3048);
/* harmony import */ var _components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2115);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_7__]);
_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const HomeHeroSection = ({ headline , subHeadline , studentsTrained , workshopsConducted , placementDrives , nextBatchDate , riverImages , riverImagesLv2 , riverImagesLv3  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
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
                                className: "text-3xl md:text-hero font-semibold text-primary mb-3 md:mb-5",
                                children: [
                                    headline,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-aphonic mb-4 md:mb-10",
                                children: [
                                    subHeadline,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex mb-3 md:mb-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-50",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_WorkshopButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        buttonStyleClass: "textButton",
                                        variant: "bg-transparent",
                                        rounded: "rounded-sm",
                                        className: "flex px-5 py-3 gap-3 place-items-center hidden lg-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: "/img/home/play.png",
                                                height: 32,
                                                width: 32,
                                                alt: "play",
                                                className: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                variant: "text-secondary",
                                                fontSize: "text-lg",
                                                fontWeight: "font-medium",
                                                children: t("Watch a demo video")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex place-items-center gap-3 text-xs md:text-base",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-primary font-medium",
                                        children: "> Next batch starts"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-tertiary font-bold",
                                        children: nextBatchDate && new Date(nextBatchDate).toDateString()
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-full h-96",
                                style: {
                                    alignSelf: "flex-end"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_HumanRiver__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    riverImages: riverImages,
                                    riverImagesLv2: riverImagesLv2,
                                    riverImagesLv3: riverImagesLv3
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "trust flex flex-col place-items-center pt-7 z-10 bg-lightblue",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2",
                                        style: {
                                            alignItems: "flex-end"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "text-primary ",
                                                children: "Trusted by"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "text-tertiary md:text-4xl",
                                                fontWeight: "font-bold",
                                                children: [
                                                    studentsTrained,
                                                    "+"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "text-primary",
                                                children: "students"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "text-primary",
                                        children: "all over India"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Stat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                studentsTrained: studentsTrained,
                workshopsConducted: workshopsConducted,
                placementDrives: placementDrives
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SocialButtonList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeHeroSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4668:
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
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8998);
/* harmony import */ var _styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_misc_style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(688);
/* harmony import */ var _styles_misc_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_misc_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);





const HumanRiver = ({ riverImages , riverImagesLv2 , riverImagesLv3  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full relative overflow-hidden",
        children: [
            riverImages,
            riverImagesLv2,
            riverImagesLv3
        ].map((imgList, groupIdx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageLayer, {
                level: groupIdx + 1,
                imgList: imgList
            }, groupIdx))
    });
};
const ImageLayer = ({ level , imgList  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute h-full w-full grid grid-cols-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative flex gap-5 w-96",
            children: imgList?.length > 0 && imgList.map((img, imgIdx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `absolute w-36 h-48 rounded-xl shadow overflow-hidden ${(_styles_misc_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`level-${level}`]}
										${getAbsolutePositioningClass(level + 1, imgIdx)}
										${(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().upInfinte)} ${(_styles_animation_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`speed-${level}`]}`,
                    style: {
                        top: 550,
                        animationDelay: `${imgIdx * 2.2}s`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: img.url,
                        fill: true,
                        priority: true,
                        alt: "Hero Image"
                    })
                }, imgIdx))
        })
    });
};
const getAbsolutePositioningClass = (colNum, imgIdx)=>{
    switch(colNum){
        case 2:
            return imgIdx % 2 === 0 ? `left-0` : "right-0";
            break;
        case 3:
            if ((imgIdx + 3) % 3 === 0) return "left-0";
            if ((imgIdx + 3) % 3 === 1) return "left-32";
            if ((imgIdx + 3) % 3 === 2) return "right-0";
            break;
        case 4:
            if ((imgIdx + 4) % 4 === 0) return "left-0";
            if ((imgIdx + 4) % 4 === 1) return "left-16";
            if ((imgIdx + 4) % 4 === 2) return "right-16";
            if ((imgIdx + 4) % 4 === 3) return "right-0";
            break;
        default:
            break;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanRiver);


/***/ }),

/***/ 3057:
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




const SpecialSection = ({ headline , subHeadline  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: headline,
                subtitle: subHeadline,
                className: "mb-16 md:mb-32 mx-5"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cards xl:w-76 md:mb-20 flex flex-col items-center xl:flex-row md:justify-between mx-5 md:mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded flex flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/img/home/personalized-content.png",
                                    alt: "Personalised Course Curriculum",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title text-sm md:text-xl text-title font-semibold text-center",
                                children: "Personalised Course Curriculum"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "subtitle text-desc text-xs md:text-base text-center ",
                                children: "We offer individual attention to choose right course for your career"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded flex flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 md:px-10 mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/img/home/placement-opportunity.png",
                                    alt: "Placement Opportunity",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title text-sm md:text-xl text-title font-semibold text-center grow",
                                children: "Placement Opportunity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "subtitle text-desc text-xs md:text-base text-center",
                                children: "Getting unlimited placement opportunities till you get placed"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded flex flex-col items-center gap-3 shadow-md transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg md:w-96 pb-3.5 md:pb-10 px-5 md:px-10 mb-11 md:mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-20 h-20 md:w-32 md:h-32 -mt-10 md:-mt-12 self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/img/home/mentorship.png",
                                    alt: "Mentorship",
                                    fill: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title text-sm md:text-xl text-title font-semibold text-center grow",
                                children: "1:1 Mentorship"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "subtitle text-desc text-xs md:text-base text-center",
                                children: "Our pool of mentors ensure your every doubt is addressed immediately"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecialSection);


/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_index_HomeHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6510);
/* harmony import */ var _components_common_why_us_WhyUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1220);
/* harmony import */ var _components_common_review_list_ReviewList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1957);
/* harmony import */ var _components_index_Special__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3057);
/* harmony import */ var _components_common_course_list_CourseList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8327);
/* harmony import */ var _components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3548);
/* harmony import */ var _components_index_Recognition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8124);
/* harmony import */ var _components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9966);
/* harmony import */ var _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4117);
/* harmony import */ var _components_index_CorporateProgram_CorporateProgram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6247);
/* harmony import */ var _components_index_DemoVideo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2282);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8476);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1468);
/* harmony import */ var _services_placement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9197);
/* harmony import */ var _services_review__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4982);
/* harmony import */ var _services_recruiter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_index_HomeHero__WEBPACK_IMPORTED_MODULE_3__, _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_11__, _services_home__WEBPACK_IMPORTED_MODULE_15__, _services_course__WEBPACK_IMPORTED_MODULE_16__, _services_placement__WEBPACK_IMPORTED_MODULE_17__, _services_review__WEBPACK_IMPORTED_MODULE_18__, _services_recruiter__WEBPACK_IMPORTED_MODULE_19__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_index_HomeHero__WEBPACK_IMPORTED_MODULE_3__, _components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_11__, _services_home__WEBPACK_IMPORTED_MODULE_15__, _services_course__WEBPACK_IMPORTED_MODULE_16__, _services_placement__WEBPACK_IMPORTED_MODULE_17__, _services_review__WEBPACK_IMPORTED_MODULE_18__, _services_recruiter__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const Home = ({ homeInfo , courseList , placementList , reviewList , recruiterList , reviewPagination , placementPagination  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_HomeHero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                headline: homeInfo.headline,
                subHeadline: homeInfo.subHeadline,
                studentsTrained: homeInfo.studentsTrained,
                workshopsConducted: homeInfo.workshopsConducted,
                placementDrives: homeInfo.placementDrives,
                nextBatchDate: homeInfo.nextBatchDate,
                riverImages: homeInfo.riverImages,
                riverImagesLv2: homeInfo.riverImagesLv2,
                riverImagesLv3: homeInfo.riverImagesLv3
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_DemoVideo__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                headline: homeInfo.demoVideoHeadline,
                subHeadline: homeInfo.demoVideoSubHeadline,
                url: homeInfo.videoURL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_course_list_CourseList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                headline: homeInfo.courseHeadline,
                subHeadline: homeInfo.courseSubHeadline,
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_Special__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                headline: homeInfo.specialSectionHeadline,
                subHeadline: homeInfo.specialSectionSubHeadline
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_CorporateProgram_CorporateProgram__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            placementList?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_placement_list_PlacementList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                headline: homeInfo.achievementHeadline,
                subHeadline: homeInfo.achievementSubHeadline,
                placementList: placementList,
                placementPagination: placementPagination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_review_list_ReviewList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                headline: homeInfo.reviewHeadline,
                subHeadline: homeInfo.reviewSubHeadline,
                reviewList: reviewList,
                reviewPagination: reviewPagination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                imgSrc: "/img/coding_bootcamp_1.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_why_us_WhyUs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                headline: homeInfo.whyUsHeadline,
                subHeadline: homeInfo.whyUsSubHeadline
            }),
            recruiterList?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RecruiterList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                headline: homeInfo.recruiterHeadline,
                subHeadline: homeInfo.recruiterSubHeadline,
                recruiterList: recruiterList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_Recognition__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                headline: homeInfo.recognitionHeadline,
                subHeadline: homeInfo.recognitionSubHeadline
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_CodingBootcampBanner__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                imgSrc: "/img/coding_bootcamp_2.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    const homeInfo = await _services_home__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getHomePageInformation */ .Z.getHomePageInformation(locale, "*");
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_16__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*", "courseIdx");
    const placementList = await _services_placement__WEBPACK_IMPORTED_MODULE_17__/* ["default"].getPlacementList */ .Z.getPlacementList(locale, "*");
    const reviewList = await _services_review__WEBPACK_IMPORTED_MODULE_18__/* ["default"].getReviewList */ .Z.getReviewList(locale, "*");
    const recruiterList = await _services_recruiter__WEBPACK_IMPORTED_MODULE_19__/* ["default"].getRecruiterList */ .Z.getRecruiterList(locale, "*");
    return {
        props: {
            homeInfo: {
                ...homeInfo?.data?.attributes,
                riverImages: homeInfo.data.attributes.riverImages?.data.map((img)=>({
                        id: img.id,
                        ...img.attributes
                    })),
                riverImagesLv2: homeInfo.data.attributes.riverImagesLv2?.data.map((img)=>({
                        id: img.id,
                        ...img.attributes
                    })),
                riverImagesLv3: homeInfo.data.attributes.riverImagesLv3?.data.map((img)=>({
                        id: img.id,
                        ...img.attributes
                    }))
            },
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            placementList: placementList.data.map((placement)=>({
                    ...placement.attributes,
                    id: placement.id,
                    companyImage: placement.attributes.companyImage?.data.attributes,
                    studentImage: placement.attributes.studentImage?.data.attributes
                })),
            reviewList: reviewList.data.map((review)=>({
                    ...review.attributes,
                    id: review.id,
                    studentImage: review.attributes.studentImage?.data.attributes
                })),
            recruiterList: recruiterList.data.map((recruiter)=>({
                    ...recruiter.attributes,
                    id: recruiter.id,
                    recruiterImage: recruiter.attributes.recruiterImage?.data[0].attributes
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_14__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8476:
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


function getHomePageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getHomePageInformation */ .Z.getHomePageInformation, {
        _locale: locale,
        populate
    });
}
function getInTouch(email) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .post */ .v)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getInTouch */ .Z.getInTouch, {}, {
        email
    });
}
const HomeService = {
    getHomePageInformation,
    getInTouch
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeService);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,866,728,514,31,345,756,256,496,327,416,124], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();