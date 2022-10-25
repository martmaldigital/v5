import Headtags from "components/seo";
import PatientNav from "components/nav/patientNav";
import Banner from "components/patient/banner";
import Offer from "components/patient/offer";
import Works from "components/patient/works";
import Faq from "components/faq";

const Home = () => {
  return (
    <div className="homepage">
      <Headtags />
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
