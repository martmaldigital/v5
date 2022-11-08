import React, { createRef, useState } from "react";
import { Row, Col, Form, Input, notification } from "antd";
import axios from "axios";
import api from "config/api";

const { TextArea } = Input;

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const form = createRef();

  const onFinish = (values) => {
    // console.log('hello');
    setLoading(true);
    axios
      .post(`${api}/api/contact-us`, {
        ...values,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          openNotificationWithIcon("success", res.data.message);
          form.current.resetFields();
        } else {
          let getAllErrors = Object.values(res.data.data.errors);
          let errors = getAllErrors.map((trying) => {
            return trying[0];
          });
          let desc = (
            <div>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </div>
          );
          openNotificationWithIcon("warning", res.data.message, desc);
        }
      })
      .catch((err) => {
        console.log(err);
        openNotificationWithIcon("error", "Error", "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <Row align="top">
            <Col lg={10} xs={24}>
              <div className="send-form">
                <h1 className="title">Send Us An Email</h1>
                <Form
                  ref={form}
                  onFinish={onFinish}
                  //   onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item
                    name="full_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your fullname",
                      },
                    ]}
                  >
                    <Input placeholder="Fullname" className="book-input" />
                  </Form.Item>
                  <Row gutter={16}>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number",
                          },
                        ]}
                      >
                        <Input placeholder="Phone" className="book-input" />
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
                            message: "Please input your email",
                          },
                        ]}
                      >
                        <Input placeholder="Email" className="book-input" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: "Please input your subject",
                      },
                    ]}
                  >
                    <Input placeholder="Subject" className="book-input" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Required field",
                      },
                    ]}
                  >
                    <TextArea
                      style={{
                        resize: "none",
                        height: "100%",
                      }}
                      rows={6}
                      className="book-input"
                      placeholder="Type in your message"
                    />
                  </Form.Item>
                  <div className="action-holder">
                    {loading ? (
                      <div className="loader"></div>
                    ) : (
                      <button className="custom-btn into-btn">Send mail</button>
                    )}
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={14} xs={24}>
              <div className="banner-holder">
                <img src="/img/contact.svg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
