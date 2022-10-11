import Image from 'next/image';

const works = [
  'Sign Up/Create Account',
  'Choose Preferred Service',
  'Enjoy Uninterrupted Healthcare',
];

const Works = () => {
  return (
    <>
      <div className="allinone">
        <hr />
        <h1 className="title">The All-in-One Healthcare System for Nigeria</h1>
        <p className="footnote">
          Our passion is your health. All your health needs are now just one
          click away from being met for convenience and peace of mind. Become a
          member today to see how Doctoora Health can help you live healthier
          lives and enjoy exclusive discounts!.
        </p>
        <div className="action-holder">
          <button className="custom-btn into-btn">Become a Member</button>
        </div>
      </div>

      <div className="works">
        <hr />
        <h1 className="title">
          How The <span className="title work-span">Doctoora</span> Healthcare
          System Works
        </h1>
        <p className="footnote">
          Getting started on the Doctoora Healthcare system is as simple as
          A,B,C. Follow the steps below and you are on your way to enjoying
          premium healthcare
        </p>

        <div className="img p">
          <Image src="/img/line.svg" alt="spiral" layout="fill" />
        </div>
        <div className="works-holder p">
          {works.map((work, index) => (
            <p key={`work-${index}`} className="works-item p">
              {work}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
