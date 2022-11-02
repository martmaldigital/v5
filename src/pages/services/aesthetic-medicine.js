import React from 'react'
import Bannerform from 'components/bannerform/bannerform'
import PatientNav from 'components/nav/patientNav'
import { FAQ } from 'pages/api/hello'
import { Collapse } from 'antd'
import Headtags from 'components/seo'

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
<Headtags
        title="Doctoora -  Aesthetic Medicine - Book Expert Aesthetic Medicine Doctors Near You In Nigeria "
        desc="Same day appointments with aesthetic doctors. Book home visits, clinic and online consultations in Nigeria from ₦10,000. Compare rates & patient reviews"
        keywords="breast implants cost, breast surgery in lagos, breast surgeons in Nigeria, breast enlargement Lagos, breast implants price Nigeria, cosmetic surgeon for breast implants in Lagos, cosmetic clinics in lagos"
      />
<PatientNav />
     <div className="neurosurgery-main">
          <div className="banner">
            <img src="/services/skincarebanner.svg" className="banner-img" alt="" />
            <div className="text-info">
              <h1 className="banner-title">
              Fast and Easy Access to Top Aesthetic Doctors, Whenever, Wherever.
              </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to choose the best aesthetic doctors for your non surgical cosmetic needs by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
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
              Find The Best Aesthetic Medicine Practitioner For You
              </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform />
          </div>
          </div>



          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Aesthetic Medicine Service
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
            Why Choose Doctoora Aesthetic Medicine Service
            </h1>

            <div className="message-holder">
              <div className="content">
                <p className="message-footnote">
                An Aesthetic medicine practitioner should be easy to reach and affordable for your non-surgical cosmetic procedures like Botox and Fillers.
                 Searching for the right aesthetic medicine practitioner in Nigeria can be difficult and time-consuming, especially when you are in dire need of one. To see a Aesthetic medicine practitioner at the clinic, you must wait hours, and you don't want to put your health at risk by seeing a quack. <br /><br /> With Doctoora Health, you can now have an aesthetic medicine doctor's opinion right when you need it. Get affordable, reliable healthcare via your mobile device. 
                 <br/><br/>
                  An experienced aesthetic medicine doctor is the best person to perform procedures like botox injections, microblading, skin rejuvenation, and other non-surgical cosmetic procedures.

                 We offer a handpicked network of aesthetic medicine doctors who provide on-demand aesthetic medicine services in Nigeria. Find a aesthetic medicine doctor near you for same-day telemedicine and clinic appointments. Find the best aesthetic medicine practitioner for you today. Compare healthcare prices, patient ratings and reviews. There will be no lines or waiting!
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
            Affordable Aesthetic Medicine Service
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