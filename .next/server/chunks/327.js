"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 8327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CourseList)
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
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/common/Rating.tsx
var Rating = __webpack_require__(7671);
// EXTERNAL MODULE: ./src/components/common/course-list/CourseAttr.tsx
var CourseAttr = __webpack_require__(7786);
;// CONCATENATED MODULE: ./src/components/common/course-list/CourseCardDetailSection.tsx



const CourseCardDetailSection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "course-details mb-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 md:gap-5 ml-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row md:flex-col items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/course-content.png",
                                alt: "Course Content",
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-primary text-xs md:text-base font-medium",
                            children: "300+ hours Course content"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row md:flex-col items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/daily-material.png",
                                alt: "Daily Material",
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-primary text-xs md:text-base font-medium",
                            children: "Daily Couse Material"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row md:flex-col items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/lifetime-access.png",
                                alt: "Lifetime Access",
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-primary text-xs md:text-base font-medium",
                            children: "Lifetime LMS Access"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row md:flex-col items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-7 h-7 md:w-10 md:h-10 mb-0 md:mb-2 mr-2 md:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/course/dedicated-support.png",
                                alt: "Dedicated Support",
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-primary text-xs md:text-base font-medium",
                            children: "Dedicated Support"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const course_list_CourseCardDetailSection = (CourseCardDetailSection);

;// CONCATENATED MODULE: ./src/components/common/course-list/CourseCard.tsx








const CourseCard = ({ courseName , description , numberOfStudents , slug , heroImage , isFree , showDetailSection  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex grow xl:w-76 shadow rounded h-30 mx-auto mb-4 md:mb-10 bg-white flex-col justify-evenly",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()({
                    "border-b": showDetailSection,
                    "mb-3": true
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row items-center px-5 pt-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative h-40 w-full md:w-64 md:mr-7 mb-3 md:mb-0 flex-none ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: heroImage,
                                // height={219}
                                // width={256}
                                fill: true,
                                sizes: "(min-width: 768px) 300px, 256px",
                                alt: "Course thumbnail"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col text md:mr-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "course-heading text-sm md:text-2xl font-semibold text-title",
                                    children: courseName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "course-rating place-items-center flex content-bottom my-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Rating/* default */.Z, {
                                            rating: 5
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "student-number text-desc text-xs md:text-base font-normal",
                                            children: [
                                                " ",
                                                numberOfStudents,
                                                " students"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "course-description text-desc mb-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "course-desc text-sm md:text-base",
                                        children: description
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CourseAttr/* default */.Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex grow flex-row md:flex-col w-full md:w-auto",
                            children: [
                                isFree && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/course/free-tag.png",
                                    width: 144,
                                    height: 92,
                                    alt: "Free Tag",
                                    className: "mb-5 mr-5 md:mr-0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/courses/${slug}`,
                                    className: "hidden md:block w-full md:w-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "join-btn bg-tertiary text-white px-5 md:px-10 py-3 md:py-5 rounded w-full md:w-40",
                                        children: "Join Now"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            showDetailSection && /*#__PURE__*/ jsx_runtime_.jsx(course_list_CourseCardDetailSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-5 pb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/courses/${slug}`,
                    className: "md:hidden w-full md:w-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "join-btn bg-tertiary text-white px-5 md:px-10 py-3 md:py-5 rounded w-full md:w-40",
                        children: "Join Now"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const course_list_CourseCard = (CourseCard);

// EXTERNAL MODULE: ./src/components/common/SectionHeadline.tsx
var SectionHeadline = __webpack_require__(4947);
;// CONCATENATED MODULE: ./src/components/common/course-list/CourseList.tsx




const OfferingSection = ({ showDetailSection , headline , subHeadline , courseList  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col mb-3 md:mb-28 mx-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeadline/* default */.Z, {
                title: headline,
                subtitle: subHeadline,
                className: "mb-4"
            }),
            courseList?.length > 0 && courseList.map((course)=>/*#__PURE__*/ jsx_runtime_.jsx(course_list_CourseCard, {
                    courseName: course.courseName,
                    description: course.description,
                    numberOfStudents: course.numberOfStudents,
                    slug: course.slug,
                    heroImage: course.heroImage.data[0].attributes.url,
                    isFree: course.isFree,
                    showDetailSection: showDetailSection
                }, course.id))
        ]
    });
};
/* harmony default export */ const CourseList = (OfferingSection);


/***/ })

};
;