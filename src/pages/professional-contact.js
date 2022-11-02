import ContactPage from "components/contact";
import ProfessionalNav from "components/nav/professionalNav";

const Index = () => {
  return (
    <>
      <Headtags
        title="Doctoora - Professional Contact Us - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, healthcare services, unlimited access, features, benefits"
      />
      <ProfessionalNav />
      <ContactPage />
    </>
  );
};

export default Index;
