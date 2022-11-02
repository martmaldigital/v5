import PatientNav from "components/nav/patientNav";
import {Row, Col} from "antd"
import Headtags from "components/seo";


const serv = [
  {
    title: "Register",
    note: "Register and create an account, buy a membership starter pack starting from ₦21,500."    
  },
  {
    title: "Doctoora Credits",
    note: "The equivalent Doctoora credits are deposited into your account. Rollover unused credits with every top up."    
  },
  {
    title: "Pay for Healthcare with Credit",
    note: "Purchase available Doctoora plans or pay for healthcare services with the Doctoora credits directly."    
  },
]
const Index = () => {
  return (
    <>
         <Headtags
        title="Doctoora - Membership Packages - Join Africa's First Members-Only Digital Healthcare System"
        desc="Enjoy unlimited access to affordable healthcare when you join our multilocation healthcare network in Nigeria. Get up to N1mi worthl in Health Credits"
        keywords="family memberships, N32,500 family membership, healthcare services, unlimited access, features, benefits"
      />
      <PatientNav />
      <div className="about">
        <div className="about-main">
        <div className="corporate">
      <div className="services portal">
        <div className="head">
          <h1 className="title">Never Deal With HMO Palaver Ever Again
          </h1>
          <p className="footnote">Join Nigeria’s first members-only healthcare network and enjoy 24/7 access to the best medical<br />
services at affordable rates
</p>
<ul>
  <li>
  No approvals ✅
  </li>
  <li>No waiting period ✅</li>
  <li>No pre-existing conditions excluded ✅</li>
  <li>No age-groups excluded ✅</li>
</ul>

        </div>

<h1 className="title pro">How Doctoora Membership Works</h1>

            <div className="team-holder">
              <Row gutter={20}>
                {serv.map((item, index) => (
                  <Col lg={8} sm={24} xs={24} key={index}>
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

                <h3 className="title member">Choose a Starter Pack </h3>
          {/* Basic membership */}
          <div className="aboutcontent limited">
            <div className="info-text limited">
              <h1 className="info-title lp">Basic</h1>
              <ul>
                <li>Doctoora Credits: 132,000</li>
                <li>Health Checks(7+ Test)</li>
                </ul>
                <p className="txt b">Services</p>
                <ul>
                <li>General Consultation(Telemedicine & Clinic Visit).</li>
                <li>Routine medications.</li>
                <li>Health Checks(7+ Test).</li>
                <li>Basic Investigations.</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership lp">₦21,500</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* Silver membership */}
          <div className="spaces"></div>
          <div className="aboutcontent general">
            <div className="info-text general">
              <h1 className="info-title gp">Silver</h1>
              <ul>
                <li>Doctoora Credits: 216,000</li>
                <li>Health Checks(10+ Test)</li>
                </ul>
                <p className="txt s">Services</p>
                <ul>
                <li>General Consultation & Specialist Consultation.</li>
                <li>Routine medications.</li>
                <li>Health Checks(10+ Test).</li>
                <li>Basic Investigations.</li>
                <li>Dental, Optical & Physio Consultations.</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership gp">₦39,500</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* Gold membership */}
          <div className="spaces"></div>
          <div className="aboutcontent special">
            <div className="info-text special">
              <h1 className="info-title sp">Gold</h1>
              <ul>
                <li>Doctoora Credits: 420,000</li>
                <li>Health Checks(15+ Test)</li>
                </ul>
                <p className="txt g">Services</p>
                <ul>
                <li>General Consultation & Specialist Consultation.</li>
                <li>Routine & chronic medications.</li>
                <li>Health Checks(15+ Test).</li>
                <li>Basic Investigations.</li>
                <li>Dental, Optical & Physio Treatment (Co-pay).</li>
                <li>Admission & Emergency (Co-pay).</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership sp">₦73,500</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* Platinum membership */}
          <div className="spaces"></div>
          <div className="aboutcontent small">
            <div className="info-text small">
              <h1 className="info-title s">Platinum</h1>
              <ul>
                <li>Doctoora Credits: 840,000</li>
                <li>Health Checks(23+ Test)</li>
                </ul>
                <p className="txt p">Services</p>
                <ul>
                <li>General Consultation & Specialist Consultation.</li>
                <li>Routine & chronic medications.</li>
                <li>Health Checks(23+ Test).</li>
                <li>Basic Investigations.</li>
                <li>Dental, Optical & Physio Treatment (Co-pay).</li>
                <li>Admission & Emergency (Co-pay).</li>
                <li>Psychiatric Evaluation (Co-pay).</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership s">₦123,500</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* family membership */}
          <div className="spaces"></div>
          <div className="aboutcontent midi">
            <div className="info-text midi">
              <h1 className="info-title m">Family(4)</h1>
              <ul>
                <li>Doctoora Credits: 1, 752,000</li>
                <li>Health Checks(15+ Test)</li>
                </ul>
                <p className="txt f">Services</p>
                <ul>
                <li>General Consultation & Specialist Consultation.</li>
                <li>Routine & chronic medications.</li>
                <li>Health Checks(23+ Test).</li>
                <li>Basic Investigations.</li>
                <li>Dental, Optical & Physio Treatment (Co-pay).</li>
                <li>Admission & Emergency (Co-pay).</li>
                <li>Psychiatric Evaluation (Co-pay).</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership m">₦300,000</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="spaces"></div>
    </>
  );
};

export default Index;
