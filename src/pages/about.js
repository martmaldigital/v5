import PatientNav from "components/nav/patientNav";
import AboutPage from "components/about";
import Headtags from "components/seo";

const About = () => {
  return (
    <>
     <Headtags
        title="Doctoora - About Us - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, N32,500 family membership, healthcare services, unlimited access, features, benefits"
      />
      <PatientNav />
      <AboutPage />
    </>
  );
};

export default About;
