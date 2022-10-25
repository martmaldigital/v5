import PatientNav from "components/nav/patientNav";

const Index = () => {
  return (
    <>
      <PatientNav />
      <div className="about">
        <div className="about-main">
          <div className="banner membership">
            <div className="banner-holder profServ">
              <div className="info-text">
                <h3 className="title member">Become a Member </h3>
              </div>
            </div>
          </div>

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
