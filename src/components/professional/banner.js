import Image from 'next/image';

import DocBanner from 'assets/doctor/doc_banner.svg';

const Banner = () => {
  return (
    <>
      <div className="banner doctor">
        <div className="info-text">
          <h1 className="banner-title">
            Become a <span>Healthcare Provider </span>
            and <span>Get paid </span>with
            <span> Doctoora</span> Instantly.
          </h1>
          <p className="banner-footnote">
            Get unlimited access to <span>Medical Facilities & Equipment </span>
            to see your patients on Doctoora from &#8358;15,000 per month. We
            bring patients to you and also take care of the location of
            consultancy if need be.
          </p>
          <div className="action-holder">
            <button className="custom-btn into-btn">
              Become a Professional
            </button>
          </div>
        </div>
        <div className="img-holder">
          <Image src={DocBanner} alt="bannerImg" />
        </div>
      </div>
    </>
  );
};

export default Banner;
