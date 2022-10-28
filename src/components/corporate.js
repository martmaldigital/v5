import React, { useRef, useState, createRef } from "react";
import Image from "next/image";
import { Row, Col, Form, Input, Select, Checkbox, notification, Button } from "antd";
import axios from "axios";
import api from "config/api";

import { corporateServices, servPortal, pricing } from "pages/api/hello";


const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc
  })
}

const CorporatePage = () => {
  const form = createRef();
  const [loading, isLoading] = useState(false);

  const onFinish = (values) => {
    isLoading(true)
    axios.post(`${api}/api/corporates/onboarding-request`, {
      ...values
    }).then((res) => {
      isLoading(false)
      if (res.data.status === 'success') {
        openNotificationWithIcon('success', res.data.message)
      } else {
        let getAllErrors = Object.values(res.data.data.errors)
        let errors = getAllErrors.map((trying) => {
          return trying[0]
        })
        let desc = (
          <div>
            {
              errors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </div>
        )
        openNotificationWithIcon('warning', res.data.message, desc)
      }
    }).catch((err) => {
      // console.log(err)
      openNotificationWithIcon('error', 'Error', 'Something went wrong')
      isLoading(false)
    })
    form.current.resetFields();

  console.log(values);
  }


  return (
    <>
      <div className="corporate">
        <div className="banner">
          <div className="info-text">
            <h1 className="info-title">
              The Best Healthcare For Your Team to Work Effectively
            </h1>
            <p className="text">
            Increase your productivity with out 24-hour telemedicine, home visits and efficient community-based services.
            </p>
            <div className="action-holder">
              <button className="custom-btn into-btn">Get Started</button>
            </div>
          </div>
          <div className="img-holder">
            <Image src="/corporate/banner.svg" alt="" layout="responsive" width={612} height={401} />
          </div>
        </div>

        <div className="services">
          <h1 className="title">
          Doctoora Offers Direct Access to Healthcare Services
          </h1>
          <br />
          <div className="team-holder">
            <Row gutter={20}>
              {corporateServices.map((item, index) => (
                <Col lg={6} sm={12} xs={24} key={index}>
                  <div className="card-holder">
                    <h3 className="info-title">{item.title}</h3>
                    <p className="note">{item.note}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="workforce">
          <h1 className="title">Get Started On The Best Healthcare Platform For Your Workforce</h1>
          <div className="form-holder">
          <Form layout="vertical" ref={form} 
        onFinish={onFinish}
      >
        <Row gutter={20}>
          <Col lg={12}  xs={24}>
       <Form.Item
                    name="company_name"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Company Name" />
                  </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                  <Form.Item
                    name="company_email"
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
                    <Input placeholder="Company Email Address" />
                  </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                   <Form.Item
                    name="company_phone"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Company Phone Number" />
                  </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                   <Form.Item
                    name="number_of_employee"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                  >
                    <Input placeholder="Number of Staff" />
                  </Form.Item>
                  </Col>
                  <Col lg={12} xs={24}>
                   <Form.Item
                    name="company_address"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                    >
                    <Input placeholder="Name of Contact Person" />
                  </Form.Item>
                  </Col>
                  <Col lg={12}  xs={24}>
                   <Form.Item
                    name="demo"
                    rules={[
                      {
                        required: true,
                        message: "Input required",
                      },
                    ]}
                    >
                    <Select placeholder="Do you want a Demo" >
                      <Option value = "Yes">Yes</Option>
                      <Option value = "No">No</Option>
                    </Select>
                  </Form.Item>
                  </Col>

                    </Row>
                  <Form.Item
              label="Which of our service(s) would you be most interested in?"
              name="services"
              rules={[
                {
                  required: true,
                  message: "Required field",
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  form.current.setFieldsValue({
                    services: values,
                  });
                }}
              >
                      <Checkbox value="Telemedicine">Telemedicine</Checkbox>
                      <Checkbox value="Homecare">Homecare</Checkbox>
                      <Checkbox value="In facility">In-Facility Care</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Button
              htmlType="submit"
              className="go-btn"
               disabled={loading}
               loading={loading}
            >
              Submit
            </Button>
      </Form>
          </div>
        </div>

        <div className="">
          <h1 className="title">Double your Impact</h1>
          <div className="banner impact">
            <div className="img-holder">
              <Image src="/corporate/impact.svg" alt="" layout="responsive" width={506} height={336}/>
            </div>
            <div className="info-text impact">
              <h1 className="info-title impact">Improve Employee Health</h1>
              <p className="text">
                Increase your employees&#39; morale by giving them access to our
                wide range of patient-centric services, which can be assessed at
                their leisure, anywhere in the country.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutcontent">
          <div className="info-text">
            <h1 className="info-title">Support Community Development</h1>
            <p className="text">
              Our commitment to investing in physical infrastructure for
              healthcare services means your payments will do more for the
              communities your employees reside in through Doctoora.
            </p>
          </div>
          <div className="img-holder">
            <Image src="/corporate/support.svg" alt="" layout="responsive" width={506} height={336}/>
          </div>
        </div>

        <div>
          <h1 className="title">Our Corporate Membership Services</h1>
          <div className="banner impact">
            <div className="img-holder portal">
              <Image src="/corporate/adminportal.svg" alt="" layout="responsive" width={612} height={479}/>
            </div>
            <div className="info-text">
              <h1 className="info-title portal">
                Admin Portal Built For Savvy HR Teams
              </h1>
              <ul className="text c">
                <li>
                  Add up to 10,000 employees with our bulk upload feature.
                </li>
                <li>
                  Assign resources to Staff in a flexible way, choose who gets
                  what.
                </li>
                <li>Keep track of purchased resources.</li>
                <li>
                  Create and define your own bouquets and select the mix of
                  services to offer your people.
                </li>
                <li>
                  Purchase new health credits and roll over unassigned credits.
                </li>
                <li>
                  Order preemployment medicals, recreational drug tests, covid
                  tests and more with ease.
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutcontent impact">
            <div className="info-text">
              <h1 className="info-title">
                A Personal Health Portal For Your Staff
              </h1>
              <ul className="text portal">
                <li>In-built personal healthcare records</li>
                <li>Specialist search & appointment booking service</li>
                <li>
                  Ask a Doctor (chat), book medical tests, online pharmacy
                </li>
                <li>Request medical reports with ease</li>
                <li>Compare rates, ratings & reviews</li>
              </ul>
            </div>
            <div className="img-holder">
              <Image src="/corporate/personalportal.svg" alt="" layout="responsive" width={612} height={479}/>
            </div>
          </div>
          <div className="services portal">
            <br />
            <div className="team-holder">
              <Row gutter={20}>
                {servPortal.map((item, index) => (
                  <Col lg={8} sm={12} xs={24} key={index}>
                    <div className="card-holder portal">
                      <h3 className="info-title">{item.title}</h3>
                      <p className="note">{item.note}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
        <div className="services">
          <h1 className="title"> Our Pricing Options</h1>
          <br />
          <div className="team-holder">
            <Row gutter={20}>
              {pricing.map((item, index) => (
                <Col lg={8} sm={12} xs={24} key={index}>
                  <div className="card-holder pricing">
                    <h3 className="info-title">{item.title}</h3>
                    <p className="note">{item.note}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-main">
          <div className="banner">
            <div className="banner-holder">
              <div className="info-text corporate">
                <h3 className="banner-title">
                  Signup With Your Corporation Today!!!!!
                </h3>
                <p className="text">
                  Ask a doctor today and get on-the-go response to your medical
                  questions.
                </p>
                <button className="custom-btn into-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporatePage;
