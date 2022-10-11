(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "react-ga"
const external_react_ga_namespaceObject = require("react-ga");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_namespaceObject);
;// CONCATENATED MODULE: ./src/analytics/index.js

const initGA = ()=>{
    console.log("GA init");
    external_react_ga_default().initialize("UA-xxxxxxxxx-1");
};
const logPageView = ()=>{
    console.log(`Logging pageview for ${window.location.pathname}`);
    external_react_ga_default().set({
        page: window.location.pathname
    });
    external_react_ga_default().pageview(window.location.pathname);
};

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "next/Image"
var Image_ = __webpack_require__(47);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
// EXTERNAL MODULE: ./src/components/modal/getstarted.js
var getstarted = __webpack_require__(663);
// EXTERNAL MODULE: ./src/assets/logo/logo.webp
var logo = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/nav/patientNav.js







const links = [
    {
        path: "Home",
        label: "/"
    },
    {
        path: "About",
        label: "/about"
    },
    {
        path: "Membership",
        label: "/membership"
    },
    {
        path: "Services",
        label: "/services"
    },
    {
        path: "Corporate",
        label: "/corporate"
    },
    {
        path: "Contact us",
        label: "/contact"
    }, 
];
const PatientNav = ()=>{
    const { 0: menuToggleIcon , 1: setMenuToggleIcon  } = (0,external_react_.useState)(false);
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const openModal = ()=>{
        setVisible(true);
    };
    const closeModal = ()=>{
        setVisible(false);
    };
    const toggleMenuIcon = ()=>{
        setMenuToggleIcon(!menuToggleIcon);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo-holder",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                    src: logo/* default */.Z,
                                    alt: "logo",
                                    layout: "fill"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: link.label,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: router.pathname == `${link.label}` ? "active" : "",
                                            children: link.path
                                        })
                                    })
                                }, `navbar-item-${link.path}`))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar-right",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/professional",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "custom-btn skel-btn far-left",
                                            children: "Professional Portal"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "with-link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://doctoora.com/user/login",
                                        children: "Login"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "custom-btn nav-btn",
                                        children: "Get Started"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `nav-mobile ${menuToggleIcon ? "change" : ""}`,
                        onClick: ()=>toggleMenuIcon(),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bar1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bar2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bar3"
                            })
                        ]
                    }),
                    menuToggleIcon ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sidebar animated fadeInLeft",
                        onClick: ()=>toggleMenuIcon(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "menu-holder",
                            children: [
                                links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            href: link.label,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: router.pathname == `${link.label}` ? "active" : "",
                                                children: link.path
                                            })
                                        })
                                    }, `navbar-item-${link.path}`)),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "custom-btn side-btn1",
                                        onClick: ()=>{
                                            openModal();
                                        },
                                        children: "Get Started"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "https://app.doctoora.com",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "custom-btn side-btn2",
                                            children: "Login"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/professional",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "custom-btn side-btn3",
                                            children: "Professional Portal"
                                        })
                                    })
                                })
                            ]
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(getstarted/* default */.Z, {
                onOk: closeModal,
                onCancel: closeModal,
                open: visible
            })
        ]
    });
};
/* harmony default export */ const patientNav = (PatientNav);

// EXTERNAL MODULE: ./src/components/footer.js + 4 modules
var footer = __webpack_require__(195);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
;// CONCATENATED MODULE: ./src/pages/_app.js








function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        initGA();
        logPageView();
        router_.Router.events.on("routeChangeComplete", logPageView);
    }, []);
    if (Component.getLayout) {
        return Component.getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(patientNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 722:
/***/ (() => {



/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 47:
/***/ ((module) => {

"use strict";
module.exports = require("next/Image");

/***/ }),

/***/ 514:
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,663], () => (__webpack_exec__(659)));
module.exports = __webpack_exports__;

})();