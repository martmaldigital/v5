import Image from "next/image";
import { Row, Col, Carousel } from "antd";
import { useMediaQuery } from "components/useWidth";
import ReactPlayer from 'react-player/youtube'



import { team, team3, impact, keyOfferings } from "pages/api/hello";
// const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="about-main">
          <div className="banner">
            <div className="banner-holder">
              <div className="info-text">
                <h3 className="banner-title">About Doctoora </h3>
                <p className="text">
                  Healthcare in One Place - Book Doctors, Pharmacy, Tests Online
                </p>
              </div>
            </div>
          </div>
          <div className="weare">
            <div className="info-text">
              <h1 className="info-title">About Doctoora</h1>
              <p className="text">
                Doctoora E-health Ltd is a multi location healthcare
                infrastructure as a service company providing healthcare
                facilities for healthcare professionals and their patients. Our
                overarching objective is the provision of accessible healthcare
                services for Africans, starting with Nigeria. We aim to fulfill
                the tenets of inclusive access to health by eliminating;
                geographical, financial and sociocultural barriers.
              </p>
              <div className="action-holder">
                <button className="custom-btn into-btn">Get Started</button>
              </div>
            </div>
            <div className="img-holder">
              <Image src="/about/about.svg" alt="" layout="fill"  />
            </div>
          </div>
          <div className="aboutcontent">
            <div className="img-holder">
              <Image src="/about/clusterdeck-1 (1).webp" alt="" layout="responsive" width={636} height={656}/>
            </div>
            <div className="info-text">
              <h1 className="info-title">Who Are We?</h1>
              <p className="text bolder">Our Vision</p>
              <p className="text">
                To become Africa’s foremost private integrated healthcare
                network; grounded on the principles of: Quality, Convenience,
                and Comprehensiveness.
              </p>
              <p className="text bolder">Our Mission</p>
              <p className="text">
                To create healthier communities in Africa by combining
                technology, healthcare professionals and quality healthcare
                facilities to create high quality healthcare consumer
                experiences.
              </p>
              <p className="text bolder">Our Approach</p>
              <p className="text">
                To Deliver Affordable Quality Healthcare Experiences By
                Optimising Healthcare Service Delivery & Capacity Utilisation.
                At Doctoora, we believe every amount we save you on healthcare
                makes you richer. By focusing on effective distribution,
                healthcare services can yield greater returns for both providers
                and patients. This is the basis of all we do at Doctoora Health.
              </p>
            </div>
          </div>

          <div className="ourteam">
            <h1 className="title">Meet the Doctoora Team.</h1>
            <br />
            <div className="team-holder t1">
              <Row gutter={20}>
                {team.map((user) => (
                  <Col lg={6} sm={8} key={user.name}>
                    <div className="teamcard">
                      <div className="img-holder">
                        <Image src={user.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{user.name}</h3>
                        <p className="post">{user.post}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row gutter={20} justify="center">
                {team3.map((user) => (
                  <Col lg={6} sm={8} key={user.name}>
                    <div className="teamcard">
                      <div className="img-holder">
                        <Image src={user.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{user.name}</h3>
                        <p className="post">{user.post}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              </div>
              <div className="team-holder t2">
                {useMediaQuery(400) ? (
                  <Carousel autoplay dots={true} slidesToShow={1}>
                  {team.map((item, index) => (
                    <div className="teamcard" key={[index]}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                   {team3.map((item, index) => (
                    <div className="teamcard" key={[index]}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
                ):
                (
                  <Carousel autoplay dots={true} slidesToShow={1.6}>
                  {team.map((item, index) => (
                    <div className="teamcard" key={[index]}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                   {team3.map((item, index) => (
                    <div className="teamcard" key={[index]}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
                )
                }
            </div>
          </div>
          <div className="video">
            <h3 className="v-title">Hear from Doctoora’s CEO.</h3>
            <div className="videolink">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=fCZmyXKcngw"
                controls={true}
              />
            </div>
          </div>

          <div className="ourteam">
            <h1 className="title">Our Impact Trial</h1>
            <br />
            <div className="team-holder impact2">
              {useMediaQuery(481) ? (
                <Carousel autoplay dots={true} slidesToShow={1}>
                  {impact.map((item, index) => (
                    <div className="teamcard" key={[index]}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <Carousel autoplay dots={true} slidesToShow={2}>
                  {impact.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
            <div className="team-holder impact">
              {useMediaQuery(1024) ? (
                <Carousel autoplay dots={true} slidesToShow={2.6}>
                  {impact.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <Carousel autoplay dots={true} slidesToShow={4}>
                  {impact.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <Image src={item.img} alt="" layout="responsive" width={294} height={227}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name">{item.name}</h3>
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
          <div className="ourteam">
            <h1 className="title">Our Key Offerings</h1>
            <br />
            <div className="team-holder">
              <Row gutter={20}>
                {keyOfferings.map((item) => (
                  <Col lg={12} xs={24} key={item.name}>
                    <div className="teamcard">
                      <div className="img-key">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card-text-holder k">
                        <h3 className="name k">{item.name}</h3>
                        {item.list.map((list, index) => (
                          <ul key={index}>
                            <li className="post k">{list}</li>
                          </ul>
                        ))}
                        <p className="post">{item.post}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
