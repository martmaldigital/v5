import React, {useState, createRef} from 'react'
// import { useRouter } from 'next/router'
// import { Form, Input, notification, Button, Select } from "antd";

// import PatientNav from 'components/nav/patientNav';


// import api from "config/api";


// const openNotificationWithIcon = (type, msg, desc) => {
//   notification[type]({
//     message: msg,
//     description: desc,
//   });
// };

// const titles = ["Dr.", "Mr.", "Mrs.", "Ms.", "Miss", "Prof", "PT"];


const Voucher = () => {
  
    // const [loading, setLoading] = useState(false);
    // const form = createRef();
    // const router = useRouter();
    // const {slug} = router.query;

    // const onFinish = (values) => {
    //     console.log(values)
    // }

  return (
    <>
    <div>Voucher</div>
      {/* <PatientNav />
      <div className="about">
        <div className="about-main">
          <div className="banner profServ">
          <img src="/img/background-right.svg" alt="" className="banner-img" />
            <img src="/img/background-left.svg" alt="" className="banner-img2" />
            <div className="banner-holder profServ">
              <div className="info-text">
                <h3 className="title services">Our Services </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="corporate">
        <div className="workforce">
          <div className="form-holder">
          <Form layout="vertical" ref={form} 
        onFinish={onFinish}
      >
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
                      placeholder="Title"
                      style={{
                        width: "100%",
                      }}
                    >
                      {titles.map((item) => (
                        <Select.Option value={item} key={item}>
                          {item}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

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
          <div className="banner impact">
            <div className="info-text impact">
              <p className="">How to redeem your voucher:</p>
              <ul>
                <li>Fill out the form and tap “Get Voucher”
Proceed to login
Order any medical service
Select voucher at payment
</li>
              </ul>
              <p className="text">
                Increase your employees&#39; morale by giving them access to our
                wide range of patient-centric services, which can be assessed at
                their leisure, anywhere in the country.
              </p>
            </div>
          </div>
        </div>

      </div> */}
    </>
  )
}

export default Voucher