"use strict";
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 2728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Logo)
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
;// CONCATENATED MODULE: ./src/utils/images.ts
const Images = {
    logoLight: "/img/logo.png",
    logoDark: "/img/logo_dark.png",
    rhndBackground: "/img/rhnd-bg.svg",
    landingHero: "/img/landing-hero.svg",
    stressedMan: {
        src: "/img/stressed-man.svg",
        alt: "Stressed man worried about his business growth!"
    },
    footerBackground: "/img/footer-bg.svg",
    aboutUsHero: {
        src: "/img/about-us-hero.svg",
        alt: "About Us Hero Image"
    },
    popUpLogo: {
        src: "/img/fresh-folk-teamwork.png",
        alt: "Fresh Folk Teamwork "
    },
    book: {
        src: "/img/book.png",
        alt: "Book"
    }
};
/* harmony default export */ const utils_images = (Images);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/common/Logo.tsx






const Logo = ({ className , href , variant , logoSize  })=>{
    const path = ()=>{
        switch(variant){
            case "light":
                return utils_images.logoLight;
            case "dark":
                return utils_images.logoDark;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("cursor-pointer", ...className.split(" ")),
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            legacyBehavior: true,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `relative ${logoSize === "small" && "w-24 h-8"} ${logoSize === "large" && "w-32 h-9"}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: path(),
                        fill: true,
                        alt: "logo"
                    })
                })
            })
        })
    });
};
Logo.defaultProps = {
    className: "",
    href: "/",
    variant: "light",
    logoSize: "small"
};
/* harmony default export */ const common_Logo = (Logo);


/***/ })

};
;