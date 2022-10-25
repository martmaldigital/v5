import Image from "next/image";
import { useRef } from "react";
import { Collapse, Carousel } from "antd";
import { useMediaQuery } from "components/useWidth";


import { FAQ, testimonies } from "pages/api/hello";

const { Panel } = Collapse;

const Faq = () => {
  const slider = useRef(null);


  return (
    <>
         <div className="services">
        <hr />
        <h1 className="title">What <span className="title work-span"> Doctoora </span>Patients have to say</h1>
        <div className="services-holder">
          <div className="action-icon" onClick={() => slider.current.prev()}>
            <Image
              src="/services/arrowleft.png"
              alt="arrowleft"
              layout="fill"
            />
          </div>

          <div className="services-main t1">
          {useMediaQuery(520) ? (
              <Carousel slidesToShow={1} dots={true}>
                {testimonies.map((item, index) => (
                   <div className="testimony" key={`services-${index}`}>
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
              </Carousel>
            ) : (
              <Carousel slidesToShow={1.6} dots={true} autoplay>
                {testimonies.map((item, index) => (
                   <div className="testimony" key={`services-${index}`}>
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
              </Carousel>
            )}
          </div>
          <div className="services-main t">
            {useMediaQuery(1204) ? (
              <Carousel slidesToShow={2.3} ref={slider} dots={false}>
                {testimonies.map((item, index) => (
                  <div className="testimony" key={`services-${index}`}>
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
              </Carousel>
            ) : (
              <Carousel slidesToShow={3} ref={slider} dots={false}>
                {testimonies.map((item, index) => (
                  <div className="testimony" key={`services-${index}`}>
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
      {/* <div className="testimonies">
        <hr />
        <h1 className="title">
          What <span className="title work-span">Doctoora </span>Patients Have
          to Say
        </h1>
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
      </div> */}

      <div className="works">
        <hr />
        <h1 className="title">
          FAQs, Let us Answer Some of your Frequent Questions
        </h1>
          {/* <div className="faq"> */}
            <Collapse expandIconPosition='end' accordion>
        {FAQ.map((item, index) => (
              <Panel header={item.header} key={index}>
                <p className="faq-text">{item.text}</p>
              </Panel>
        ))}
        </Collapse>
        </div>
    </>
  );
};

export default Faq;
