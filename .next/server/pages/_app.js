/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @splidejs/react-splide/css */ \"./node_modules/@splidejs/react-splide/dist/css/splide.min.css\");\n/* harmony import */ var _splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst activeLabelStyles = {\n    transform: \"scale(0.85) translateY(-24px)\"\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({\n    components: {\n        Form: {\n            variants: {\n                floating: {\n                    container: {\n                        _focusWithin: {\n                            label: {\n                                ...activeLabelStyles\n                            }\n                        },\n                        \"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label\": {\n                            ...activeLabelStyles\n                        },\n                        label: {\n                            top: 0,\n                            left: 0,\n                            zIndex: 2,\n                            position: \"absolute\",\n                            backgroundColor: \"white\",\n                            pointerEvents: \"none\",\n                            mx: 3,\n                            px: 1,\n                            my: 2,\n                            transformOrigin: \"left top\"\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\nfunction App({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const attachScripts = ()=>{\n            const gtmScript = document.getElementById(\"gtm\");\n            const gaScript = document.getElementById(\"ga\");\n            const fbScript = document.getElementById(\"fb\");\n            gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-N7SB2Z3');    \n  `;\n            gaScript.innerHTML = `window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', 'G-BVKQYJ6KFL');\n  `;\n            fbScript.innerHTML = `!function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '889335038854708');\n    fbq('track', 'PageView');  \n  `;\n            document.head.appendChild(gtmScript);\n            document.head.appendChild(gaScript);\n            document.head.appendChild(fbScript);\n        };\n        setTimeout(function() {\n            var vidDefer = document.getElementsByTagName(\"iframe\");\n            for(var i = 0; i < vidDefer.length; i++){\n                if (vidDefer[i].getAttribute(\"data-src\")) {\n                    vidDefer[i].setAttribute(\"src\", vidDefer[i].getAttribute(\"data-src\"));\n                }\n            }\n        }, 5000);\n        setTimeout(attachScripts, 5000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preload\",\n                as: \"style\",\n                onLoad: ()=>{\n                    this.onLoad = null;\n                    this.rel = \"stylesheet\";\n                },\n                href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;&display=swap\"\n            }, void 0, false, {\n                fileName: \"/Users/darshand/Documents/Office/hexa/tap_frontend/src/pages/_app.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/darshand/Documents/Office/hexa/tap_frontend/src/pages/_app.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/darshand/Documents/Office/hexa/tap_frontend/src/pages/_app.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darshand/Documents/Office/hexa/tap_frontend/src/pages/_app.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFVztBQUNRO0FBQ0Q7QUFDRDtBQUNYO0FBQ1c7QUFFL0MsTUFBTUssb0JBQW9CO0lBQ3hCQyxXQUFXO0FBQ2I7QUFFTyxNQUFNQyxRQUFRSCw2REFBV0EsQ0FBQztJQUMvQkksWUFBWTtRQUNWQyxNQUFNO1lBQ0pDLFVBQVU7Z0JBQ1JDLFVBQVU7b0JBQ1JDLFdBQVc7d0JBQ1RDLGNBQWM7NEJBQ1pDLE9BQU87Z0NBQ0wsR0FBR1QsaUJBQWlCOzRCQUN0Qjt3QkFDRjt3QkFDQSxvSEFBb0g7NEJBQ2xILEdBQUdBLGlCQUFpQjt3QkFDdEI7d0JBQ0FTLE9BQU87NEJBQ0xDLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLFFBQVE7NEJBQ1JDLFVBQVU7NEJBQ1ZDLGlCQUFpQjs0QkFDakJDLGVBQWU7NEJBQ2ZDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLGlCQUFpQjt3QkFDbkI7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRixHQUFHO0FBRVksU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlEMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0yQixnQkFBZ0IsSUFBTTtZQUUxQixNQUFNQyxZQUFZQyxTQUFTQyxjQUFjLENBQUM7WUFDMUMsTUFBTUMsV0FBV0YsU0FBU0MsY0FBYyxDQUFDO1lBQ3pDLE1BQU1FLFdBQVdILFNBQVNDLGNBQWMsQ0FBQztZQUV6Q0YsVUFBVUssU0FBUyxHQUFHLENBQUM7Ozs7O0VBSzNCLENBQUM7WUFFR0YsU0FBU0UsU0FBUyxHQUFHLENBQUM7Ozs7RUFJMUIsQ0FBQztZQUVHRCxTQUFTQyxTQUFTLEdBQUcsQ0FBQzs7Ozs7Ozs7OztFQVUxQixDQUFDO1lBRUdKLFNBQVNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDUDtZQUMxQkMsU0FBU0ssSUFBSSxDQUFDQyxXQUFXLENBQUNKO1lBQzFCRixTQUFTSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0g7UUFDNUI7UUFFQUksV0FBWSxXQUFZO1lBQ3RCLElBQUlDLFdBQVdSLFNBQVNTLG9CQUFvQixDQUFDO1lBQzdDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixTQUFTRyxNQUFNLEVBQUVELElBQUs7Z0JBQ3hDLElBQUlGLFFBQVEsQ0FBQ0UsRUFBRSxDQUFDRSxZQUFZLENBQUMsYUFBYTtvQkFDeENKLFFBQVEsQ0FBQ0UsRUFBRSxDQUFDRyxZQUFZLENBQUMsT0FBT0wsUUFBUSxDQUFDRSxFQUFFLENBQUNFLFlBQVksQ0FBQztnQkFDM0QsQ0FBQztZQUNIO1FBQ0YsR0FBSTtRQUVKTCxXQUFXVCxlQUFlO0lBRTVCLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDMUIsNERBQWNBO1FBQUNLLE9BQU9BOzswQkFDckIsOERBQUNxQztnQkFBS0MsS0FBSTtnQkFBVUMsSUFBRztnQkFBUUMsUUFBUSxJQUFNO29CQUFFLElBQUksQ0FBQ0EsTUFBTSxHQUFHLElBQUk7b0JBQUUsSUFBSSxDQUFDRixHQUFHLEdBQUc7Z0JBQWE7Z0JBQUdHLE1BQUs7Ozs7OzswQkFDbkcsOERBQUN0QjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDeEIsMERBQWNBOzs7Ozs7Ozs7OztBQUdyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFwX2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCAnQHNwbGlkZWpzL3JlYWN0LXNwbGlkZS9jc3MnO1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuY29uc3QgYWN0aXZlTGFiZWxTdHlsZXMgPSB7XG4gIHRyYW5zZm9ybTogXCJzY2FsZSgwLjg1KSB0cmFuc2xhdGVZKC0yNHB4KVwiXG59O1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBGb3JtOiB7XG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBmbG9hdGluZzoge1xuICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgX2ZvY3VzV2l0aGluOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgLi4uYWN0aXZlTGFiZWxTdHlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCwgLmNoYWtyYS1zZWxlY3RfX3dyYXBwZXIgKyBsYWJlbCwgdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbFwiOiB7XG4gICAgICAgICAgICAgIC4uLmFjdGl2ZUxhYmVsU3R5bGVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgbXg6IDMsXG4gICAgICAgICAgICAgIHB4OiAxLFxuICAgICAgICAgICAgICBteTogMixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImxlZnQgdG9wXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjaFNjcmlwdHMgPSAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGd0bVNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndG0nKTtcbiAgICAgIGNvbnN0IGdhU2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhJyk7XG4gICAgICBjb25zdCBmYlNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYicpO1xuXG4gICAgICBndG1TY3JpcHQuaW5uZXJIVE1MID0gYChmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0JzpcbiAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG4gICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmRlZmVyPXRydWU7ai5zcmM9XG4gICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xuICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLU43U0IyWjMnKTsgICAgXG4gIGA7XG5cbiAgICAgIGdhU2NyaXB0LmlubmVySFRNTCA9IGB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICBndGFnKCdjb25maWcnLCAnRy1CVktRWUo2S0ZMJyk7XG4gIGA7XG5cbiAgICAgIGZiU2NyaXB0LmlubmVySFRNTCA9IGAhZnVuY3Rpb24oZixiLGUsdixuLHQscylcbiAgICB7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XG4gICAgbi5jYWxsTWV0aG9kLmFwcGx5KG4sYXJndW1lbnRzKTpuLnF1ZXVlLnB1c2goYXJndW1lbnRzKX07XG4gICAgaWYoIWYuX2ZicSlmLl9mYnE9bjtuLnB1c2g9bjtuLmxvYWRlZD0hMDtuLnZlcnNpb249JzIuMCc7XG4gICAgbi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xuICAgIHQuc3JjPXY7cz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxzKX0od2luZG93LCBkb2N1bWVudCwnc2NyaXB0JyxcbiAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xuICAgIGZicSgnaW5pdCcsICc4ODkzMzUwMzg4NTQ3MDgnKTtcbiAgICBmYnEoJ3RyYWNrJywgJ1BhZ2VWaWV3Jyk7ICBcbiAgYDtcblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChndG1TY3JpcHQpO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnYVNjcmlwdCk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZiU2NyaXB0KTtcbiAgICB9O1xuXG4gICAgc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZpZERlZmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWREZWZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICAgICAgdmlkRGVmZXJbaV0uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksIDUwMDApXG5cbiAgICBzZXRUaW1lb3V0KGF0dGFjaFNjcmlwdHMsIDUwMDApXG5cbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8bGluayByZWw9XCJwcmVsb2FkXCIgYXM9XCJzdHlsZVwiIG9uTG9hZD17KCkgPT4geyB0aGlzLm9uTG9hZCA9IG51bGw7IHRoaXMucmVsID0gJ3N0eWxlc2hlZXQnIH19IGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOyZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGFrcmFQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiZXh0ZW5kVGhlbWUiLCJhY3RpdmVMYWJlbFN0eWxlcyIsInRyYW5zZm9ybSIsInRoZW1lIiwiY29tcG9uZW50cyIsIkZvcm0iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwiY29udGFpbmVyIiwiX2ZvY3VzV2l0aGluIiwibGFiZWwiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb2ludGVyRXZlbnRzIiwibXgiLCJweCIsIm15IiwidHJhbnNmb3JtT3JpZ2luIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXR0YWNoU2NyaXB0cyIsImd0bVNjcmlwdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYVNjcmlwdCIsImZiU2NyaXB0IiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInZpZERlZmVyIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwibGluayIsInJlbCIsImFzIiwib25Mb2FkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@splidejs/react-splide/dist/css/splide.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@splidejs/react-splide/dist/css/splide.min.css ***!
  \*********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();