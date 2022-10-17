import ProfessionalNav from "components/nav/professionalNav";
import Footer from "components/footer";
import Banner2 from "components/professional/banner";
import Works from "components/professional/works";
import Facilities from "components/professional/facilities";

const Professional = () => {
  return (
    <div className="homepage">
      {/* <Headtags /> */}
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
