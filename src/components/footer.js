import { useState } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import Instagram from "assets/logo/instagram.svg";
import Twitter from "assets/logo/twitter.svg";
import Whatsapp from "assets/logo/whatsapp.svg";
import LinkedIn from "assets/logo/linkedin.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || !regex.test(email)) {
      setError(true);
    }
    if (email.length > 0 && regex.test(email)) {
      console.log("email submitted successfully", email);
      setEmail("");
      setError(false);
    }
  };

  return (
    <>
      <div className="footer-container">
        <Row gutter={32}>
          <Col lg={6} sm={12} xs={24}>
            <ul>
              <h2>Quick links</h2>
              <li>
                <Link href="/about" passHref>
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://www.doctoora.com/doctor/register">
                  Become A Caregiver
                </a>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <a href="https://www.doctoora.com/privacy">Privacy policy</a>
              </li>
              <li>
                <a href="https://www.doctoora.com/careers">Careers</a>
              </li>
            </ul>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <ul>
              <h2>Connect with us</h2>
              <li>
                <a href="tel: +2348105094729">Phone: +2348105094729</a>
              </li>
              <li>Email: admin@doctoora.com.ng</li>
              <h2>Office Address</h2>
              <li>
                11 Gbajumo Crescent,
                <br />
                Surulere, Lagos
              </li>
            </ul>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <ul>
              <h2>Follow us</h2>
              <li className="logo-img">
                <a href="https://twitter.com/doctoorahealth">
                  <Image src={Twitter} alt="logo" layout="fill" />
                  <span className="logo-text">Twitter</span>
                </a>
              </li>
              <li className="logo-img">
                <a href="https://web.facebook.com/doctoorahomecare">
                  <Image src={Instagram} alt="logo" layout="fill" />
                  <span className="logo-text">Instagram</span>
                </a>
              </li>
              <li className="logo-img">
                <a href="https://www.linkedin.com/company/doctoora">
                  <Image src={LinkedIn} alt="logo" layout="fill" />
                  <span className="logo-text">LinkedIn</span>
                </a>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="logo-img">
                    <Image src={Whatsapp} alt="logo" layout="fill" />
                    <span className="logo-text">Whatsapp&nbsp;Bot</span>
                  </div>
                </Link>
              </li>
            </ul>
            {/* <Subcribe /> */}
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <ul>
              <h2>Newsletter</h2>
              <li>Subcribe to our newsletter to get updates on services</li>
              <form onSubmit={handleSubmit} noValidate>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="custom-btn sub-btn">Subscribe</button>
              </form>
              {error && email.length <= 0 ? (
                <p className="error">Email Address is required</p>
              ) : error && !regex.test(email) ? (
                <p className="error">Please enter a valid email address</p>
              ) : (
                ""
              )}
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copy">
        <p>(c) {new Date().getFullYear()} Doctoora E-Health</p>
      </div>
    </>
  );
};

export default Footer;
