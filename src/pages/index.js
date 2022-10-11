import Headtags from 'components/seo';
import Banner from 'components/patient/banner';
import Offer from 'components/patient/offer';
import Works from 'components/patient/works';
import Faq from 'components/faq';

const Home = () => {
  return (
    <div className="homepage">
      <Headtags />
      <div className="homepage-main">
        <Banner />
        <Offer />
        <Works />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
