import ProfessionalNav from "components/nav/professionalNav";
import AboutPage from "components/about";
import Headtags from "components/seo";

const Index = () => {
  return (
    <>
         <Headtags
        title="Doctoora - About Us - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, healthcare services, unlimited access, features, benefits"
      />
      <ProfessionalNav />
      <AboutPage />
    </>
  );
};

export default Index;
