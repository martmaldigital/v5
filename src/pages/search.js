import React from "react";
import PatientNav from "components/nav/patientNav";
import Bannerform from "components/bannerform/bannerform";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Headtags from "components/seo";
import Doccard from "components/search/doccard"
import { useRouter } from "next/router";
import dayjs from "dayjs"

// const Doccard = dynamic(() => import("components/search/doccard"))
// const Bannerform = dynamic(() => import("components/bannerform/bannerform"))



const Search = () => {
  const router = useRouter();


  const { search } = useSelector((state) => ({
    search: state.searchReducer,
  }));


  return (
    <>
    <div className="search">
      <Headtags
        title="Doctoora - Same-Day Appointments With The Best Doctors Near You. "
        desc="Doctoora provides easy and affordable online and offline access to verified, quality healthcare services by Doctors, other experts and hospitals in Nigeria"
        keywords="Doctor search results, Search results for doctors in Nigeria, the best doctors near me, search and compare top doctors, find the best specialists in Nigeria, The best dermatologists, Cardiology specialist doctors in nigeria, emergency healthcare, doctor ratings in Nigeria, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <PatientNav />
      <div className="search-main">
        <div className="banner">
           <p className="back"
            onClick={() => {
              router.back()
            }}
          >
             <img src="/img/left.svg" alt="back" />
             Back
          </p>
          <h1 className="title">Get Doctoora Healthcare Services Faster
        </h1>
          <Bannerform />
        </div>
        <div className="search-body main">
          <hr className="custom-line" />
          <div className="doccard-holder">
            {search.loading ? (          
         <div className="loader-container">
         <div className="loader"></div>
           </div>           
           ) : (
              <>
                {search.useAlternative && (
                  <>
                    <p className="resultnumber">
                      No results found for {search.searchObj.specialization}{" "}
                      {search.searchObj.location === undefined
                        ? null
                        : `in ${search.searchObj.location}`}{" "}
                      for {search.visitType} on{" "}
                      {search.searchObj.date === null
                        ? null
                        : dayjs(search.searchObj.date).format("YYYY-MM-DD")}
                    </p>
                    <p className="resultnumber">
                      Showing results for {search.searchObj.specialization}
                      {search.searchObj.location === undefined
                        ? null
                        : ` close to ${search.searchObj.location}`}
                    </p>
                  </>
                )}

                {search.result.length === 0 &&
                search.alternativeResult.length === 0 ? (
                  <>
                    <p className="resultnumber">
                      There are no professionals found
                    </p>
                    <p className="resultnumber">
                      Contact us for a more custom search
                    </p>
                  </>
                ) : null}
                <Row gutter={0}>
                  {!search.useAlternative
                    ? search.result.map((doctor) => (
                        <Col lg={6} xs={24} sm={12} md={8} key={doctor.id}>
                          <Doccard
                            doctor={doctor}
                            key={`doctor-key-${doctor.id}`}
                          />
                        </Col>
                      ))
                    : search.alternativeResult.map((doctor) => (
                      <Col lg={6} xs={24} sm={12} md={8} key={doctor.id}>
                        <Doccard
                          doctor={doctor}
                          key={`doctor-key-${doctor.id}`}
                        />
                      </Col>
                      ))}
                </Row>
              </>
            )}
          </div>
        </div>
      </div>
</div>
      </>
  );
};

export default Search;
