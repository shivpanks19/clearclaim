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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @splidejs/react-splide/css */ \"./node_modules/@splidejs/react-splide/dist/css/splide.min.css\");\n/* harmony import */ var _splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst activeLabelStyles = {\n    transform: \"scale(0.85) translateY(-24px)\"\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({\n    components: {\n        Form: {\n            variants: {\n                floating: {\n                    container: {\n                        _focusWithin: {\n                            label: {\n                                ...activeLabelStyles\n                            }\n                        },\n                        \"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label\": {\n                            ...activeLabelStyles\n                        },\n                        label: {\n                            top: 0,\n                            left: 0,\n                            zIndex: 2,\n                            position: \"absolute\",\n                            backgroundColor: \"white\",\n                            pointerEvents: \"none\",\n                            mx: 3,\n                            px: 1,\n                            my: 2,\n                            transformOrigin: \"left top\"\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\nfunction App({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const attachScripts = ()=>{\n            const gtmScript = document.getElementById(\"gtm\");\n            const gaScript = document.getElementById(\"ga\");\n            const fbScript = document.getElementById(\"fb\");\n            gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=\r\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n    })(window,document,'script','dataLayer','GTM-N7SB2Z3');    \r\n  `;\n            gaScript.innerHTML = `window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n    gtag('config', 'G-BVKQYJ6KFL');\r\n  `;\n            fbScript.innerHTML = `!function(f,b,e,v,n,t,s)\r\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\n    n.queue=[];t=b.createElement(e);t.async=!0;\r\n    t.src=v;s=b.getElementsByTagName(e)[0];\r\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\r\n    'https://connect.facebook.net/en_US/fbevents.js');\r\n    fbq('init', '889335038854708');\r\n    fbq('track', 'PageView');  \r\n  `;\n            document.head.appendChild(gtmScript);\n            document.head.appendChild(gaScript);\n            document.head.appendChild(fbScript);\n        };\n        setTimeout(function() {\n            var vidDefer = document.getElementsByTagName(\"iframe\");\n            for(var i = 0; i < vidDefer.length; i++){\n                if (vidDefer[i].getAttribute(\"data-src\")) {\n                    vidDefer[i].setAttribute(\"src\", vidDefer[i].getAttribute(\"data-src\"));\n                }\n            }\n        }, 5000);\n        setTimeout(attachScripts, 5000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preload\",\n                as: \"style\",\n                onLoad: ()=>{\n                    this.onLoad = null;\n                    this.rel = \"stylesheet\";\n                },\n                href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;&display=swap\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parko\\\\Documents\\\\Code\\\\tap_frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parko\\\\Documents\\\\Code\\\\tap_frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parko\\\\Documents\\\\Code\\\\tap_frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parko\\\\Documents\\\\Code\\\\tap_frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFVztBQUNRO0FBQ0Q7QUFDRDtBQUNYO0FBQ1c7QUFFL0MsTUFBTUssb0JBQW9CO0lBQ3hCQyxXQUFXO0FBQ2I7QUFFTyxNQUFNQyxRQUFRSCw2REFBV0EsQ0FBQztJQUMvQkksWUFBWTtRQUNWQyxNQUFNO1lBQ0pDLFVBQVU7Z0JBQ1JDLFVBQVU7b0JBQ1JDLFdBQVc7d0JBQ1RDLGNBQWM7NEJBQ1pDLE9BQU87Z0NBQ0wsR0FBR1QsaUJBQWlCOzRCQUN0Qjt3QkFDRjt3QkFDQSxvSEFBb0g7NEJBQ2xILEdBQUdBLGlCQUFpQjt3QkFDdEI7d0JBQ0FTLE9BQU87NEJBQ0xDLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLFFBQVE7NEJBQ1JDLFVBQVU7NEJBQ1ZDLGlCQUFpQjs0QkFDakJDLGVBQWU7NEJBQ2ZDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLGlCQUFpQjt3QkFDbkI7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRixHQUFHO0FBRVksU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlEMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0yQixnQkFBZ0IsSUFBTTtZQUUxQixNQUFNQyxZQUFZQyxTQUFTQyxjQUFjLENBQUM7WUFDMUMsTUFBTUMsV0FBV0YsU0FBU0MsY0FBYyxDQUFDO1lBQ3pDLE1BQU1FLFdBQVdILFNBQVNDLGNBQWMsQ0FBQztZQUV6Q0YsVUFBVUssU0FBUyxHQUFHLENBQUM7WUFPdkJGLFNBQVNFLFNBQVMsR0FBRyxDQUFDO1lBTXRCRCxTQUFTQyxTQUFTLEdBQUcsQ0FBQztZQVl0QkosU0FBU0ssSUFBSSxDQUFDQyxXQUFXLENBQUNQO1lBQzFCQyxTQUFTSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0o7O1FBRTVCO1FBRUFLLFdBQVksV0FBWTtZQUN0QixJQUFJQyxXQUFXUjtZQUNmLElBQUssSUFBSVUsSUFBSSxHQUFHQSxJQUFJRjs7b0JBRWhCQSxRQUFRLENBQUNFLEVBQUUsQ0FBQ0csWUFBWSxDQUFDLE9BQU9MO2dCQUNsQyxDQUFDO1lBQ0g7UUFDRixHQUFJO1FBRUpELFdBQVdULGVBQWU7SUFFNUIsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsUUFBQzFCO1FBQWVLLE9BQU9BOzswQkFDckI7O2dCQUFvQnVDLElBQUc7Z0JBQVFDLFFBQVEsSUFBTTtvQkFBRSxJQUFJLENBQUNBLE1BQU0sR0FBRyxJQUFJOztnQkFBMEI7Z0JBQUdDLE1BQUs7Ozs7Ozs7Z0JBQ3ZGLEdBQUdyQixTQUFTOzs7Ozs7MEJBQ3hCOzs7Ozs7Ozs7OztBQUdOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXBfZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0ICdAc3BsaWRlanMvcmVhY3Qtc3BsaWRlL2Nzcyc7XHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCBhY3RpdmVMYWJlbFN0eWxlcyA9IHtcclxuICB0cmFuc2Zvcm06IFwic2NhbGUoMC44NSkgdHJhbnNsYXRlWSgtMjRweClcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEZvcm06IHtcclxuICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICBmbG9hdGluZzoge1xyXG4gICAgICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIF9mb2N1c1dpdGhpbjoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5hY3RpdmVMYWJlbFN0eWxlc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLCAuY2hha3JhLXNlbGVjdF9fd3JhcHBlciArIGxhYmVsLCB0ZXh0YXJlYTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsXCI6IHtcclxuICAgICAgICAgICAgICAuLi5hY3RpdmVMYWJlbFN0eWxlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogMixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIG14OiAzLFxyXG4gICAgICAgICAgICAgIHB4OiAxLFxyXG4gICAgICAgICAgICAgIG15OiAyLFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXR0YWNoU2NyaXB0cyA9ICgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGd0bVNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndG0nKTtcclxuICAgICAgY29uc3QgZ2FTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2EnKTtcclxuICAgICAgY29uc3QgZmJTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmInKTtcclxuXHJcbiAgICAgIGd0bVNjcmlwdC5pbm5lckhUTUwgPSBgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxyXG4gICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxyXG4gICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmRlZmVyPXRydWU7ai5zcmM9XHJcbiAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XHJcbiAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJ0dUTS1ON1NCMlozJyk7ICAgIFxyXG4gIGA7XHJcblxyXG4gICAgICBnYVNjcmlwdC5pbm5lckhUTUwgPSBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgZ3RhZygnY29uZmlnJywgJ0ctQlZLUVlKNktGTCcpO1xyXG4gIGA7XHJcblxyXG4gICAgICBmYlNjcmlwdC5pbm5lckhUTUwgPSBgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXHJcbiAgICB7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XHJcbiAgICBuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtcclxuICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xyXG4gICAgbi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xyXG4gICAgdC5zcmM9djtzPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlbMF07XHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXHJcbiAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xyXG4gICAgZmJxKCdpbml0JywgJzg4OTMzNTAzODg1NDcwOCcpO1xyXG4gICAgZmJxKCd0cmFjaycsICdQYWdlVmlldycpOyAgXHJcbiAgYDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ3RtU2NyaXB0KTtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnYVNjcmlwdCk7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmJTY3JpcHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB2aWREZWZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWREZWZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcclxuICAgICAgICAgIHZpZERlZmVyW2ldLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLCA1MDAwKVxyXG5cclxuICAgIHNldFRpbWVvdXQoYXR0YWNoU2NyaXB0cywgNTAwMClcclxuXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8bGluayByZWw9XCJwcmVsb2FkXCIgYXM9XCJzdHlsZVwiIG9uTG9hZD17KCkgPT4geyB0aGlzLm9uTG9hZCA9IG51bGw7IHRoaXMucmVsID0gJ3N0eWxlc2hlZXQnIH19IGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOyZkaXNwbGF5PXN3YXBcIiAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGFrcmFQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiZXh0ZW5kVGhlbWUiLCJhY3RpdmVMYWJlbFN0eWxlcyIsInRyYW5zZm9ybSIsInRoZW1lIiwiY29tcG9uZW50cyIsIkZvcm0iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwiY29udGFpbmVyIiwiX2ZvY3VzV2l0aGluIiwibGFiZWwiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb2ludGVyRXZlbnRzIiwibXgiLCJweCIsIm15IiwidHJhbnNmb3JtT3JpZ2luIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXR0YWNoU2NyaXB0cyIsImd0bVNjcmlwdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYVNjcmlwdCIsImZiU2NyaXB0IiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInZpZERlZmVyIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwibGluayIsInJlbCIsImFzIiwib25Mb2FkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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