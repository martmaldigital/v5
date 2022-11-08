import React, {createRef} from 'react';
import dynamic from 'next/dynamic';
import Headtags from 'components/seo';
import PatientNav from 'components/nav/patientnav';

const FAQ = dynamic(() => import('components/faqq'))
const Bannerform = dynamic(() =>import ('components/bannerform/bannerform'))



const Index = () => {
  const book = createRef()


  const scrollToBook = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: book.current.offsetTop
    })
  }

  return (

<>
<Headtags
        title="Doctoora -  Physiotherapy - Book Top Physiotherapists & Physical Rehabs Close-by in Nigeria  "
        desc="Quick appointments with Physiotherapists. Book home visits, clinic and online consultations in Nigeria from ₦10,000. Compare rates & patient reviews"
        keywords=" physiotherapy in Nigeria, physiotherapy, physiotherapy services in Nigeria, physiotherapy centers in Nigeria, physiotherapy treatment, physiotherapy centres in Abuja, physiotherapy centres in Lagos"
      />
<PatientNav />
     <div className="neurosurgery-main">
          <div className="banner">
            <img src="/services/bonebanner.svg" className="banner-img" alt="" />
            <div className="text-info">
              <h1 className="banner-title">
              Fast and Easy Appointments with Top Physiotherapists, Whenever, Wherever.
              </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to choose with the best physiotherapist for your needs by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
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
              Find The Best Physiotherapist For You
                 </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform 
             predefinedSpeciality={'Physiotherapist'}
            />
          </div>
          </div>

          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Physiotherapy Service
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
            Why Choose Doctoora Physiotherapy Service
            </h1>

            <div className="message-holder">
              <div className="content">
                <p className="message-footnote">
                A Physiotherapist should be easy to reach and affordable if you have stiffness, muscle weakness from stroke and other physical rehabilitation concerns. Searching for the right physiotherapist in Nigeria can be difficult and time-consuming, especially when you are in dire need of one. To see a physiotherapist at the hospital, you must wait hours, and you don't want to put your health at risk by seeing a quack.
 <br /><br />
 With Doctoora Health, you can now have a Physiotherapist’s opinion right when you need it. Get affordable, reliable healthcare via your mobile device.
 <br /><br /> A Physiotherapist is the most qualified health professional to treat conditions like back pain, arthritis, muscle stiffness and all forms of physical rehabilitation issues. Access on-demand physiotherapy services in Nigeria with an extensive network of physiotherapists. Find a physiotherapist near you for same-day home care and clinic appointments. Find the best physiotherapist for you today. Compare healthcare prices, patient ratings and reviews. There will be no lines or waiting!
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
            <FAQ />
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
            Affordable Physiotherapy Service
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