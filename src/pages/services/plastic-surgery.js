import React from 'react'
import Bannerform from 'components/bannerform/bannerform'
import PatientNav from 'components/nav/patientNav'
import { FAQ } from 'pages/api/hello'
import { Collapse } from 'antd'

const { Panel } = Collapse;

const Index = () => {
  const book = React.createRef()

  const scrollToBook = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: book.current.offsetTop
    })
  }

  return (

<>
<PatientNav />
     <div className="neurosurgery-main">
          <div className="banner">
            <img src="/services/skincarebanner.svg" className="banner-img" alt="" />
            <div className="text-info">
              <h1 className="banner-title">
              Fast and Easy Access to Top Dermatologists,
                Anytime, Anywhere.
              </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to consult with the best dermatologists for your skin care needs by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
                </p>
              <button className="custom-btn into-btn" onClick={() => scrollToBook()}>
                Book Service
                </button>
            </div>
          </div>

          <div className="booking" ref={book}>
            <img src="/services/booking.svg" className="booking-img" alt="" />
            <div className="text-info">
              <h1 className="booking-title">
              Find The Best Dermatologist For You
              </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform
            predefinedSpeciality={'Plastic Surgeon'}
            />
          </div>
          </div>



          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Dermatology Service
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


          <div className="message">
            <h1 className="message-title">
            Why Choose Doctoora Dermatology Service
            </h1>

            <div className="message-holder">
              <div className="content">
                <p className="message-footnote">
                A dermatologist should be easy to reach and affordable if you have rashes and other skin problems.
                  Finding the right dermatologist in Nigeria can be a difficult, time-consuming process, especially when you need one now. You can't wait hours at the hospital, to see a dermatologist and you don't want to put your health at risk by seeing a quack. <br /><br /> A dermatologist is the most qualified doctor to diagnose and treat skin conditions like Acne, Skin Cancer, Ringworm and all forms of rashes. <br/><br/> With Doctoora Health, you can now have a dermatologist's opinion right when you need it.
                 Access on-demand dermatology services in Nigeria with an extensive network of dermatologists. Find a dermatologist near you for same-day telemedicine and clinic appointments. Find the right doctor for you today. Compare healthcare prices, patient ratings and doctors reviews. No queues or waiting times!
                </p>
              </div>
              <div className="img-holder">
                <img src="/services/teaser.svg" alt="" />
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
            Affordable Dermatology Service
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