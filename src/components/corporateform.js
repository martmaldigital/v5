import React, {useState, createRef} from 'react'
import { Row, Col, Form, Input, Select, Checkbox, notification, Button } from "antd";


const openNotificationWithIcon = (type, msg, desc) => {
    notification[type]({
      message: msg,
      description: desc
    })
  }

const CorporateForm = () => {
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
  }



  return (
    <>
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
                      <Select.Option value = "Yes">Yes</Select.Option>
                      <Select.Option value = "No">No</Select.Option>
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
    </>
  )
}

export default CorporateForm