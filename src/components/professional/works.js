import Image from 'next/Image';
import { Reasons } from 'pages/api/hello';

const works = [
  {
    btn: 'Sign up',
    text: 'Sign up as a professional',
    img: '/img/new.svg',
  },
  {
    btn: 'Setup your profile',
    text: 'Tell us what service you would be providing.',
    img: '/img/profile.svg',
  },
  {
    btn: 'Submit your pricing',
    text: 'Submit pricing and credentials for Verification.',
    img: '/img/pricing.svg',
  },
  {
    btn: 'Setup Availability',
    text: 'Setup your availability structure so patients can find you.',
    img: '/img/timing.svg',
  },
];

const Works = () => {
  return (
    <>
      <div className="works d">
        <hr />
        <h1 className="title">
          How The Doctoora Healthcare Provider System Works
        </h1>
        <p className="footnote">
          In just 4 simple steps you can unlock unlimited access to delivering
          the best <br />
          healthcare service with our help to one patient at a time.
        </p>

        <div className="img d">
          <Image src="/img/Pline.svg" alt="spiral" layout="fill" />
        </div>
        <div className="works-holder d">
          {works.map((work, index) => (
            <div className="works-img" key={`work-${index}`}>
              <div className="works-img">
                <Image src={work.img} layout="fill" alt="spiral" />
              </div>
              <p className="works-item d">{work.btn}</p>
              <p className="work-text">{work.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonies p">
        <hr />
        <h1 className="title">Why Choose Doctoora?</h1>
        <p className="footnote">
          Since we are the first of the kind in Nigeria, lets tell you what
          makes us special already.
        </p>
        <div className="testimonies-holder d">
          {Reasons.map((item, index) => (
            <div className="testimony d" key={`tesitimony-${index}`}>
              {/* <p className="text">
                    {item.text}
                  </p> */}
              <div className="user-info">
                <div className="img d">
                  <Image src={item.img} alt="avatar" layout="fill" />
                </div>
                <div className="user-name d">
                  {item.header} <br />
                  <p className="br d">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
