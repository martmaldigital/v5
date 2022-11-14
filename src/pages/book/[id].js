import React, {useState, useEffect, useRef, useCallback} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import api from "config/api"
import {
  Form,
  Row,
  Col,
  Select,
  Drawer,
  Input,
  DatePicker,
  Checkbox,
  Button,
  notification,
  message,
  Modal,
} from "antd";
import PatientNav from 'components/nav/patientNav';
import Headtags from 'components/seo';
import numeral from "numeral";
import Doctor from "components/search/doctor";
import { disabledDate, getNumberForDay } from "utils/helper";
import { PaystackButton } from "react-paystack";
import Related from 'components/search/related';
import dayjs from 'dayjs'


const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};


const visitTypes = ["Home Visit", "Facility Visit", "Video Consultation"];
const titles = ["Dr.", "Mr.", "Mrs.", "Ms.", "Miss", "Prof", "PT"];
const reasons = ["First Time Visit", "Follow Up", "Procedure"];

const { Option } = Select;



const Index = () => {
  const router = useRouter();
  const {id} = router.query;
  const formRef = useRef(null);

  const [doctor, setDoctor] = useState({});
  const [availableDays, setAvailableDays] = useState([]);
  const [available, setAvailable] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [slots, setSlots] = useState([]);
  const [couponData, setCouponData] = useState(null);
  const [formValues, setFormValues] = useState(null);
  const [price, setPrice] = useState(0);
  const [locations, setLocations] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [loadingSlot, setLoadingSlot] = useState(false);
  const [locationChoosen, setLocationChoosen] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [visitTypeChoosen, setVisitTypeChoosen] = useState(null);
  const [validating, setValidating] = useState(false);
  const [visible, setVisible] = useState(false);
  const [alternativeLocations, setAlternativeLocations] = useState([]);
  



  useEffect(() => {
    checkDoctor();
    getConditions();
   },[])

  // load the page from the api
  const checkDoctor = async () => {
    try{
      setLoading(true)
      const res = await axios.get(`${api}/api/professional/check-doctoora-id/${id}`);   
      if (res.data.status === 'success' && res.data.data.professional.doctoora_id === id) {
        setDoctor(res.data.data.professional);   
         setAvailable(res.data.data.availableDays),
          setLoading(false)
      } else {
        openNotificationWithIcon('warning', 'Professional not found!')
      }
    } catch (err) {
      setLoading(false);
      message.error('Error: Something went wrong!')
    } 
  }; 

     // get available conditions
     const getConditions = () => {
        axios
          .get(`${api}/api/health-conditions`)
          .then((res) => {
            setConditions(res.data.data.health_conditions);
          })
          .catch((err) => {
            message.error("Get Conditions: Something went wrong!");
          });
      }
 

 // open the form for booking
  const openDrawer = () => {
    setDrawerVisible(true);
  };

    // close payment portal visiblility
    const closeActuallPay = () => {
      setVisible(false);
    };

  // closing the form for booking
  const onClose = () => {
    if (validating === false && processing === false) {
      setDrawerVisible(false);
      formRef.current.resetFields();
      setCoupon("");
      setCouponData(null);
      setPrice(0);
      setSlots([]);
      setFormValues(null);
    }
  };

 // inital submission
 const onFinish = (values) => {
  console.log(values)
  // setFormValues(values);
  // setValidating(true);
  // setCouponData(null);
        // if (coupon.trim().length > 0) {
        //   axios
        //     .post(`${api}/api/coupons/validate`, {
        //       professional_id: doctor.id,
        //       coupon_code: coupon,
        //       service: values.type,
        //     })
        //     .then((res) => {
        //       if (res.data.status === "success") {
        //         setCouponData(res.data.data.coupon);
        //         message.success(`Validate Coupon: ${res.data.message}`);
        //         if (price > 0) {
        //           setValidating(false);
        //           setVisible(
        //             res.data.data.coupon.value > price ? false : true
        //           );
        //           setPrice(res.data.data.coupon.value > price ? false : true);
        //           if (res.data.data.coupon.value > price) {
        //             saveBooking(null);
        //           }
        //         } else {
        //           setValidating(false);
        //           setVisible(false);
        //           saveBooking(null);
        //         }
        //       } else {
        //         setCoupon("");
        //         setValidating(false);
        //         setCouponData(null);
        //         message.error(`Validate Coupon: ${res.data.message}`);
        //       }
        //     })
        //     .catch((err) => {
        //       message.error("Validate Coupon: Something went wrong!");
        //       setCoupon("");
        //       setValidating(false);
        //       setCouponData(null);
        //     });
        // } else {
        //   if (price > 0) {
        //     setValidating(false);
        //     setVisible(true);
        //   } else {
        //     setValidating(false);
        //     setVisible(false);
        //     saveBooking(null);
        //   }
        // }
      };


  // location change
  const locationChange = (value) => {
    setLocationChoosen(value);
    setSlots([]);
    setPrice(0);
    formRef.current.setFieldsValue({
      date: null,
      time: [],
    });
  };

  // get coverage location
  const getCoverageLocation = () => {
    axios
      .get(`${api}/api/appointments/coverage-locations`)
      .then((res) => {
        setLocations(res.data.data.locations);
        setAlternativeLocations(res.data.data.locations);
      })
      .catch((err) => {
        message.error("Get Coverage Location: Something went wrong!");
      });
  };

    // get search materials
    const getSearchMaterials = () => {
      axios
        .get(`${api}/api/search-criteria`)
        .then((res) => {
          setLocations(res.data.data.availableLocations);
        })
        .catch((err) => {
          message.error("Get Specializations or Location: Something went wrong!");
        });
    };

        // trigger date change
  const triggerChange = (e) => {
    setLoadingSlot(true);
    setPrice(0);
    formRef.current.setFieldsValue({
      // time: [],
    });
    let day = dayjs(e).format("dddd").toLowerCase();
    if (visitTypeChoosen === null) {
      openNotificationWithIcon("warning", "Select a visit type!");
      setLoadingSlot(false);
      formRef.current.setFieldsValue({
        date: null,
      });
    } else {
      if (
        visitTypeChoosen !== "Video Consultation" &&
        locationChoosen === null
      ) {
        openNotificationWithIcon("warning", "Select a location!");
        setLoadingSlot(false);
        formRef.current.setFieldsValue({
          date: null,
        });
      } else {
        let location = locationChoosen;
        axios
          .get(
            `${api}/api/professional/${doctor.id}/sessions/${day}/${location}/${visitTypeChoosen}`
          )
          .then((res) => {
            setSlots(res.data.data.available_Times);
            setLoadingSlot(false);
          })
          .catch((err) => {
            message.error("Slots: Something went wrong!");
            setLoadingSlot(false);
          });
      }
    }
  };


    const checkVisitTypeChange = (value) => {
      formRef.current.setFieldsValue({
        date: null,
        time: [],
        location: "",
      });
      setSlots([]);
      setPrice(0);
      if (value === "Home Visit") {
        if (alternativeLocations.length === 0) {
          getCoverageLocation();
        } else {
          setLocations(alternativeLocations);
        }
      } 
      if (value === "Facility Visit") {
        getSearchMaterials();
      }
      axios
      .get(`${api}/api/professional/check-id/${doctor.id}`)
      .then((res) => {
        if (res.data.status === "success") {
          let availableDays = [];
          res.data.data.availableDays.map((availableDay) => {
            if (availableDay.type === value) {
              availableDays.push(availableDay.day);
            }
          });
          if (value === "Video Consultation") {
            setVisitTypeChoosen(value);
            setLocationChoosen("Video Consultation");
            setAvailableDays(availableDays);
          } else {
            setVisitTypeChoosen(value);
            setLocationChoosen(locationChoosen);
            setAvailableDays(availableDays);
          }
        } else {
          openNotificationWithIcon("warning", "Professional not found!");
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("Error: Something went wrong!");
      });
    }

 

    // recalculate price after clicking slots
    const calculatePrice = (values) => {
      let total = values.reduce((sum, { price }) => sum + price, 0);
      let cst = 2.5;
      let bookingFee = 5.0;
      let paymentCharge = 1.8;
      let totalCharge = cst + bookingFee + paymentCharge;
      let grandTotal = (totalCharge / 100) * total + total;
      setPrice(grandTotal);
    };

     // get price
  const getPrice = (values) => {
    let total = values.reduce((sum, { price }) => sum + price, 0);
    let cst = 2.5;
    let bookingFee = 5.0;
    let paymentCharge = 1.8;
    let totalCharge = cst + bookingFee + paymentCharge;
    let grandTotal = (totalCharge / 100) * total + total;
    return grandTotal;
  };

  // coupon change
  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };


  // savebooking
  const saveBooking = async (reference) => {
    setProcessing(true);
    setVisible(false);
    setDrawerVisible(false);
    let time = [];
    let price_array = [];
    let duration = [];
    console.log(formValues);
    formRef.current.getFieldValue("time").map((item) => {
      time.push(item.time);
      price_array.push(item.price);
      duration.push(item.session);
    });
    let details = {
      reference: reference,
      booking_date: dayjs(formRef.current.getFieldValue("date")).format(
        "YYYY-MM-DD"
      ),
      time,
      duration,
      price: price_array,
      professional_id: doctor.id,
      location:
        formRef.current.getFieldValue("type") === "Video Consultation"
          ? "Video Consultation"
          : formRef.current.getFieldValue("location"),
      complaint: formRef.current.getFieldValue("complaint"),
      reason: formRef.current.getFieldValue("reason"),
      type: formRef.current.getFieldValue("type"),
      health_condition: formRef.current.getFieldValue("health_condition"),
      total_price: price,
      phone: formRef.current.getFieldValue("phone"),
      email: formRef.current.getFieldValue("email"),
      lastname: formRef.current.getFieldValue("lastname"),
      firstname: formRef.current.getFieldValue("firstname"),
      title: formRef.current.getFieldValue("title"),
    }; 
   await axios
      .post(`${api}/api/appointments/guest/book`, {
        ...details,
      })
      .then((res) => {     
          openNotificationWithIcon(
            "success","Booking", "Booking was made successfully, Please check your email to proceed appropriately."
          );
          setDrawerVisible(false);
          setProcessing(false);
          setVisible(false);
          formRef.current.resetFields();
      })
      .catch((err) => {
        message.error("Booking: Something went wrong");
        console.log(err);
        setProcessing(false);
      });
  };

    //paystack payment props
    const componentProps = {
      email: formValues?.email,
      amount: price * 100,
      metadata: {
        name: `${formValues?.firstname + " " + formValues?.lastname}`,
        phone: formValues?.phone,
      },
      publicKey: "pk_test_d3e5ef049fea223a261408b111833a6c46a7186c",
      text: "Pay",
      onClick: () => {
        console.log("pay");
      },
      onSuccess: (res) => {
        saveBooking(res.reference);
      },
    };

  return (
    <>
    <div className="search">
      <Headtags
        title="Doctoora - Same-Day Appointments With The Best Doctors Near You. "
        desc="Doctoora provides easy and affordable online and offline access to verified, quality healthcare services by Doctors, other experts and hospitals in Nigeria"
        keywords="Doctor search results, Search results for doctors in Nigeria, the best doctors near me, search and compare top doctors, find the best specialists in Nigeria, The best dermatologists, Cardiology specialist doctors in nigeria, emergency healthcare, doctor ratings in Nigeria, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <PatientNav />
      <div className="search-main">
           <p className="back bio"
            onClick={() => {
              router.back()
            }}
          >
             <img src="/img/left.svg" alt="back" />
             Back
          </p>
          <div className="search-body">
          <hr className="custom-line" />
          <div className="search-body-content">
            
            {
              loading ? 
              (
                <div className="loader-container">
                <div className="loader"></div>
                </div> 
              ):(
                <>
                <Row gutter={64}>
                  <Col lg={6} xs={24} md={24}>
                    <div className="filter-holder">
                      <div className="related-searches">
                        <h1 className="side-title">
                          Available General Practitioner
                  </h1>
                        <Related 
                        relate={doctor.doctoora_id}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={18} xs={24} md={24}>
                    <div className="result-holder"> 
                            <Doctor
                              doctor={doctor}
                              availableDays={available}
                              key={`doctor-key-${doctor.id}`}
                              openDrawer={openDrawer}
                      />
                    </div>
                  </Col>
                </Row>
                </>
              )
            }               
          </div>
        </div>
          </div>


          <Drawer
          title={null}
          placement="left"
          onClose={onClose}
          open={drawerVisible}
          className="book-drawer"
          footer={
            <Row gutter={16}>
              <Col lg={12} xs={12}>
                <Button
                  block
                  className="go-btn"
                  disabled={validating || processing || visible}
                  loading={validating || processing}
                  onClick={() => {
                    formRef.current.submit();
                  }}
                >
                  {processing ? "Processing..." : "Proceed"}
                </Button>
              </Col>
              <Col lg={12} xs={12}>
                <Button
                  block
                  className="cancel-btn"
                  disabled={validating || processing || visible}
                  loading={validating || processing}
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          }
        >
          <h1 className="heading">
            Hi, I’m Dr. {doctor?.firstname} {doctor?.lastname}
            <br />
            Why would you like to see me?
          </h1>

          <p className="footnote">
            Please fill the information box below to complete booking
          </p>

          <div className="form-holder">

            <Form
              layout="vertical"
              ref={formRef}
              onFinish={onFinish}
            >
              <Row gutter={8}>
                <Col lg={24} xs={24}>
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Title"
                      style={{
                        width: "100%",
                      }}
                    >
                      {titles.map((item) => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Last Name" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid email",
                      },
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Email" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Phone" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="type"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Visit Type"
                      style={{
                        width: "100%",
                      }}
                      onChange={(e) => checkVisitTypeChange(e)}
                    >
                      {visitTypes.map((visit) => (
                        <Option value={visit} key={visit}>
                          {visit}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                {visitTypeChoosen !== "Video Consultation" && (
                  <Col lg={12} xs={24}>
                    <Form.Item
                      name="location"
                      rules={[
                        {
                          required: true,
                          message: "Input required",
                        },
                      ]}
                    >
                      <Select
                        onChange={(e) => locationChange(e)}
                        className="book-select"
                        placeholder="Select location"
                        showSearch
                        style={{
                          width: "100%",
                        }}
                      >
                        {locations.map((item) => (
                          <Option value={item.landmark} key={item.landmark}>
                            {item.landmark}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                )} 
                <Col lg={24} xs={24}>
                  <Form.Item
                    name="reason"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Reason"
                      style={{
                        width: "100%",
                      }}
                    >
                      {reasons.map((reason) => (
                        <Option value={reason} key={reason}>
                          {reason}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="complaint"
                rules={[
                  {
                    required: true,
                    message: "Input required",
                  },
                ]}
              >
                <Input.TextArea rows={4}
                style={{
                  resize: "none",
                  height:"100%"
                }}
                  className="book-input"
                  placeholder="Reason for Visit/Complaint"
                />
              </Form.Item>
              <Form.Item
                name="date"
                rules={[
                  {
                    required: true,
                    message: "Input required",
                  },
                ]}
              >
                <DatePicker
                  dateRender={(current) => {
                    const style = {};
                    getNumberForDay(availableDays).map((item) => {
                      if (dayjs(current).day() === item) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                      }
                    });
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                  onChange={triggerChange}
                  disabledDate={disabledDate}
                  className="book-date"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
                <Form.Item
                  name="time"
                  label="Time (Pick a suitable time)"
                  className="book-check"
                  rules={[
                    {
                      required: true,
                      message: "Input field",
                    },
                  ]}
                >
                  <Checkbox.Group onChange={calculatePrice}>
                    <Row
                      gutter={32}
                      className={`slots-holder  ${
                        loadingSlot ? "loading" : ""
                      }`}
                    >
                      {loadingSlot ? (
                        <div className="x-loader">
                         <div className="loader"></div>
                        </div>
                      ) : (
                        <>
                          {slots.length > 0 ? (
                            slots.map((slot, index) => (
                              <Col
                                key={index}
                                sm={12}
                                xs={24}
                                className="book-check"
                              >
                                <Checkbox value={slot}>{slot.time}</Checkbox>
                              </Col>
                            ))
                          ) : (
                            <p className="none-found">
                              There are no slots availble
                            </p>
                          )}
                        </>
                      )}
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
                {/* <Form.Item
                                className="book-select-holder"
                                name="health_condition"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input a  condition',
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Existing Conditions (Pick as suitable)"
                                  allowClear
                                  mode="tags"
                                  // maxTagCount='responsive'
                                  tokenSeparators={[',']}
                                  className="book-select"
                                >
                                  {
                                    conditions.map((item) => (
                                      <Option value={item.name} key={item.name}>{item.name}</Option>
                                    ))
                                  }
                                </Select>
                              </Form.Item> */}
                              <Form.Item
                                className="book-select-holder"
                                name="health_condition"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input a  condition',
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Conditions (Pick as suitable)"
                                  allowClear
                                  mode="multiple"
                                  maxTagCount='responsive'
                                  onChange={(value) => console.log(`selected ${value}`)}
                                >
                                  {
                                    conditions.map((item) => (
                                      <Option value={item.name} label={item.name} key={item.name}></Option>
                                    ))
                                  }
                                </Select>
                              </Form.Item>

            </Form>

            <div className="pricing">
              <h1 className="heading hidctor">Cost</h1>
              <div className="cost-numbers">
                {couponData !== null && (
                  <h1
                    className={`heading amount ${
                      couponData !== null ? "former-price" : ""
                    }`}
                  >
                    ₦
                    {numeral(
                      price === 0
                        ? getPrice(formRef.current.getFieldValue("time"))
                        : price + couponData.value
                    ).format("0,0")}
                  </h1>
                )}
                <h1 className="heading amount">
                  ₦{numeral(price).format("0,0")}
                </h1>
              </div>
              <p className="footnote">
                ( 2.5% CSR fund, 5% booking fees and 1.8% payment charges incl.)
              </p>
            </div>

            <Form layout="vertical" className="coupon-form">
              <Form.Item
                label="Coupon 
                (Optional)"
              >
                <Input
                  value={coupon}
                  name="coupon"
                  onChange={handleCouponChange}
                  placeholder="Coupon"
                />
              </Form.Item>
            </Form>
          </div>
        </Drawer>
          </div>
          <Modal
        open={visible}
        footer={null}
        className="paystack-modal"
        onOk={closeActuallPay}
        onCancel={closeActuallPay}
      >
        <div className="payment-modal-main">
          <h1 className="heading hidctor">Total booking amount</h1>
          <div className="cost-btn">
            <div className="cost-numbers">
              {couponData !== null && (
                <h1
                  className={`heading amount ${
                    couponData !== null ? "former-price" : ""
                  }`}
                >
                  ₦
                  {numeral(
                    price === 0
                      ? getPrice(formRef.current.getFieldValue("time"))
                      : price + couponData.value
                  ).format("0,0")}
                </h1>
              )}
              <h1 className="heading amount">
                ₦{numeral(price).format("0,0")}
              </h1>
            </div>
            <PaystackButton
              className={`custom-btn paystack-btn`}
              {...componentProps}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Index