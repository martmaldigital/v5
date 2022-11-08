import React, { createRef } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import Headtags from "./seo";
import dynamic from "next/dynamic";
import { corporateServices, servPortal, pricing } from "pages/api/hello";

const ContactForm = dynamic(() => import("./corporateform"))

const CorporatePage = () => {
  const form = createRef();
  
  const scrollToForm = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: form.current.offsetTop
    })
  }


  return (
    <>
         <Headtags
        title="Doctoora - Corporate - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, healthcare services, unlimited access, features, benefits"
      />
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
              <button className="custom-btn into-btn" onClick={() => scrollToForm()}>Get Started</button>
            </div>
          </div>
          <div className="img-holder">
            <Image src="/corporate/banner.svg" alt="" layout="responsive" width={612} height={401} priority />
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
        <div className="workforce" ref={form}>
         <ContactForm />
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
