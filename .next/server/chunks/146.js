"use strict";
exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blogs_BlogList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(4980);
;// CONCATENATED MODULE: ./src/components/blogs/BlogCard.tsx





const BlogCard = ({ blogName , showDescription =true , description , contentCategory , slug , heroImage , publishedAt  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col w-80 md:w-99",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative flex-none w-80 md:w-99 h-72",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: heroImage,
                    fill: true,
                    alt: "Blog thumbnail"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col text px-5 pt-5 relative h-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "blog-heading md:text-2xl font-semibold text-title mb-2",
                        children: [
                            blogName.split(" ").slice(0, 12).join(" "),
                            "..."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "blog-description text-desc mb-4 grow",
                        children: showDescription && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "blog-desc text-sm md:text-base",
                            children: [
                                description.split(" ").slice(0, 20).join(" "),
                                "..."
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between mb-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "date text-aphonic",
                                children: new Date(publishedAt).toDateString()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: routes/* default.blog */.Z.blog(contentCategory, slug),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "readMore text-tertiary font-regular",
                                    children: "Read more  →"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blogs_BlogCard = (BlogCard);

;// CONCATENATED MODULE: ./src/components/blogs/BlogList.tsx



const BlogList = ({ blogList , numberOfBlogs  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-3 md:mb-28 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:w-76",
        children: blogList?.length > 0 && (numberOfBlogs ? blogList.slice(0, numberOfBlogs).map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(blogs_BlogCard, {
                blogName: blog.title,
                description: blog.description,
                slug: blog.slug,
                contentCategory: blog.contentCategory,
                heroImage: blog.thumbnail.url,
                publishedAt: blog.publishedAt
            }, blog.id)) : blogList.map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(blogs_BlogCard, {
                blogName: blog.title,
                description: blog.description,
                slug: blog.slug,
                contentCategory: blog.contentCategory,
                heroImage: blog.thumbnail.url,
                publishedAt: blog.publishedAt
            }, blog.id)))
    });
};
/* harmony default export */ const blogs_BlogList = (BlogList);


/***/ }),

/***/ 8387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);




const CategoryFilter = ({ categoryList , onCategorySelect  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mb-4 md:mb-20 mx-auto max-w-full overflow-x-scroll xl:w-76 px-5 pb-5",
        children: categoryList?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "hidden md:block",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold text-primary mb-3",
                            children: "Categories:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between place-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "categoryList flex gap-3",
                                    children: categoryList.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "border border-primary2 rounded px-6 py-3",
                                            onClick: ()=>onCategorySelect(category.slug),
                                            children: category.title
                                        }, category.id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsArrowRight, {
                                    className: "text-tertiary",
                                    size: 36
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:hidden w-6/12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                        className: "mb-6 ml-2",
                        variant: "floating",
                        id: "category",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {
                            placeholder: "Category",
                            className: "border border-tertiary",
                            children: categoryList.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: category.id,
                                    children: category.title
                                }, category.id))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryFilter);


/***/ }),

/***/ 9018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6137);
/* harmony import */ var _services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__]);
_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getBlogsStaticData(locale, populate) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlogsPageStaticData */ .Z.getBlogsPageStaticData, {
        _locale: locale,
        populate
    });
}
function getBlogs(_locale, populate, params) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlogs */ .Z.getBlogs, {
        _locale,
        populate,
        _start: params?.start,
        _limit: params?.limit,
        _sort: params?.latest ? "updated_at:desc" : undefined,
        _q: params?._q,
        searchFields: [
            "title",
            "description"
        ],
        contentCategory: params?.contentCategoryId
    });
}
function getBlogById(id, _locale) {
    const url = `${_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlog */ .Z.getBlog}/${id}`;
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(url, {
        _locale
    });
}
function getBlogBySlug(slug, _locale) {
    const url = `${_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlog */ .Z.getBlog}/${slug}`;
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(url, {
        _locale
    });
}
function getBlogsCount(contentCategory) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlogsCount */ .Z.getBlogsCount, {
        contentCategory
    });
}
function getBlogCategories(_locale) {
    return (0,_services_serverConfig__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)(_services_serviceUrls__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlogCategories */ .Z.getBlogCategories, {
        _locale
    });
}
const BlogService = {
    getBlogs,
    getBlogById,
    getBlogBySlug,
    getBlogsCount,
    getBlogCategories,
    getBlogsStaticData
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;