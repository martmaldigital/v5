"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.6150a109.webp","height":156,"width":381,"blurDataURL":"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAK0EGAAAAAAAAKGgREhEUEDcygUMuQERDAFZQOCBGAAAA0AIAnQEqCAADAAJAOCWwAnS6AMkA/QDLAP0ABCUs0AD8+LFgPdICFl8x5P+I+OJ+UWztseelT/5FVE9b/8D3aqU038sYAA==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: external "next/Image"
var Image_ = __webpack_require__(47);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/assets/logo/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.f7e505c2.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/logo/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.bfc5d2c6.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/logo/whatsapp.svg
/* harmony default export */ const whatsapp = ({"src":"/_next/static/media/whatsapp.d2f1b37b.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/logo/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.d9e80306.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/components/footer.js









const Footer = ()=>{
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email.length === 0 || !regex.test(email)) {
            setError(true);
        }
        if (email.length > 0 && regex.test(email)) {
            console.log("email submitted successfully", email);
            setEmail("");
            setError(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                    gutter: 32,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            lg: 6,
                            sm: 12,
                            xs: 24,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Quick links"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            href: "/about",
                                            passHref: true,
                                            children: "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.doctoora.com/doctor/register",
                                            children: "Become A Caregiver"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            href: "/",
                                            children: "Terms & Conditions"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.doctoora.com/privacy",
                                            children: "Privacy policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.doctoora.com/careers",
                                            children: "Careers"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            lg: 6,
                            sm: 12,
                            xs: 24,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Connect with us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel: +2348105094729",
                                            children: "Phone: +2348105094729"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Email: Doctoora@gmail.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Office Address"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            "11 Gbajumo Crescent,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Surulere, Lagos"
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            lg: 6,
                            sm: 12,
                            xs: 24,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Follow us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "logo-img",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://twitter.com/doctoorahealth",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                    src: twitter,
                                                    alt: "logo",
                                                    layout: "fill"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "logo-text",
                                                    children: "Twitter"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "logo-img",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://web.facebook.com/doctoorahomecare",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                    src: instagram,
                                                    alt: "logo",
                                                    layout: "fill"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "logo-text",
                                                    children: "Instagram"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "logo-img",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://www.linkedin.com/company/doctoora",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                    src: linkedin,
                                                    alt: "logo",
                                                    layout: "fill"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "logo-text",
                                                    children: "LinkedIn"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "logo-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                        src: whatsapp,
                                                        alt: "logo",
                                                        layout: "fill"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "logo-text",
                                                        children: "Whatsapp\xa0Bot"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                            lg: 6,
                            sm: 12,
                            xs: 24,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Subcribe to our newsletter to get updates on services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "input",
                                                name: "email",
                                                type: "email",
                                                placeholder: "Email Address",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "custom-btn sub-btn",
                                                children: "Subscribe"
                                            })
                                        ]
                                    }),
                                    error && email.length <= 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "error",
                                        children: "Email Address is required"
                                    }) : error && !regex.test(email) ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "error",
                                        children: "Please enter a valid email address"
                                    }) : ""
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copy",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "(c) ",
                        new Date().getFullYear(),
                        " Doctoora E-Health"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);


/***/ })

};
;