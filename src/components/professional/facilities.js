import { useRef } from 'react';
import { Carousel } from 'antd';
import Image from 'next/Image';
import { useMediaQuery } from 'components/useWidth';

import { facilityList, testimonies } from 'pages/api/hello';

const Facilities = () => {
  const slider = useRef(null);

  return (
    <>
      <div className="facilities">
        <hr />
        <h1 className="title">Meet your Patients In Doctoora Locations</h1>
        <p className="footnote">
          Doctoora is a multi-location private healthcare network with over 4000
          verified healthcare service providers, dedicated to delivering quality
          healthcare services to the people of Nigeria. Join Doctoora and spread
          your private practice across multiple locations and deliver value to
          more clients without incurring high setup costs.
        </p>
        <p className="footnote d">
          100+ Healthcare Locations & Equipment You Can Lease
        </p>

        <div className="facility-holder">
          <div className="action-icon" onClick={() => slider.current.prev()}>
            <Image
              src="/services/arrowleft.png"
              alt="arrowleft"
              layout="fill"
            />
          </div>
          <div className="facility-main p">
            <Carousel slidesToShow={1} autoplay>
              {facilityList.map((item, index) => (
                <div className="facility-card" key={`facilityList-${index}`}>
                  <div className="img-holder">
                    <Image
                      src={item.img}
                      alt={`facilityList-${index}`}
                      layout="fill"
                    />
                  </div>
                  <div className="card-text-holder">
                    <h3 className="name">{item.facility}</h3>
                    <p className="text">{item.location}</p>
                    <p className="name2">Facilities available:</p>
                    <div className="fac">
                      {item.available.map((avail, index) => (
                        <p className="avail" key={index}>
                          {avail}
                          <span>
                            <img src="img/tick2.svg" alt="tick"></img>
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="facility-main m">
            {useMediaQuery(1120) ? (
              <Carousel slidesToShow={2} dots={false} ref={slider}>
                {facilityList.map((item, index) => (
                  <div className="facility-card" key={`facilityList-${index}`}>
                    <div className="img-holder">
                      <Image
                        src={item.img}
                        alt={`facilityList-${index}`}
                        layout="fill"
                      />
                    </div>
                    <div className="card-text-holder">
                      <h3 className="name">{item.facility}</h3>
                      <p className="text">{item.location}</p>
                      <p className="name2">Facilities available:</p>
                      <div className="fac">
                        {item.available.map((avail, index) => (
                          <p className="avail" key={index}>
                            {avail}
                            <span>
                              <img src="img/tick2.svg" alt="tick"></img>
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <Carousel slidesToShow={3} dots={false} ref={slider}>
                {facilityList.map((item, index) => (
                  <div className="facility-card" key={`facilityList-${index}`}>
                    <div className="img-holder">
                      <Image
                        src={item.img}
                        alt={`facilityList-${index}`}
                        layout="fill"
                      />
                    </div>
                    <div className="card-text-holder">
                      <h3 className="name">{item.facility}</h3>
                      <p className="text">{item.location}</p>
                      <p className="name2">Facilities available:</p>
                      <div className="fac">
                        {item.available.map((avail, index) => (
                          <p className="avail" key={index}>
                            {avail}
                            <span>
                              <img src="img/tick2.svg" alt="tick"></img>
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
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

      <div className="testimonies">
        <hr />
        <h1 className="title">What Doctoora Professionals Say</h1>
        <div className="testimonies-holder p">
          {testimonies.map((item, index) => (
            <div className="testimony p" key={`tesitimony-${index}`}>
              <p className="text">{item.text}</p>
              <div className="user-info">
                <div className="img">
                  <Image src={item.img} alt="avatar" layout="fill" />
                </div>
                <div className="user-name">
                  {item.name} <br />
                  <p className="br">{item.social}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Facilities;
