import { useState } from "react";
import Image from "next/image";

import Getstarted from "components/modal/getstarted";
import BannerImage from "assets/patient/patient.svg";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="banner patient">
        <div className="info-text">
          <h1 className="banner-title">
            Live Healthier, Live Better With <span>Doctoora</span>
          </h1>
          <p className="banner-footnote">
            Obtain <span>Accessible Healthcare </span>Anytime, Anywhere. You no
            longer have to wait in line to be attended to for your health
            requirements, either <span>virtually or physically, </span>thanks to
            the range of healthcare specialists operating on our platform.
          </p>
          <div className="action-holder">
            <button
              className="custom-btn into-btn"
              onClick={() => {
                openModal();
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="img-holder">
          <Image src={BannerImage} alt="bannerImg" />
        </div>
      </div>
      <Getstarted onOk={closeModal} onCancel={closeModal} open={visible} />
    </>
  );
};

export default Banner;
