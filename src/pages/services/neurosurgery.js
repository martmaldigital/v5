import React, {createRef} from 'react'
import dynamic from 'next/dynamic'
import Headtags from 'components/seo'
import PatientNav from 'components/nav/patientNav'

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
        title="Doctoora - Neurosurgery - Book Trusted Neurosurgeons & Hospitals Close-by in Nigeria"
        desc="Same day appointments with Top Neurosurgeons. Book home visits, clinic and online consultations in Nigeria from ₦10,000. Compare rates & patient reviews"
        keywords="neurosurgeon in Nigeria, neurosurgeon in Lagos. neurosurgery doctor, neurosurgery consultant, neurosurgery services, neurosurgeon doctors in Nigeria, neurosurgeon at affordable price. neurosurgery doctor, Neurosurgeon in Nigeria, neurosurgeons in nigeria, neurosurgeon nigeria, spine surgeon in nigeria, neurosurgery center in Nigeria, best neurosurgeons in nigeria, neuro surgery doctor in Nigerianeurosurgery doctor, Neurosurgeon in Nigeria, neurosurgeons in nigeria, neurosurgeon nigeria, spine surgeon in nigeria, neurosurgery center in Nigeria, best neurosurgeons in nigeria, neuro surgery doctor in Nigeria"
      />
<PatientNav />
     <div className="neurosurgery-main">
          <div className="banner">
            <img src="/services/bannerbrain.svg" className="banner-img" alt="" />
            <div className="text-info">
              <h1 className="banner-title">
              Fast and Easy Appointments with Top Neurosurgeons, Whenever, Wherever.
                </h1>
              <p className="banner-footnote">
              At Doctoora, we make it easy to choose the best neurosurgeon for trauma, tumors and neurosurgery related treatments by connecting you to trusted and compassionate professionals. Book appointments online and meet your Doctor via telemedicine or physically at a Doctoora Health facility near you in Nigeria.
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
              Find The Best Neurosurgeon For You
              </h1>
              <p className='booking-footnote'>Search our system for extensive list of professionals that suit your needs.</p>
            </div>
          <div className="search-holder" >
            <Bannerform predefinedSpeciality={'Neurosurgeon'}
            />
          </div>
          </div>

          <div className="why-choose">
            <h1 className="why-title">
            Why Choose Doctoora Neurosurgery Service
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
            Why Choose Doctoora Neurosurgery Service
            </h1>
            <div className="message-holder">
              <div className="content">
                <p className="message-footnote">
                A neurosurgeon should be easy to reach and affordable if you have brain tumours or require urgent brain surgery. Searching for the right neurosurgeon in Nigeria can be difficult and time-consuming, especially when you are in dire need of one. To see a neurosurgeon at the hospital, you must wait hours, and you don't want to put your health at risk by seeing a quack.
 <br /><br /> With Doctoora Health, you can now have a neurosurgeon's opinion right when you need it. Get affordable, reliable healthcare via your mobile device.
<br /><br />
An experienced neurosurgeon is the best person to perform procedures like borehole craniotomy, repair of brain aneurysm, removal of brain tumour, and other brain surgery procedures. We offer a handpicked network of neurosurgeons who provide on-demand neurosurgery services in Nigeria. Find a neurosurgeon near you for same-day telemedicine and clinic appointments. Find the best neurosurgeon for you today. Compare healthcare prices, patient ratings and reviews. There will be no lines or waiting!
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
            Affordable Neurosurgery Service
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