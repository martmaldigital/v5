import React from 'react';
import Bannerform from 'components/bannerform/bannerform'
import PatientNav from 'components/nav/patientNav'
import { useMediaQuery } from "components/useWidth";
import { FAQ } from 'pages/api/hello'
import { Collapse, Carousel } from 'antd'
import { useRouter } from "next/router";
import Headtags from 'components/seo';



const { Panel } = Collapse;

const bone = [
{
    img: "/services/neurology.svg",
    name: "Neurology",
    link: "/neurology"
},
{
    img: "/services/spinesurgery.svg",
    name: "Spine Surgery",
    link: "/spine-surgery"
},
{
    img: "/services/neurosurgery.svg",
    name: "Neurosurgery",
    link: "/neurosurgery"
},
{
    img: "/services/speechtherapy.svg",
    name: "Speech Therapy",
    link: "/speech-therapy"
},
]

const Index = () => {
  const book = React.createRef()
  const router = useRouter();


  const scrollToBook = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: book.current.offsetTop
    })
  }

  return (

<>
<Headtags
        title="Doctoora - Brain & Nerves - Book Appointment With Top Brain & Nerve Care Experts in Nigeria"
        desc="Affordable brain and nerve doctors and services near you. Find spine surgeons, neurosurgeons & neurology doctors in Lagos and other states in Nigeria"
        keywords="Brain & Nerves Doctor in Nigeria, Neurosurgeons in Nigeria, Neurologist in Nigeria, Best Brain & Nerves Doctor in Nigeria, Memory Clinic in Nigeria, Best Memory Clinic in Nigeria, Brain Clinic in Nigeria, Best Brain Clinic in Nigeria, Memory Improvement Clinic in Nigeria"
      />
<PatientNav />
     <div className="neurosurgery-main">
          <div className="banner">
            <img src="/services/bannerbrain.svg" className="banner-img" alt="" />
            <div className="text-info">
              <h1 className="banner-title">
              Fast and Easy Access to Top Brain & Nerve Doctors, Whenever, Wherever.
              </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to consult with the best experts for your brain and nerve treatments by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
                </p>
              <button className="custom-btn into-btn" onClick={() => scrollToBook()}>
                Book Service
                </button>
            </div>
          </div>

          <div className='team-holder impact1'>
          <h1 className='title'>Book  Brain & Nerves Service From The Comfort Of Your House</h1>
          {useMediaQuery(481) ? (
                <Carousel autoplay dots={true} slidesToShow={1}>
                  {bone.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <img src={item.img} alt="" onClick={() => router.push(`/services/${item.link}`)}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name" onClick={() => router.push(`/services/${item.link}`)}>{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <Carousel autoplay dots={true} slidesToShow={1.7}>
                  {bone.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <img src={item.img} alt="" onClick={() => router.push(`/services/${item.link}`)}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name" onClick={() => router.push(`/services/${item.link}`)}>{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
          </div>

          <div className="team-holder impact2">
            <h1 className='title'>Book Brain & Nerves Service From The Comfort Of Your House</h1>
              {useMediaQuery(1024) ? (
                <Carousel autoplay dots={true} slidesToShow={2.6}>
                  {bone.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <img src={item.img} alt="" onClick={() => router.push(`/services/${item.link}`)}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name" onClick={() => router.push(`/services/${item.link}`)}>{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <Carousel autoplay dots={true} slidesToShow={4}>
                  {bone.map((item, index) => (
                    <div className="teamcard" key={index}>
                      <div className="img-holder">
                      <img src={item.img} alt="" onClick={() => router.push(`/services/${item.link}`)}/>
                      </div>
                      <div className="card-text-holder">
                        <h3 className="name" onClick={() => router.push(`/services/${item.link}`)}>{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>

          <div className="booking" ref={book}>
            <img src="/services/booking.svg" className="booking-img" alt="" />
            <div className="text-info">
              <h1 className="booking-title">
              Book For Brain & Nerves Service
               <br /> Fast And Easy
            </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform 
            />
          </div>
          </div>



          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Brain & Nerves Service
            </h1>

            <div className="why-holder">
              <div className="why-item">
                <img src="/services/medal.svg" alt="" className="why-img" />
                <p className="why-text">
                  Professional Service
                </p>
                <p className="why-footnote">
                  Consult with verified and well
                  vetted medical and wellness
                  professionals anytime
                </p>
              </div>
              <div className="why-item">
                <img src="/services/payservice.svg" alt="" className="why-img" />
                <p className="why-text">
                  Ease Of Payment
                </p>
                <p className="why-footnote">
                  Pay with Ease, Online or
                  Offline, in Cash or With
                  Doctoora Credits.
                </p>
              </div>
              <div className="why-item">
                <img src="/services/access.svg" alt="" className="why-img" />
                <p className="why-text">Easy Access Professional Service
                </p>
                <p className="why-footnote">
                  24/7 on-demand access
                  Book any service from
                  your mobile device
                </p>
              </div>
            </div>
          </div>

          <div className="faqs">

            <div className="faqs-holder">
            <div className="works">
        <h1 className="title">
          FAQs, Let us Answer Some of your Frequent Questions
        </h1>
            <Collapse expandIconPosition='end' accordion>
        {FAQ.map((item, index) => (
              <Panel header={item.header} key={index}>
                <p className="faq-text">{item.text}</p>
              </Panel>
        ))}
        </Collapse>
        </div>
            </div>
          </div>


          <div className="getstarted">
            <img src="/services/doctorvase.svg" className="vase-img" alt="" />
            <p className="get-footnote">
              Ready to  Get Started?
            </p>
            <p className="get-title">
              Click Below to enjoy Amazing And
            <br />
            Affordable Bone & Muscle Service
            </p>
            <button>
              Get Started
            </button>
          </div>

        </div>
</> 
   )
}

export default Index