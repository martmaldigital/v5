import PatientNav from "components/nav/patientNav";
import ContactPage from "components/contact";

const Contact = () => {
  return (
    <>
      <Headtags
        title="Doctoora - Contact Us - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, healthcare services, unlimited access, features, benefits"
      />
      <PatientNav />
      <ContactPage />
    </>
  );
};

export default Contact;
