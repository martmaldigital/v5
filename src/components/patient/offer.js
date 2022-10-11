import { useRef } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { useMediaQuery } from 'components/useWidth';

const tested = [
  'naveen',
  'mypharmacy',
  'nes25',
  'tef',
  'brainware',
  'AML',
  'marquee',
  'smilewithme',
  'tsl',
  'ACA',
  'africanfashion',
  'stratosphere',
  'cchub',
  'firmcare',
  'wwvc',
  'sla',
];

const services = [
  {
    title: 'Home Care',
    link: '/',
    img: '/services/home.svg',
  },
  {
    title: 'Consultation',
    link: '/',
    img: '/services/consultation.svg',
  },
  {
    title: 'Online Pharmacy',
    link: '/',
    img: '/services/pharmacy.svg',
  },
  {
    title: 'In-Patient Care',
    link: '/',
    img: '/services/inpatient.svg',
  },
  {
    title: 'Diagnostics',
    link: '/',
    img: '/services/diagnostics.svg',
  },
  {
    title: 'Telemedicine',
    link: '/',
    img: '/services/consultation.svg',
  },
];

const Offer = () => {
  const slider = useRef(null);

  return (
    <>
      {/* <UseWidth /> */}
      <div className="tested">
        <p className="info-text">Tested and Supported by:</p>
        <div className="img-holder">
          <Carousel slidesToShow={6} dots={false} autoplay>
            {tested.map((item, index) => (
              <div className="img-style" key={`tested-${index}`}>
                <Image
                  src={`/tested/${item}.svg`}
                  alt={item.name}
                  layout="fill"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="services">
        <hr />
        <h1 className="title">Services we Offer</h1>
        <p className="footnote">
          We have an array of healthcare services to ensure that you and your
          loved ones are in perfect condition
        </p>
        <div className="services-holder">
          <div className="action-icon" onClick={() => slider.current.prev()}>
            <Image
              src="/services/arrowleft.png"
              alt="arrowleft"
              layout="fill"
            />
          </div>

          <div className="services-main m">
            <Carousel slidesToShow={1} autoplay>
              {services.map((item, index) => (
                <div className="services-item" key={`services-${index}`}>
                  <div className="img">
                    <Image src={item.img} alt={item.title} layout="fill" />
                  </div>
                  <p className="services-title">{item.title}</p>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="services-main p">
            {useMediaQuery(1024) ? (
              <Carousel slidesToShow={2} ref={slider} dots={false}>
                {services.map((item, index) => (
                  <div className="services-item" key={`services-${index}`}>
                    <div className="img">
                      <Image src={item.img} alt={item.title} layout="fill" />
                    </div>
                    <p className="services-title">{item.title}</p>
                  </div>
                ))}
              </Carousel>
            ) : (
              <Carousel slidesToShow={4} ref={slider} dots={false}>
                {services.map((item, index) => (
                  <div className="services-item" key={`services-${index}`}>
                    <div className="img">
                      <Image src={item.img} alt={item.title} layout="fill" />
                    </div>
                    <p className="services-title">{item.title}</p>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
          <div className="action-icon" onClick={() => slider.current.next()}>
            <Image
              src="/services/arrowright.png"
              alt="arrowright"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
