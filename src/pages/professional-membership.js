import ProfessionalNav from "components/nav/professionalNav";
import Footer from "components/footer";

const Index = () => {
  return (
    <>
      <ProfessionalNav />
      <div className="about">
        <div className="about-main">
          <div className="banner membership">
            <div className="banner-holder profServ">
              <div className="info-text">
                <h3 className="title">Become a Member </h3>
              </div>
            </div>
          </div>

          {/* Limited Partner membership */}
          <div className="aboutcontent limited">
            <div className="info-text limited">
              <h1 className="info-title lp">Generalist Partner<span>(Become a generalist partner and enjoy private practice).</span></h1>
              <ul>
                <p className="txt">Services</p>
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
              <h1 className="info-title gp">Specialist Partner<span>(Get access to tailored resources for specialist care).</span></h1>
              <ul>
                <p className="txt">Services</p>
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
              <h1 className="info-title s">Small Group Practice <span>(for group practices and E-health startups with 5 professionals).</span></h1>
              <ul>
                <p className="txt">Services</p>
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
              <h1 className="info-title m">Large Group Practice <span>(Ideal for organizations with 50 professionals).</span></h1>
              <ul>
                <p className="txt">Services</p>
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
          <div className="spaces"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
