"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kg": () => (/* binding */ CLEAR_SEARCH),
/* harmony export */   "a0": () => (/* binding */ UPDATE_SEARCH),
/* harmony export */   "hz": () => (/* binding */ UPDATE_RESULT),
/* harmony export */   "qs": () => (/* binding */ UPDATE_SLOTCHOOSEN),
/* harmony export */   "rI": () => (/* binding */ START_SEARCH_LOADING)
/* harmony export */ });
const UPDATE_SEARCH = "UPDATE_SEARCH";
const CLEAR_SEARCH = "CLEAR_SEARCH";
const UPDATE_RESULT = "UPDATE_RESULT";
const START_SEARCH_LOADING = "START_SEARCH_LOADING";
const UPDATE_SLOTCHOOSEN = "UPDATE_SLOTCHOOSEN";


/***/ }),

/***/ 1129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__(2191);
;// CONCATENATED MODULE: ./src/core/reducers/searchReducer.js

const initialState = {
    searchObj: null,
    result: [],
    from: null,
    searchType: null,
    loading: false,
    visitType: null,
    slotsChoosen: [],
    useAlternative: false,
    alternativeResult: [],
    resultGroupPratice: []
};
/* harmony default export */ const searchReducer = ((state = initialState, action)=>{
    switch(action.type){
        case constants/* START_SEARCH_LOADING */.rI:
            return {
                ...state,
                loading: action.loading
            };
        case constants/* UPDATE_SEARCH */.a0:
            return {
                ...state,
                searchObj: action.searchObj,
                from: action.from,
                searchType: action.searchType,
                visitType: action.visitType
            };
        case constants/* UPDATE_SLOTCHOOSEN */.qs:
            return {
                ...state,
                slotsChoosen: action.slotsChoosen
            };
        case constants/* UPDATE_RESULT */.hz:
            return {
                ...state,
                result: action.result,
                loading: action.loading,
                useAlternative: action.useAlternative,
                alternativeResult: action.alternativeResult,
                resultGroupPratice: action.resultGroupPratice
            };
        case constants/* CLEAR_SEARCH */.Kg:
            return {
                ...state,
                searchObj: action.searchObj,
                from: action.from,
                searchType: action.searchType,
                result: action.result,
                loading: action.loading,
                visitType: action.visitType,
                slotsChoosen: action.slotsChoosen,
                useAlternative: action.useAlternative,
                alternativeResult: action.alternativeResult,
                resultGroupPratice: action.resultGroupPratice
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./src/core/reducers/index.js


/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
    searchReducer: searchReducer
}));

;// CONCATENATED MODULE: ./src/core/store.js


 // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducers);
let store = (0,external_redux_namespaceObject.legacy_createStore)(persistedReducer);
let persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);


;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            prefetch: false,
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
                                        children: "Email: admin@doctoora.com.ng"
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
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
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
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
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
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://bit.ly/doctoorachat",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "logo-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
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

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: ./src/pages/_app.js



// import Router from 'next/router';
// import { initGA, logPageView } from '../analytics/index';







class MyApp extends app["default"] {
    static async getInitialProps({ Component , ctx  }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        //Anything returned here can be access by the client
        return {
            pageProps: pageProps
        };
    }
    // componentDidMount() {
    //   initGA();
    //   logPageView();
    //   Router.events.on('routeChangeComplete', logPageView);
    // }
    render() {
        //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.PersistGate, {
                persistor: persistor,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "tawk",
                        strategy: "lazyOnload",
                        children: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src = 'https://embed.tawk.to/5eae517f203e206707f90b64/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        });
    }
}
//makeStore function that returns a new store for every request
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
//withRedux wrapper that passes the store to the App Component
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,1754], () => (__webpack_exec__(1129)));
module.exports = __webpack_exports__;

})();