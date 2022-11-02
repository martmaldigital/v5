import ProfessionalNav from "components/nav/professionalNav";
import Banner2 from "components/professional/banner";
import Works from "components/professional/works";
import Facilities from "components/professional/facilities";
import Headtags from "components/seo";

const Professional = () => {
  return (
    <div className="homepage">
     <Headtags
        title="Doctoora - Professionals - Become a Healthcare Provider and Get paid"
        desc="Doctoora professional grant access to healthcare providers to meet and attend to their patients need via rentable medical facilities, teleconsultations."
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, Meet your patients In doctoora locations, healthcare locations & equipment for lease,
        digital health, telemedicine, medical consultants"
      />
      <div className="homepage-main">
        <ProfessionalNav />
        <Banner2 />
        <Works />
        <Facilities />
      </div>
    </div>
  );
};

export default Professional;
