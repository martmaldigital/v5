import CorporatePage from "components/corporate";
import ProfessionalNav from "components/nav/professionalNav";
import Headtags from "components/seo";
const Index = () => {
  return (
    <>
        <Headtags
        title="Doctoora - Professional Corporate - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, healthcare services, unlimited access, features, benefits"
      />
      <ProfessionalNav />
      <CorporatePage />
    </>
  );
};

export default Index;
