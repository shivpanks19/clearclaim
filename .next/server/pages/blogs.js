"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 1832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blogs_BlogListHero)
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
;// CONCATENATED MODULE: ./src/components/blogs/FeaturedBlogCard.tsx





const FeaturedBlogCard = ({ featuredBlog  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: featuredBlog && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex grow xl:w-256 shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col md:flex-row justify-evenly",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: featuredBlog.thumbnail.url,
                    className: "flex-none",
                    height: 371,
                    width: 437,
                    sizes: "(min-width: 768px) 300px, 256px",
                    alt: "Blog thumbnail"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text px-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "blog-heading md:text-2xl lg:text-4xl font-semibold text-title mb-3 mt-6",
                            children: featuredBlog.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "blog-description text-desc mb-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "blog-desc text-sm md:text-base",
                                children: featuredBlog.description
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "date text-desc2",
                                    children: new Date(featuredBlog.publishedAt).toDateString()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: routes/* default.blog */.Z.blog(featuredBlog.contentCategory, featuredBlog.slug),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "readMore text-tertiary font-regular",
                                        children: "Read more →"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const blogs_FeaturedBlogCard = (FeaturedBlogCard);

// EXTERNAL MODULE: ./src/components/common/SocialButtonList.tsx
var SocialButtonList = __webpack_require__(2115);
;// CONCATENATED MODULE: ./src/components/blogs/BlogListHero.tsx




const BlogListHero = ({ headline , featuredBlog  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            background: "url(/img/home/homeHeroBg.png) no-repeat top left",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " md:gap-8 xl:w-76 px-5 md:mx-auto mb-9 md:mb-32 items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "pt-20 mb-12 text-3xl lg:text-5xl font-semibold text-primary text-center",
                        children: [
                            headline ?? "",
                            " \uD83D\uDC47"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blogs_FeaturedBlogCard, {
                        featuredBlog: featuredBlog
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialButtonList/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const blogs_BlogListHero = (BlogListHero);


/***/ }),

/***/ 2421:
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
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4980);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7675);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7117);
/* harmony import */ var _components_blogs_BlogListHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1832);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(193);
/* harmony import */ var _components_common_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1537);
/* harmony import */ var _components_blogs_CategoryFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8387);
/* harmony import */ var _services_blogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9018);
/* harmony import */ var _services_course__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__, _services_blogs__WEBPACK_IMPORTED_MODULE_11__, _services_course__WEBPACK_IMPORTED_MODULE_12__]);
([_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__, _services_blogs__WEBPACK_IMPORTED_MODULE_11__, _services_course__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const BlogListPage = ({ headline , blogList , featuredBlogList , categoryList , courseList  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [q, setQ] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let featuredBlog;
    if (featuredBlogList?.length > 0) {
        featuredBlog = featuredBlogList[0];
    } else {
        featuredBlog = blogList[0];
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].blogs */ .Z.blogs(undefined, q, category), undefined, {
            scroll: false
        });
    }, [
        category,
        q
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                courseList: courseList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_BlogListHero__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                headline: headline,
                featuredBlog: featuredBlog
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SearchBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                onChange: (e)=>setQ(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_CategoryFilter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                categoryList: categoryList,
                onCategorySelect: (cat)=>setCategory(cat)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_BlogList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                blogList: blogList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ locale , query  })=>{
    const blogPageInfo = await _services_blogs__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getBlogsStaticData */ .Z.getBlogsStaticData(locale, "*");
    const categoryList = await _services_blogs__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getBlogCategories */ .Z.getBlogCategories(locale);
    const currentCategory = categoryList.data.map((category)=>({
            ...category.attributes,
            id: category.id
        }))?.filter((cat)=>cat.slug === query?.contentCategory)[0];
    const blogList = await _services_blogs__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getBlogs */ .Z.getBlogs(locale, "*", {
        start: query?.start,
        limit: 4,
        contentCategoryId: currentCategory?.id,
        _q: query?._q
    });
    let featuredBlogList = await _services_blogs__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getBlogs */ .Z.getBlogs(locale, "*", {
        featured_eq: true
    });
    const courseList = await _services_course__WEBPACK_IMPORTED_MODULE_12__/* ["default"].getCourseList */ .Z.getCourseList(locale, "*");
    console.log("featuredBlogList", featuredBlogList);
    if (featuredBlogList?.data.length === 0) {
        featuredBlogList = blogList;
    }
    return {
        props: {
            ...blogPageInfo.data.attributes,
            blogList: blogList.data.map((blog)=>({
                    ...blog.attributes,
                    id: blog.id,
                    thumbnail: blog.attributes.thumbnail?.data.attributes,
                    contentCategory: blog.attributes.content_category?.data.attributes
                })),
            featuredBlogList: featuredBlogList.data.map((blog)=>({
                    ...blog.attributes,
                    id: blog.id,
                    thumbnail: blog.attributes.thumbnail?.data.attributes,
                    contentCategory: blog.attributes.content_category?.data.attributes
                })),
            categoryList: categoryList.data.map((category)=>({
                    ...category.attributes,
                    id: category.id
                })),
            courseList: courseList.data.map((course)=>({
                    ...course.attributes,
                    id: course.id
                })),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__.serverSideTranslations)(locale, [
                "common",
                "home"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogListPage);

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

/***/ 4305:
/***/ ((module) => {

module.exports = require("lodash.debounce");

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

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,728,514,146,537], () => (__webpack_exec__(2421)));
module.exports = __webpack_exports__;

})();