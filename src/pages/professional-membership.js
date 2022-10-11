import ProfessionalNav from 'components/nav/professionalNav'
import Footer from 'components/footer'


const Index = () => {
  return (
    <>
      <div className="about">
        <div className="about-main">
          <div className="banner membership">
            <div className="banner-holder profServ">
              <div className="info-text">
                <h3 className="title">Become a Member </h3>
              </div>
            </div>
          </div>

          {/* Limited Partner membership */}
            <div className="aboutcontent limited">          
            <div className="info-text limited">
              <h1 className="info-title lp">Limited Partner</h1>
              <ul>
                <li>Ideal for fresh partners</li>
                <li>Limited access to Doctoora</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>Dedicated 080-Doctoora extension line.</li>
                <li>Get access to FOUR(4) hours per month.</li>
                <li>Covers only regular facilities.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title membership lp'>₦12,000</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>

           {/* General Partner membership */}
            <div className='spaces'></div>
          <div className="aboutcontent general">          
            <div className="info-text general">
              <h1 className="info-title gp">Generalist Partner</h1>
              <ul>
                <li>Enjoy Private Practice</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>Dedicated 080-Doctoora extension line.</li>
                <li>Average booking rate of ₦3,000/hour on Doctoora.</li>
                <li>Unlimited access to facility rentals,diagnostic equipment & home care equipment rentals.</li>
                <li>40% of Doctoora Health Subscriptions.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title membership gp'>₦15,000</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>

     {/* Special membership */}
     <div className='spaces'></div>
          <div className="aboutcontent special">          
            <div className="info-text special">
              <h1 className="info-title sp">Specialist Partners</h1>
              <ul>
                <li>Get access to tailored resources for specialist care.</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>Dedicated 080-Doctoora extension line.</li>
                <li>Enjoy inbound referrals starting from ₦7,500/hour.</li>
                <li>Dedicated booking link.</li>
                <li>40% of Doctoora Health Subscriptions.</li>
                <li>Unlimited access to facility rentals,diagnostic equipment & home care equipment rentals.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title membership sp'>₦25,000</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>

            {/* Small Group membership */}
     <div className='spaces'></div>
          <div className="aboutcontent small">          
            <div className="info-text small">
              <h1 className="info-title s">Small Group Practice</h1>
              <ul>
                <li>Group Practices & E-Health Startups.</li>
                <li>FIVE(5) Professionals.</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>From ₦22,500 monthly/professional.</li>
                <li>Enjoy access to multiple locations.</li>
                <li>Unlimited access to facility rentals, diagnostic equipment & home care equipment rentals.</li>
                <li>Ideal for group of FIVE(5) professionals.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title membership s'>₦112,500</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>

                     {/* midi group membership */}
     <div className='spaces'></div>
          <div className="aboutcontent midi">          
            <div className="info-text midi">
              <h1 className="info-title m">Midi Group Practice</h1>
              <ul>
                <li>Group practices with 25 professionals</li>
                <li>FIVE(5) Professionals.</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>From ₦20,000 monthly/professional.</li>
                <li>Enjoy unlimited access to Doctoora Network.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title membership m'>₦500,000</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>


                     {/* Large group membership */}
     <div className='spaces'></div>
          <div className="aboutcontent large">          
            <div className="info-text large">
              <h1 className="info-title l">Large Group Practice</h1>
              <ul>
                <li>Large organizations with 100 professionals.</li>
                <p className='txt'>Services</p>
                <li>Valid for ONE(1) month.</li>
                <li>From ₦25,000 monthly/professional.</li>
                <li>Enjoy unlimited access to Doctoora Network Nation-wide.</li>
              </ul>
            </div>
            <div className="img-holder membership">
                <h1 className='title l membership'>₦100,000,000</h1>
                <button className='custom-btn sub'>Subscribe</button>
            </div>
          </div>
          <div className='spaces'></div>

        </div>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = (page) => {
    return (
      <>
        <ProfessionalNav />
        {page}
        <Footer />
      </>
    );
  };
