import Image from "next/image";
import ProfessionalNav from "components/nav/professionalNav";
import {Row, Col} from "antd"
import { proServPortal } from "./api/hello";

const Index = () => {
  return (
    <>
      <ProfessionalNav />
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
          <div className="weare profServ">
            <div className="info-text profServ">
              <h1 className="info-title">Telemedicine</h1>
              <p className="text">
                Professionals with niche medical specialties or primary care
                providers can access patients from anywhere and at any time
                using our structured live-video appointment tools. Physicians
                can benefit from this by increasing their patient base and
                strengthening relationships with current patients.
              </p>
            </div>
            <div className="img-holder profServ">
              <Image src="/services/telemedcine.svg" alt="" layout="fill" />
            </div>
          </div>

          <div className="aboutcontent profServ">
            <div className="img-holder profServ">
              <Image
                src="/services/profhome.svg"
                alt=""
                width={350}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="info-text">
              <h1 className="info-title">Homecare</h1>
              <p className="text">
                Our medical teams are trained and equipped to treat common
                health problems, collect blood samples, and perform other
                procedures from a patient&#39;s home.
              </p>
            </div>
          </div>

          <div className="weare profServ">
            <div className="info-text profServ">
              <h1 className="info-title">
                Hospital Facility Rentals For In/Outpatient Visits
              </h1>
              <p className="text">
                We provide well-equipped and furnished consulting rooms at very
                reasonable prices. Our friendly staff ensures that every visit
                to any Doctoora location is a smooth and pleasant patient
                experience.
              </p>
            </div>
            <div className="img-holder profServ">
              <Image src="/services/prof3.svg" alt="" layout="fill" />
            </div>
          </div>

          <div className="aboutcontent profServ">
            <div className="img-holder profServ">
              <Image
                src="/services/prof4.svg"
                alt=""
                width={350}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="info-text">
              <h1 className="info-title">Electronic Medical Records (EMR)</h1>
              <p className="text">
                We offer a standardized computation of patient data such as
                diagnosis and treatment, allergies, lab reports, and
                prescription drugs. We also offer computerized administration
                processes like scheduling systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="corporate">
      <div className="services portal">
            <div className="team-holder">
              <Row gutter={20}>
                {proServPortal.map((item, index) => (
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
    </>
  );
};

export default Index;
