import Image from "next/image";
import { useRef } from "react";
import { Carousel } from "antd";
import { useMediaQuery } from "components/useWidth";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import ('./faqq'))
import { testimonies } from "pages/api/hello";


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
      <div className="works">
        <hr />
        <h1 className="title">
          FAQs, Let us Answer Some of your Frequent Questions
        </h1>
          {/* <div className="faq"> */}
            <FAQ />
        </div>
    </>
  );
};

export default Faq;
