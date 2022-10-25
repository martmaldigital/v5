import Image from "next/image";

import DocBanner from "assets/doctor/doc_banner.svg";
import Link from "next/link";

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
          At <span className="d">Doctoora</span>, licensed healthcare professionals can provide care to patients in our <span>digital private clinic.</span> We also offer <span>rentable medical facilities </span>for physical consultations, starting from &#8358;35,000 monthly.
          </p>
          <div className="action-holder">
            <Link href="http://">
            <button className="custom-btn into-btn">
              Become a Professional
            </button>
            </Link>
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
