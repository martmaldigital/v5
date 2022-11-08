import Headtags from "components/seo";
import PatientNav from "components/nav/patientNav";
import Banner from "components/patient/banner";
import Offer from "components/patient/offer";
import Works from "components/patient/works";
import Faq from "components/faq";


const Home = () => {
  return (
    <div className="homepage">
      <Headtags
        title="Doctoora - Affordable Patient-Focused Healthcare Services Near You"
        desc="Doctoora provides affordable healthcare services in community hospitals near you. Get quality and affordable health services at home or within your community."
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <div className="homepage-main">
        <PatientNav />
        <Banner />
        <Offer />
        <Works />
        <Faq />
        <div className="spaces"></div>
      </div>
    </div>
  );
};

export default Home;
