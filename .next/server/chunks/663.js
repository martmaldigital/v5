"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



const Getstarted = (props)=>{
    const { onOk , onCancel , open  } = props;
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onFinish = (values)=>{
        console.log(values);
    };
    const servicesPool = [
        "Homecare",
        "Diagnostics",
        "In-Patient Care",
        "Telemedicine",
        "Online Pharmacy", 
    ];
    const howoften = [
        "Very Often",
        "Monthly",
        "Yearly",
        "Only when there is need", 
    ];
    const annalList = [
        "Yes",
        "No"
    ];
    const approaches = [
        "Regular Exercise",
        "Healthy Eating",
        "Calorie Counting",
        "Preventative Health Screening",
        "Yoga",
        "Natural Herbs", 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            className: "interested-modal",
            footer: null,
            title: null,
            onOk: onOk,
            onCancel: onCancel,
            open: open,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-holder",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "modal-footnote",
                        children: [
                            "Kindly fill the form below to help us determine the healthcare package that best suites your taste and lifestyle ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "(Select as many as apply to you)"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        layout: "vertical",
                        ref: formRef,
                        onFinish: onFinish,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "Which of our service(s) would you be most interested in?",
                                name: "services",
                                rules: [
                                    {
                                        required: true,
                                        message: "Required field"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox.Group, {
                                    onChange: (values)=>{
                                        formRef.current.setFieldsValue({
                                            services: values
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                        gutter: 8,
                                        children: servicesPool.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                                    value: item,
                                                    children: item
                                                })
                                            }, `ser-list-${index}`))
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "How often do you use healthcare services (see a doctor, buy medication, hospital admission, run diagnostics etc) every year?",
                                name: "frequency",
                                rules: [
                                    {
                                        required: true,
                                        message: "Required field"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox.Group, {
                                    onChange: (values)=>{
                                        let newAssign = values[1] === undefined ? values[0] : values[1];
                                        formRef.current.setFieldsValue({
                                            frequency: newAssign
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                        gutter: 8,
                                        children: howoften.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                                    value: item,
                                                    children: item
                                                })
                                            }, `freq-${index}`))
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "Do you get annual health & wellness check ups done?",
                                name: "annually",
                                rules: [
                                    {
                                        required: true,
                                        message: "Required field"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox.Group, {
                                    onChange: (values)=>{
                                        let newAssign = values[1] === undefined ? values[0] : values[1];
                                        formRef.current.setFieldsValue({
                                            annually: newAssign
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                        gutter: 8,
                                        children: annalList.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                                    value: item,
                                                    children: item
                                                })
                                            }, `freq-${index}`))
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "What is your approach to staying in top mental and physical condition?",
                                name: "approaches",
                                rules: [
                                    {
                                        required: true,
                                        message: "Required field"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox.Group, {
                                    onChange: (values)=>{
                                        formRef.current.setFieldsValue({
                                            approaches: values
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                        gutter: 8,
                                        children: approaches.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                                    value: item,
                                                    children: item
                                                })
                                            }, `app-list-${index}`))
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "custom-btn into-btn",
                                    children: "Proceed to Signup"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Getstarted);


/***/ })

};
;