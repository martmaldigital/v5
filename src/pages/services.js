import PatientNav from "components/nav/patientNav";
import Image from "next/image";
import { Row, Col, Form, Select} from "antd";
import { useRouter } from "next/router";
import Headtags from "components/seo";

import { comServices, servicesList } from "pages/api/hello";

const Services = () => {
  const router = useRouter();

  const onFinish = (values) => {
    const { service } = values
    router.push(`/services${service}`)
  }

  return (
    <>
    <Headtags
        title="Doctoora - Services - Healthcare in One Place - Book Doctors, Pharmacy, Tests Online"
        desc="Healthcare made easy and affordable. Compare prices, ratings and patients reviews. Book appointments with top and trusted experts in Nigeria on Doctoora"
        keywords="the best healthcare services, good doctors, best doctors in nigeria, Doctors in Nigeria, Nurses in Nigeria, Healthcare services in Nigeria, healthcare near me, good doctors near me"
      />
      <PatientNav />
      <div className="corporate">
        <div className="banner">
          <div className="info-text">
            <h1 className="info-title">Doctoora Health Services</h1>
            <p className="text">
              Healthcare in One Place - Book Doctors, Pharmacy, Tests Online{" "}
            </p>
            <div className="action-holder">
            <Form className="search-form"
        onFinish={onFinish}
      >
        <Row gutter={0}>
          <Col lg={16} xs={24}>
            <Form.Item
              name="service"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Select
                placeholder="Search for Healthcare Services"
                allowClear
                showSearch
              >
                  {
                        servicesList.map((item) => (
                          <Select.Option value={item.slug} key={item.slug}>{item.title}</Select.Option>
                        ))
                      }
              </Select>
            </Form.Item>
          </Col>

          <Col lg={6} xs={24}>
          <button htmltype="submit" className="service-btn">
                    Search
                  </button>
          </Col>
        </Row>
      </Form>
            </div>
          </div>
          <div className="img-holder">
            <Image src="/services/banner.svg" alt="" layout="responsive" width={506} height={336} priority />
          </div>
        </div>

        <div>
          <h1 className="title">Our Services</h1>
          <div className="aboutcontent">
            <div className="info-text">
              <h1 className="info-title">Telemedicine</h1>
              <p className="text">
                We are an online healthcare delivery platform offering Nigerians
                a wide range of health services from anywhere and at any time.
                Making healthcare services accessible to everyone is our number
                one priority. Health Services at Doctoora are integrated with
                the goal of providing the best possible patient experience.
              </p>
            </div>
            <div className="img-holder">
              <Image src="/services/telemedcine.svg" alt="" layout="responsive" width={506} height={336} />
            </div>
          </div>
        </div>

        <div>
          <div className="banner impact">
            <div className="img-holder portal">
              <Image src="/services/homecare.svg" alt="" layout="responsive" width={506} height={336} />
            </div>
            <div className="info-text impact">
              <h1 className="info-title">Homecare</h1>
              <p className="text">
                We ensure that you get the best healthcare services wherever you
                are by combining telemedicine with hospital care and home
                visits. This way, you can consult with specialists and primary
                care providers from all over Nigeria via internet and telephone,
                as well as in-person at affordable rates.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="aboutcontent">
            <div className="info-text">
              <h1 className="info-title">Diagnostics</h1>
              <p className="text">
                Our diagnostic services are performed at well-maintained
                facilities, doctor&#39;s offices and delivery points with
                friendly staff near you. The facilities our doctors use for
                medical care are already in place in Nigerian communities,
                making it easy for patients to access them.
              </p>
            </div>
            <div className="img-holder">
              <Image src="/services/diag.svg" alt="" layout="responsive" width={506} height={336} />
            </div>
          </div>
        </div>

        <div>
          <div className="banner impact">
            <div className="img-holder portal">
              <Image src="/services/inpat.svg" alt="" layout="responsive" width={506} height={336}  />
            </div>
            <div className="info-text impact">
              <h1 className="info-title">In-Patient Care</h1>
              <p className="text">
                You can use our bed space finder to select a facility nearby for
                in-patient services like maternity and delivery on Doctoora. Own
                your health records and choose which providers you grant access
                to. Share online personal health records with Healthcare
                professionals for continuity of care and benefit from quality
                healthcare and collaboration among healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="aboutcontent">
            <div className="info-text">
              <h1 className="info-title">Online Pharmacy</h1>
              <p className="text">
                In collaboration with our community pharmacies, our online
                pharmacy offers prescription and over-the-counter medications.
                You can request delivery to your home or pick up at a nearby
                pharmacy or Doctoora facility. Easily place recurring orders for
                prescriptions and avoid trips to the pharmacy. We deliver home
                prescriptions within 2 hours, nationwide.
              </p>
            </div>
            <div className="img-holder">
              <Image src="/services/onlinepharm.svg" alt="" layout="responsive" width={506} height={336}  />
            </div>
          </div>
        </div>

        <div className="services feat">
          <h1 className="title feat">Featured Services</h1>
          <br />
          <div className="team-holder">
            <Row gutter={20}>
              {comServices.map((item, index) => (
                <Col lg={6} sm={12} xs={24} key={index}>
                  <div className="feature">
                    <div>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={1024}
                        height={860}
                        layout="responsive"
                      />
                    </div>
                    <h3 className="info-title">{item.name}</h3>
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
                  In Urgent Need of Medical Attention?
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

export default Services;
