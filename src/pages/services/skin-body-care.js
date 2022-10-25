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
              Get Fast and easy Skin Care Services with Doctoora
                </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to consult with the best experts for your skin care and cosmetic surgery needs by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
                </p>
              <button className="custom-btn into-btn" onClick={() => scrollToBook()}>
                Book Service
                </button>
            </div>
          </div>


          <div className="division">
            <h1 className="title">
              Book  Skin Care Service From The Comfort Of Your House
            </h1>
            <div className="division-holder">
              <div className="division-item" onClick={() => this.props.history.push('/services/dermatology')}>
                <img src="/services/dermatology.svg" alt="" />
                <p className="item-text">
                  Dermatology
                  </p>
              </div>
              <div className="division-item" onClick={() => this.props.history.push('/services/plastic-surgery')}>
                <img src="/services/plasticsurgery.svg" alt="" />
                <p className="item-text">
                  Plastic & Reconstructive
                  Surgery
                  </p>
              </div>
              <div className="division-item" onClick={() => this.props.history.push('/services/aesthetic-medicine')}>
                <img src="/services/aesthetic.svg" alt="" />
                <p className="item-text">
                  Aesthetic Medicine
                  </p>
              </div>
            </div>
          </div>



          <div className="booking" ref={book}>
            <img src="/services/booking.svg" className="booking-img" alt="" />
            <div className="text-info">
              <h1 className="booking-title">
              Book For Skin Care Service
              <br />
              Fast And Easy
              </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform />
          </div>
          </div>



          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Skin Care Service
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
            Affordable Skin Care Service
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