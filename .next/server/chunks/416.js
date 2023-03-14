"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(627);
/* harmony import */ var odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(odometer_themes_odometer_theme_default_css__WEBPACK_IMPORTED_MODULE_3__);




let loadedCallback = null;
let loaded = false;
const Odometer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async ()=>{
    const mod = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7658, 23));
    loaded = true;
    if (loadedCallback != null) {
        loadedCallback();
    }
    return mod;
}, {
    loadableGenerated: {
        modules: [
            "../components/common/Stat.tsx -> " + "react-odometerjs"
        ]
    },
    ssr: false,
    // @ts-ignore
    loading: ()=>0
});
const Stat = ({ studentsTrained , workshopsConducted , placementDrives  })=>{
    const [odometerLoaded, setOdometerLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(loaded);
    const [studentsTrainedInternal, setStudentsTrainedInternal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [workshopsConductedInternal, setWorkshopsConductedInternal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [placementDrivesInternal, setPlacementDrivesInternal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    loadedCallback = ()=>{
        setOdometerLoaded(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!odometerLoaded) {
            setStudentsTrainedInternal(1);
            setWorkshopsConductedInternal(1);
            setPlacementDrivesInternal(1);
        }
    }, [
        odometerLoaded
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (odometerLoaded) {
            setStudentsTrainedInternal(studentsTrained);
            setWorkshopsConductedInternal(workshopsConducted);
            setPlacementDrivesInternal(placementDrives);
        }
    }, [
        studentsTrained,
        workshopsConducted,
        placementDrives,
        odometerLoaded
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex flex-col justify-center items-center md:flex-row md:justify-evenly",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r h-30 md:h-20 w-64 md:w-1/3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-5xl text-primary font-semibold relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Odometer, {
                                value: studentsTrainedInternal,
                                format: "(,ddd)",
                                theme: "default"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative z-10 mb-4",
                                style: {
                                    letterSpacing: 0
                                },
                                children: " +"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-primary3 font-normal z-10",
                        children: "Students Trained"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-5xl text-primary font-semibold relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Odometer, {
                                value: workshopsConductedInternal,
                                format: "(,ddd)",
                                theme: "default"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative z-10 mb-4",
                                style: {
                                    letterSpacing: 0
                                },
                                children: " +"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-primary3 font-normal z-10",
                        children: "Workshops Conducted"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-5xl text-primary font-semibold relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Odometer, {
                                value: placementDrivesInternal,
                                format: "(,ddd)",
                                theme: "default"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative z-10 mb-4",
                                style: {
                                    letterSpacing: 0
                                },
                                children: " +"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-primary3 font-normal z-10",
                        children: "Placement Drives"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stat);


/***/ }),

/***/ 3048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4539);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_5__]);
_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const WorkshopButton = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        buttonStyleClass: "outlineButton",
        variant: "bg-transparent",
        rounded: "rounded-sm",
        className: "px-3 md:px-7 py-3 w-full mb-3 md:mb-0",
        onClick: onOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-secondary text-xs md:text-base font-medium",
                children: t("Attend a FREE Workshop")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RegistrationForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: isOpen,
                onClose: onClose
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkshopButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;