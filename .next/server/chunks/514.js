exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 5725:
/***/ ((module) => {

// Exports
module.exports = {
	"outlineButton": "Button_outlineButton__krDMG"
};


/***/ }),

/***/ 1559:
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _services_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(836);
/* harmony import */ var _components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4947);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_registration__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_registration__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








var ModeOfStudy;
(function(ModeOfStudy) {
    ModeOfStudy["ONLINE"] = "Online";
    ModeOfStudy["OFFLINE"] = "Offline";
})(ModeOfStudy || (ModeOfStudy = {}));
const RegistrationForm = ({ isOpen , onClose  })=>{
    const [modeOfStudy, setModeOfStudy] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(ModeOfStudy.ONLINE);
    const { register , handleSubmit , setValue , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        defaultValues: {
            modeOfStudy: ModeOfStudy.ONLINE
        }
    });
    const onSubmit = async (data)=>{
        // @ts-ignore
        (async ()=>{
            await react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.promise(_services_registration__WEBPACK_IMPORTED_MODULE_4__/* ["default"].postRegistrationForm */ .Z.postRegistrationForm(data), {
                success: "Thank you for registration!",
                error: "Something went wrong! Please try again!"
            });
            reset();
            onClose();
        })();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {
            isOpen: isOpen,
            onClose: onClose,
            size: "xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {
                    rounded: "3xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
                            paddingX: 0,
                            paddingY: 8,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative overflow-hidden xs:pr-44 pb-100 md:pb-0 py-3 px-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SectionHeadline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        title: "Register Yourself",
                                        subtitle: "Book your Free Seat",
                                        className: "mb-6"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "flex flex-col gap-3",
                                        action: "",
                                        id: "registration-form",
                                        method: "POST",
                                        onSubmit: handleSubmit(onSubmit),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                                                className: "mb-6",
                                                variant: "floating",
                                                id: "fullname",
                                                isRequired: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                        className: "h-24",
                                                        placeholder: " ",
                                                        ...register("fullname")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                                                        children: "Name"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                                                className: "mb-6",
                                                variant: "floating",
                                                id: "email",
                                                isRequired: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                        className: "h-24",
                                                        placeholder: " ",
                                                        type: "email",
                                                        ...register("email")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                                                        children: "Email Id:"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                                                className: "mb-6",
                                                variant: "floating",
                                                id: "phone",
                                                isRequired: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                        className: "h-24",
                                                        placeholder: " ",
                                                        ...register("phone")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                                                        children: "Phone"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                                                className: "mb-6",
                                                variant: "floating",
                                                id: "graduationYear",
                                                isRequired: true,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                                        placeholder: "Select Graduation Year",
                                                        ...register("graduationYear"),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2016",
                                                                children: "2016"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2017",
                                                                children: "2017"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2018",
                                                                children: "2018"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2019",
                                                                children: "2019"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2020",
                                                                children: "2020"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2021",
                                                                children: "2021"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2022",
                                                                children: "2022"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2023",
                                                                children: "2023"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2024",
                                                                children: "2024"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2025",
                                                                children: "2025"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "2026",
                                                                children: "2026"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
                                                        children: "Graduation"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.RadioGroup, {
                                                className: "mb-6",
                                                onChange: (val)=>{
                                                    setModeOfStudy(val);
                                                    setValue("modeOfStudy", val);
                                                },
                                                value: modeOfStudy,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-aphonic",
                                                        children: "Preferred mode of learning?"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                                        direction: "row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Radio, {
                                                                value: "Online",
                                                                children: "Online"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Radio, {
                                                                value: "Offline",
                                                                children: "Offline"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "submit",
                                                value: "Take me in!",
                                                className: "w-full bg-tertiary text-white font-medium px-5 py-3 rounded col-span-2"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute right-16 -bottom-10 md:-right-16 md:-bottom-16 w-44 md:w-64",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: "/img/girl_jump.png",
                                            width: "247",
                                            height: "539",
                                            alt: "Girl Jump"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4947:
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



const SectionHeadline = ({ title , subtitle , className =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-center gap-6 mb-1 md:mb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/img/home/line.png",
                        height: 6,
                        width: 49,
                        alt: "Line"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-tertiary text-xs md:text-xl text-center",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/img/home/line.png",
                        height: 6,
                        width: 49,
                        alt: "Line"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-primary md:text-3xl font-semibold flex justify-center text-center",
                children: subtitle
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeadline);


/***/ }),

/***/ 2115:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const SocialButtonList = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hidden md:grid absolute right-5 top-56 gap-7 place-items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "https://www.youtube.com/channel/UCvT21bzLRHrnAc-F1SRqRSw",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/img/social_youtube.png",
                    height: 33,
                    width: 33,
                    alt: "Youtube"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "https://instagram.com/tapacademy.online?igshid=NTdlMDg3MTY=",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/img/social_instagram.png",
                    height: 33,
                    width: 33,
                    alt: "Instagram"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "https://www.facebook.com/thetapacademy",
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/img/social_facebook.png",
                    height: 33,
                    width: 33,
                    alt: "Facebook"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-primary font-medium rotate-180 z-20",
                style: {
                    writingMode: "vertical-lr"
                },
                children: "Find us on"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialButtonList);


/***/ }),

/***/ 7494:
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
/* harmony import */ var _elements_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5736);
/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4539);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_7__]);
_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const JoinNowButton = ({ className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const classNameList = className ? className.split(" ") : [];
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        buttonStyleClass: "outlineButton",
        variant: "bg-transparent",
        rounded: "rounded-sm",
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("px-5 py-3 grow", ...classNameList),
        onClick: onOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "text-secondary",
                fontSize: "text-lg",
                fontWeight: "font-medium",
                children: t("Join Now for FREE")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isOpen: isOpen,
                onClose: onClose
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinNowButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Footer)
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
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(4980);
;// CONCATENATED MODULE: ./src/components/courses/[slug]/CourseDetailFooterTop.tsx


const CourseDetailFooterTop = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: "bg-footer-bg text-white text-xl py-3 font-medium text-center border-b-2 border-white flex align-middle justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-4xl",
                children: "\uD83D\uDC49"
            }),
            "\xa0 Have queries? Call us at +91 9412345678 \xa0",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-4xl",
                children: "\uD83D\uDC48"
            })
        ]
    });
};
/* harmony default export */ const _slug_CourseDetailFooterTop = (CourseDetailFooterTop);

;// CONCATENATED MODULE: ./src/components/layout/Footer.tsx






const Footer = ({ showFooterTop  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            showFooterTop && /*#__PURE__*/ jsx_runtime_.jsx(_slug_CourseDetailFooterTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-footer-bg pt-7 md:pt-12 px-5 pb-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content md:grid md:grid-cols-26 xl:w-76 mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col col-span-7",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative w-20 h-9 md:w-36 md:h-14 mb-3 md:mb-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/logo_dark.png",
                                        fill: true,
                                        alt: "logo"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm md:text-base text-gray mb-6 md:mb-7",
                                    children: "An online skilling platform"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-4 md:gap-6 mb-5 md:mb-11 place-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-7 h-7 md:w-9 md:h-9 relative",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.facebook.com/thetapacademy",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/img/fb_white.png",
                                                    fill: true,
                                                    alt: "Facebook link"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-7 h-7 md:w-9 md:h-9 relative",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://instagram.com/tapacademy.online?igshid=NTdlMDg3MTY=",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/img/ig_white.png",
                                                    fill: true,
                                                    alt: "Instagram link"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://in.linkedin.com/company/thetapacademy",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-none w-7 h-7 md:w-9 md:h-9 relative",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/img/linkedin_white.png",
                                                    fill: true,
                                                    alt: "Linkedin link"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-6 h-4 md:w-9 md:h-6 relative",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.youtube.com/channel/UCvT21bzLRHrnAc-F1SRqRSw",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/img/yt_white.png",
                                                    fill: true,
                                                    alt: "Youtube link"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm md:text-xl font-semibold text-white mb-3 md:mb-5",
                                    children: "Learn at a tap!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative w-40 h-12 md:w-52 md:h-14 mb-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://bit.ly/TAwebsiteapp",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/img/android_app.png",
                                            fill: true,
                                            alt: "Android app link"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-2 mb-6 col-span-11",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "navGrp flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-xl font-semibold text-white",
                                            children: "Tap Academy"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.blogs */.Z.blogs().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Blogs"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.aboutUs */.Z.aboutUs().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "About us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.contactUs */.Z.contactUs().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Contact us"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "navGrp flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-xl font-semibold text-white",
                                            children: "Links"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.courses */.Z.courses().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Courses"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.records */.Z.records().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Records"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.studentReviews */.Z.studentReviews().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Student Reviews"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: routes/* default.privacyPolicy */.Z.privacyPolicy().pathname,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs md:text-base text-gray2",
                                                children: "Privacy Policy"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col col-span-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-4 md:gap-6 mb-5 md:mb-11 mt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-3 h-4 md:w-5 md:h-5 relative mt-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/img/location_white.png",
                                                fill: true,
                                                alt: "Location link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-base text-medium text-white",
                                            children: "Bldg 3, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, Bengaluru, Karnataka 560076"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-4 md:gap-6 mb-5 md:mb-11",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-4 h-4 md:w-6 md:h-6 relative mt-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/img/mail_white.png",
                                                fill: true,
                                                alt: "Email link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-base text-medium text-white",
                                            children: "info@thetapacademy.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-4 md:gap-6 mb-5 md:mb-11",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-none w-4 h-4 md:w-6 md:h-6 relative mt-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/img/phone_white.png",
                                                fill: true,
                                                alt: "Phone link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-base text-medium text-white",
                                            children: "+91 8069878321"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/greenery.svg",
                            className: "absolute left-0 bottom-0 md:hidden",
                            width: "693",
                            height: "89",
                            alt: "Greenery"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/greenery_lg.svg",
                            className: "absolute left-0 bottom-0 hidden md:block",
                            width: "1591",
                            height: "89",
                            alt: "Greenery"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Footer = (Footer);


/***/ }),

/***/ 3675:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2728);
/* harmony import */ var _components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_7__]);
_components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MobileViewNavbar = ({ navbarItems , activate , toggleNav  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: activate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fixed top-0 left-0 w-screen h-screen bg-white z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "absolute left-8 top-8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute right-3 bottom-28",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/img/girl_jump.png",
                        width: "187",
                        height: "482",
                        alt: "Girl Jump"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrClose, {
                    className: "absolute top-8 right-8",
                    onClick: toggleNav
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-9 ml-7 mt-32 relative ",
                    children: navbarItems && navbarItems.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: navItem.link,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `relative inline-flex justify-center font-regular text-primary ${router.asPath === navItem.link && "text-tertiary"}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "flex-none",
                                        children: navItem.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `absolute -bottom-2 bg-tertiary rounded ${router.asPath === navItem.link && " w-10/12 h-2"}`
                                    })
                                ]
                            })
                        }, navItem.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute px-4 bottom-8 w-full flex place-items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileViewNavbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2728);
/* harmony import */ var _components_layout_MobileViewNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3675);
/* harmony import */ var _components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7494);
/* harmony import */ var _data_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3654);
/* harmony import */ var _elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5736);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_MobileViewNavbar__WEBPACK_IMPORTED_MODULE_2__, _components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layout_MobileViewNavbar__WEBPACK_IMPORTED_MODULE_2__, _components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













/*
 * TODO: Navbar toggle view breakpoint issue investigation
 * Ideally we need `md` as view toggle break-point
 * Experienced some issues in view on `ipad-sized` devices when view toggle break-point was `md`
 * To tackle that issue view toggle break-point is set to `lg`
 * To change break-point - change all `lg:` prefixed classes to `md:` prefixed here and in MobileViewNavbar component
 */ const Navbar = ({ courseList  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const [isMobileNavbarVisible, setIsMobileNavbarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [navBg, setNavBg] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("bg-lightblue");
    const [navItems, setNavItems] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(_data_staticData__WEBPACK_IMPORTED_MODULE_4__/* .navItems */ .te);
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const toggleNavbar = ()=>{
        if (isMobileNavbarVisible) {
            setIsMobileNavbarVisible(false);
        } else {
            setIsMobileNavbarVisible(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        const scrollHandler = ()=>{
            console.log("scroll", window.scrollY);
            if (window.scrollY > 0) {
                setNavBg("bg-white shadow-navbar");
            } else {
                setNavBg("bg-lightblue");
            }
        };
        window.addEventListener("scroll", scrollHandler, true);
        return window.removeEventListener("scroll", scrollHandler);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (courseList?.length) {
            const newNavItems = navItems;
            const courseLink = newNavItems.find((item)=>item.link === "/courses");
            const subLinks = courseList.map((course)=>({
                    id: course.id,
                    title: course.courseName,
                    link: `/courses/${course.slug}`,
                    target: "_blank"
                }));
            newNavItems[newNavItems.indexOf(courseLink)] = {
                ...courseLink,
                subLinks
            };
            setNavItems(JSON.parse(JSON.stringify(newNavItems)));
        }
    }, [
        courseList
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky top-0 left-0 z-30",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-screen grid place-items-center ${navBg}`,
            children: [
                !isMobileNavbarVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `py-4 w-full mdxl:w-76 transition-all`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center pl-4 pr-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        logoSize: "small"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "-my-2 lg:hidden",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 focus:outline-none",
                                    onClick: toggleNavbar,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: t("openMenu")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            src: "/img/ham.png",
                                            width: 16,
                                            height: 12,
                                            alt: "menu icon",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "hidden lg:flex gap-8 text-secondary",
                                children: navItems.map((item, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: item.subLinks?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Popover, {
                                            trigger: "hover",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.PopoverTrigger, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: item.link,
                                                        target: item.target,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex gap-1 place-items-center text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    className: `font-medium relative text-secondary grid ${item.className && item.className} ${item.link === asPath && "text-tertiary"}`,
                                                                    cursor: "cursor-pointer",
                                                                    children: [
                                                                        item.title,
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: `${item.link === asPath && "w-10 h-1 mx-auto rounded bg-tertiary"}`
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_12__.GoTriangleDown, {})
                                                                })
                                                            ]
                                                        })
                                                    }, index)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.PopoverContent, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.PopoverBody, {
                                                        padding: 0,
                                                        children: item.subLinks.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "py-3 hover:bg-lightblue font-semibold text-lg px-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    href: item.link,
                                                                    target: item.target,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        className: `font-semibold relative px-3 text-secondary grid ${item.className && item.className} ${item.link === asPath && "text-tertiary"}`,
                                                                        cursor: "cursor-pointer",
                                                                        children: [
                                                                            item.title,
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: `${item.link === asPath && "w-10 h-1 mx-auto rounded bg-tertiary"}`
                                                                            })
                                                                        ]
                                                                    })
                                                                }, index)
                                                            }, item.id))
                                                    })
                                                })
                                            ]
                                        }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: item.link,
                                            target: item.target,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                className: `font-medium relative text-secondary grid place-items-center ${item.className && item.className} ${item.link === asPath && "text-tertiary"}`,
                                                cursor: "cursor-pointer",
                                                children: [
                                                    item.title,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: `${item.link === asPath && "w-10 h-1 mx-auto rounded bg-tertiary"}`
                                                    })
                                                ]
                                            })
                                        }, index)
                                    }, item.id);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden lg:flex items-center justify-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_button_JoinNowButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    className: "w-full"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_MobileViewNavbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    activate: isMobileNavbarVisible,
                    navbarItems: navItems,
                    toggleNav: toggleNavbar
                })
            ]
        })
    });
};
Navbar.defaultProps = {
    invertColors: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "te": () => (/* binding */ navItems)
/* harmony export */ });
/* unused harmony exports contactUsFormLink, humanRiverData, socialMediaLinks */
// import { toast } from 'react-hot-toast';
const contactUsFormLink = "/contact-us";
const navItems = [
    {
        id: 1,
        title: "Courses",
        link: "/courses",
        target: "_self"
    },
    {
        id: 2,
        title: "About Us",
        link: "/about-us",
        target: "_self"
    },
    {
        id: 3,
        title: "Records",
        link: "/records",
        target: "_self"
    },
    {
        id: 4,
        title: "Reviews",
        link: "/student-reviews",
        target: "_self"
    },
    {
        id: 5,
        title: "Drives",
        link: "/upcoming-drives",
        target: "_self"
    },
    {
        id: 6,
        title: "Contact Us",
        link: "/contact-us",
        target: "_self"
    },
    {
        id: 7,
        title: "Blogs",
        link: "/blogs",
        target: "_self"
    },
    {
        id: 8,
        title: "Events",
        link: "/events",
        target: "_self"
    }
];
// export const comingSoonHandler = (navItem: NavItem): void => {
// 	if (!navItem.link || navItem.link === '#') {
// 		toast.success('Coming Soon...', { duration: 2000 });
// 	}
// };
const humanRiverData = [
    {
        src: "/img/riverImages/adarsh.jpg",
        level: 1,
        speed: 9
    },
    {
        src: "/img/riverImages/kashmira.jpg",
        level: 1,
        speed: 9
    },
    {
        src: "/img/riverImages/nikitha.jpeg",
        level: 1,
        speed: 9
    },
    {
        src: "/img/riverImages/niva.jpeg",
        level: 1,
        speed: 9
    },
    {
        src: "/img/riverImages/omer.jpg",
        level: 2,
        speed: 15
    },
    {
        src: "/img/riverImages/rahul.jpg",
        level: 2,
        speed: 15
    },
    {
        src: "/img/riverImages/raja.jpeg",
        level: 2,
        speed: 15
    },
    {
        src: "/img/riverImages/saptarishi.jpeg",
        level: 2,
        speed: 15
    },
    {
        src: "/img/riverImages/shameem.jpg",
        level: 2,
        speed: 15
    },
    {
        src: "/img/riverImages/shashank.jpeg",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/siva.jpg",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/swapnil.jpg",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/tejas.png",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/venkatesh.jpg",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/vinaykumar.jpg",
        level: 3,
        speed: 20
    },
    {
        src: "/img/riverImages/yasmeen.jpg",
        level: 3,
        speed: 20
    }
];
const socialMediaLinks = {};


/***/ }),

/***/ 4539:
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
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Button = ({ children , className , buttonStyleClass , type , variant , shadow , rounded , onClick , onSubmit  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant, shadow, rounded, `${(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[buttonStyleClass]}`, ...className.split(" ")),
        type: type,
        onClick: onClick,
        onSubmit: (event)=>{
            event.preventDefault();
            event.stopPropagation();
            onSubmit(event);
        },
        children: children
    });
};
Button.defaultProps = {
    className: "",
    type: "button",
    variant: "bg-primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 5736:
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



const Text = ({ children , span , className , fontStyle , fontSize , fontWeight , align , variant , decoration , transform , cursor , style ={}  })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(fontStyle, fontSize, fontWeight, align, variant, decoration, transform, cursor, ...className.split(" "));
    if (span) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: classes,
            style: style,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes,
        style: style,
        children: children
    });
};
Text.defaultProps = {
    className: "",
    span: false,
    fontSize: "text-base",
    fontWeight: "font-normal"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 1468:
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


function getCourseListPageInformation(locale) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCourseListPageInformation */ .Z.getCourseListPageInformation, {
        _locale: locale
    });
}
function getCourseDetailPageInformation(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCourseDetailPageInformation */ .Z.getCourseDetailPageInformation, {
        _locale: locale,
        populate
    });
}
function getCourseList(_locale, populate, sort) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCourseList */ .Z.getCourseList, {
        _locale,
        populate,
        sort
    });
}
function getCourseBySlug(slug, _locale) {
    const url = `${_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCourseList */ .Z.getCourseList}/${slug}`;
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(url, {
        _locale
    });
}
const CourseListPageService = {
    getCourseListPageInformation,
    getCourseDetailPageInformation,
    getCourseList,
    getCourseBySlug
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseListPageService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 836:
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


function postRegistrationForm(formData, locale) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .post */ .v)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].postRegistrationForm */ .Z.postRegistrationForm, {}, {
        locale,
        data: formData
    });
}
const RegistrationService = {
    postRegistrationForm
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "v": () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_toCamelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://admin.thetapacademy.com/api",
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "content-type": "application/json"
    }
});
const requestFailureCallback = (url, error)=>{
    if (error.response) {
        console.log(`Request Failed for ${url}: The request was made and the server responded with erroneous status code`, error.response.data);
    } else if (error.request) {
        console.log(`Request Failed for ${url}: The request was made but no response was received`);
    } else {
        console.log(`Error due to bad request configuration for ${url}`, error.message);
    }
    throw error;
};
const camelizeKeys = (obj)=>{
    if (Array.isArray(obj)) {
        return obj.map((v)=>camelizeKeys(v));
    } else if (obj != null && obj.constructor === Object) {
        return Object.keys(obj).reduce((result, key)=>({
                ...result,
                [(0,_utils_toCamelCase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key)]: camelizeKeys(obj[key])
            }), {});
    }
    return obj;
};
const get = (url, params)=>{
    console.log("URL", url);
    console.log("process.env.NEXT_PUBLIC_REST_SERVER_BASE_URL", "https://admin.thetapacademy.com/api");
    return instance.get(url, {
        params
    }).then((response)=>camelizeKeys(response.data)).catch((error)=>requestFailureCallback(url, error));
};
const post = (url, params, data)=>{
    return instance.post(url, data, {
        params
    }).then((response)=>camelizeKeys(response.data)).catch((error)=>requestFailureCallback(url, error));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Services = {
    getHomePageInformation: "home",
    getCourseListPageInformation: "course-list-page",
    getCourseDetailPageInformation: "course-detail-page",
    getContactUsInformation: "contact-us-page",
    getStudentReviewPageInformation: "student-review-page",
    getRecordPageInformation: "record-page",
    getCourseList: "courses",
    getPlacementList: "placements",
    getReviewList: "reviews",
    getRecruiterList: "recruiters",
    getFaqList: "faq",
    postContactUsForm: "enquiries",
    postRegistrationForm: "students",
    getClientTestimonials: "testimonials",
    getTeamMembers: "team-members",
    getInTouch: "home/get-in-touch",
    subscribe: "subscribers",
    getClientServices: "services",
    getClientServicesCategories: "service-categories",
    getServicePageStaticData: "service-page-list-data",
    getAboutUsInformation: "about-us",
    getDrivePageInformation: "drives-page",
    getDriveList: "drives",
    getTapEventPageInformation: "event-page",
    getTapEventList: "events",
    getBlogs: "blogs",
    getBlog: "blogs",
    getBlogsCount: "blogs/count",
    getBlogsPageStaticData: "blog-list-page",
    getBlogCategories: "content-categories",
    sendContactQuery: "contact-us",
    reqQoute: "quotes",
    getProducts: "products",
    getProductHeader: "product-header",
    getPortfolios: "portfolios",
    getPortfolio: "portfolios",
    getPortfolioCount: "portfolios/count",
    getPortfolioCategories: "portfolio-categories",
    getPortfolioStaticData: "portfolio-list-page-data"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);


/***/ }),

/***/ 4980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactUs = ()=>{
    return {
        pathname: "/contact-us"
    };
};
const blogs = (page, _q, contentCategoryId)=>{
    return {
        pathname: "/blogs",
        query: {
            page,
            _q,
            contentCategory: contentCategoryId
        }
    };
};
const aboutUs = ()=>{
    return {
        pathname: "/about-us"
    };
};
const courses = ()=>{
    return {
        pathname: "/courses"
    };
};
const courseDetail = (slug)=>{
    return {
        pathname: `/courses/${slug}`
    };
};
const records = ()=>{
    return {
        pathname: "/records"
    };
};
const events = (page, _q)=>{
    return {
        pathname: "/events",
        query: {
            page,
            _q
        }
    };
};
const studentReviews = ()=>{
    return {
        pathname: "/student-reviews"
    };
};
const blogsByCategory = (category, page)=>{
    return {
        pathname: `/blogs/${category.slug}`,
        ...page && {
            query: {
                page
            }
        }
    };
};
const blog = (category, slug)=>{
    return {
        pathname: `/blogs/${category.slug}/${slug}`
    };
};
const privacyPolicy = (page)=>{
    return {
        pathname: "/privacy-policy",
        query: {
            page
        }
    };
};
const Routes = {
    contactUs,
    aboutUs,
    blogs,
    courses,
    courseDetail,
    records,
    events,
    studentReviews,
    blogsByCategory,
    blog,
    privacyPolicy
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ }),

/***/ 9824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ toCamelCase)
/* harmony export */ });
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, "");
}


/***/ })

};
;