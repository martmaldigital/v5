import ProfessionalNav from "components/nav/professionalNav";
import {Row, Col} from "antd"
import Headtags from "components/seo";


const serv = [
  {
    title: "Register",
    note: "Register and create an account, subscribe to membership starting from ₦35,000 per month."
  },
  {
    title: "Eligibility",
    note: "This provides access to our eligible services for a validity period of 1 month, with unlimited access to facility rentals."
  },
  {
    title: "Provide Care",
    note: "Receive appointments from Doctoora patients nationwide through telemedicine, homecare, and facility visits."
  },
]

const Index = () => {
  return (
    <>
             <Headtags
        title="Doctoora - Professional Membership Packages - Join Africa's First Members-Only Digital Healthcare System"
        desc="Enjoy unlimited access to affordable healthcare when you join our multilocation healthcare network in Nigeria. Get up to N1mi worthl in Health Credits"
        keywords="family memberships, N32,500 family membership, healthcare services, unlimited access, features, benefits"
      />
      <ProfessionalNav />
      <div className="about">
        <div className="about-main">
        <div className="corporate">
      <div className="services portal">
          <h1 className="title">Enjoy Access to Doctoora Resources When You Become a Partner</h1>
          <p className="footnote">Our memberships allows you to work more efficiently by providing you with access to more<br />
facilities, equipment, and tools that will help you get the most out of your practice.</p>
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

            <div className="banner-holder profServ">
              <div className="">
                <h3 className="title member">Choose a Starter Pack </h3>
              </div>
            </div>
          {/* Limited Partner membership */}
          <div className="aboutcontent limited">
            <div className="info-text limited">
              <h1 className="info-title lp">Generalist Partner <span> (Become a generalist partner and enjoy private practice).</span></h1>           
                <p className="txt b">Services</p>
                <ul>
                <li>Valid for <strong>ONE(1)</strong> month.</li>
                <li><strong>₦8,000</strong> per hour.</li>
                <li>Unlimited access to facility rentals.</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership lp">₦35,000</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* General Partner membership */}
          <div className="spaces"></div>
          <div className="aboutcontent general">
            <div className="info-text general">
              <h1 className="info-title gp">Specialist Partner <span> (Get access to tailored resources for specialist care).</span></h1>
                <p className="txt s">Services</p>
              <ul>
                <li>Valid for <strong>ONE(1)</strong> month.</li>
                <li><strong>₦9,000</strong> per hour.</li>
                <li>Unlimited access to facility rentals.</li>
                <li>Enjoy inbound referrals</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership gp">₦45,000</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* Small Group membership */}
          <div className="spaces"></div>
          <div className="aboutcontent small">
            <div className="info-text small">
              <h1 className="info-title s">Small Group Practice <span> (For group practices and E-health startups with 5 professionals).</span></h1>
                <p className="txt p">Services</p>
              <ul>
                <li>Valid for <strong>ONE(1)</strong> month.</li>
                <li><strong>₦20,000</strong> per hour.</li>
                <li>Unlimited access to facility rentals.</li>
                <li>
                  Enjoy inbound referrals
                </li>
                <li>Ideal for group of <strong>FIVE(5) </strong>professionals.</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership s">₦200,000</h1>
              <button className="custom-btn sub">Subscribe</button>
            </div>
          </div>

          {/* midi group membership */}
          <div className="spaces"></div>
          <div className="aboutcontent midi">
            <div className="info-text midi">
              <h1 className="info-title m">Large Group Practice <span> (Ideal for organizations with 50 professionals).</span></h1>
                <p className="txt f">Services</p>
              <ul>
                <li>Valid for <strong>ONE(1)</strong> month.</li>
                <li><strong>₦50,000</strong>  per hour.</li>
                <li>Unlimited access to facility rentals.</li>

                <li>Ideal for organizations.</li>
              </ul>
            </div>
            <div className="img-holder membership">
              <h1 className="title membership m">₦1,200,000</h1>
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
