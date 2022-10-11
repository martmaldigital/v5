"use strict";
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 20:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(924);
/* harmony import */ var config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_2__.Input;
const openNotificationWithIcon = (type, msg, desc)=>{
    antd__WEBPACK_IMPORTED_MODULE_2__.notification[type]({
        message: msg,
        description: desc
    });
};
const ContactPage = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const form = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    const onFinish = (values)=>{
        // console.log('hello');
        setLoading(true);
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${config_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z}/api/contact-us`, {
            ...values
        }).then((res)=>{
            setLoading(false);
            if (res.data.status === "success") {
                openNotificationWithIcon("success", res.data.message);
                form.current.resetFields();
            } else {
                let getAllErrors = Object.values(res.data.data.errors);
                let errors = getAllErrors.map((trying)=>{
                    return trying[0];
                });
                let desc = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: errors.map((error)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: error
                        }, error))
                });
                openNotificationWithIcon("warning", res.data.message, desc);
            }
        }).catch((err)=>{
            console.log(err);
            openNotificationWithIcon("error", "Error", "Something went wrong");
            setLoading(false);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "contact",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "contact-main",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    align: "top",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            lg: 10,
                            xs: 24,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "send-form",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "title",
                                        children: "Send Us An Email"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                        ref: form,
                                        onFinish: onFinish,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                name: "full_name",
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Please input your fullname"
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                    placeholder: "Fullname",
                                                    className: "book-input"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                gutter: 16,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        lg: 12,
                                                        xs: 24,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                            name: "phone",
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: "Please input your phone number"
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                                placeholder: "Phone",
                                                                className: "book-input"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        lg: 12,
                                                        xs: 24,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                            name: "email",
                                                            rules: [
                                                                {
                                                                    type: "email",
                                                                    message: "The input is not valid email"
                                                                },
                                                                {
                                                                    required: true,
                                                                    message: "Please input your email"
                                                                }, 
                                                            ],
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                                placeholder: "Email",
                                                                className: "book-input"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                name: "subject",
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Please input your subject"
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                    placeholder: "Subject",
                                                    className: "book-input"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                                name: "message",
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Required field"
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                                                    style: {
                                                        resize: "none",
                                                        height: "100%"
                                                    },
                                                    rows: 6,
                                                    className: "book-input",
                                                    placeholder: "Type in your message"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "action-holder",
                                                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "loader"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "custom-btn into-btn",
                                                    children: "Send mail"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            lg: 14,
                            xs: 24,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "banner-holder",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/contact.svg",
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api = process.env.NEXT_PUBLIC_USERAPI || "https://ams.doctoora.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ })

};
;