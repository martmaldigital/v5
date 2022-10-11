import React, { useRef } from 'react';
import { Modal, Form, Checkbox, Row, Col } from 'antd';

const Getstarted = (props) => {
  const { onOk, onCancel, open } = props;
  const formRef = useRef(null);

  const onFinish = (values) => {
    console.log(values);
  };

  const servicesPool = [
    'Homecare',
    'Diagnostics',
    'In-Patient Care',
    'Telemedicine',
    'Online Pharmacy',
  ];

  const howoften = [
    'Very Often',
    'Monthly',
    'Yearly',
    'Only when there is need',
  ];

  const annalList = ['Yes', 'No'];

  const approaches = [
    'Regular Exercise',
    'Healthy Eating',
    'Calorie Counting',
    'Preventative Health Screening',
    'Yoga',
    'Natural Herbs',
  ];

  return (
    <>
      <Modal
        className="interested-modal"
        footer={null}
        title={null}
        onOk={onOk}
        onCancel={onCancel}
        open={open}
      >
        <div className="form-holder">
          <p className="modal-footnote">
            Kindly fill the form below to help us determine the healthcare
            package that best suites your taste and lifestyle <br />
            (Select as many as apply to you)
          </p>

          <Form layout="vertical" ref={formRef} onFinish={onFinish}>
            <Form.Item
              label="Which of our service(s) would you be most interested in?"
              name="services"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  formRef.current.setFieldsValue({
                    services: values,
                  });
                }}
              >
                <Row gutter={8}>
                  {servicesPool.map((item, index) => (
                    <Col key={`ser-list-${index}`}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="How often do you use healthcare services (see a doctor, buy medication, 
                hospital admission, run diagnostics etc) every year?"
              name="frequency"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  let newAssign =
                    values[1] === undefined ? values[0] : values[1];
                  formRef.current.setFieldsValue({
                    frequency: newAssign,
                  });
                }}
              >
                <Row gutter={8}>
                  {howoften.map((item, index) => (
                    <Col key={`freq-${index}`}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="Do you get annual health & wellness check ups done?"
              name="annually"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  let newAssign =
                    values[1] === undefined ? values[0] : values[1];
                  formRef.current.setFieldsValue({
                    annually: newAssign,
                  });
                }}
              >
                <Row gutter={8}>
                  {annalList.map((item, index) => (
                    <Col key={`freq-${index}`}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="What is your approach to staying in top mental and physical condition?"
              name="approaches"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  formRef.current.setFieldsValue({
                    approaches: values,
                  });
                }}
              >
                <Row gutter={8}>
                  {approaches.map((item, index) => (
                    <Col key={`app-list-${index}`}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item>
              <button className="custom-btn into-btn">Proceed to Signup</button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Getstarted;
