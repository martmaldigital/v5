import React, { useState } from "react";
import { Col, Row, Rate, Button } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

const Doctor = ({ openDrawer, doctor, availableDays }) => {
const router = useRouter();


const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
  

  return (
    <>
        <div className="doctor-result">
      <Row gutter={10}>
        <Col lg={6} sm={12} xs={24}>
          <div className="doctor-img">
            <Image
              src={doctor.dp}
              alt="bookdoctor"
              layout="fill"
              priority
            />
          </div>
        </Col>
        <Col lg={9} sm={12} xs={24}>
          <p className="doctor-name">
            {doctor.title} {doctor.firstname} {doctor.lastname}
          </p>
          <p className="speciality">
            {doctor.specialization}
          </p>
          <p className="speciality">
            {doctor.city}, {doctor.state}.
          </p>
          <Col lg={15} xs={24}>
        <div className="drate-holder">
                <span className="drate">
                  Overall Rating.
                </span>
                <Rate disabled allowHalf defaultValue={doctor.review} />
              </div>
              <Button className="custom-btn into-btn" onClick={() => openDrawer(doctor)}>
              Book Professional
            </Button>
        </Col>
        </Col>
        <Row gutter={2}>
            <Col lg={24} xs={24}>
            <div className="available-for">
            <h1 className="heading">
              Available for: </h1>
              {availableDays && 
        availableDays.map((item, index) => (
          <p key={index}>
            {(titleCase(item.day))} : <span>{item.type} </span></p>
        ))}         
          </div>
            </Col>
            
          </Row>
      </Row>
      <div className="review">
        <p className="heading">
          Doctor's Info
        </p>
        <p className="text">
        {doctor.info === null ? "Empty" : doctor.info}

          </p>
      </div>
 



    </div>
      {/* <div className="doccard">
        <div className="img-holder">
          <img
            src={
              doctor === undefined || doctor.dp === null
                ? "https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png"
                : doctor.dp
            }
            alt=""
          />
        </div>
        {doctor === undefined ? null : (
          <h3 className="doc-name">
            Dr {`${doctor.firstname} ${doctor.lastname}`}
          </h3>
        )}

        {doctor === undefined ? null : (
          <p className="doc-spec">{doctor.specialization}</p>
        )}

        <div className="ratings-holder">
          <Rate disabled allowHalf defaultValue={doctor.review} />
        </div>

        <div className="actions">
          <button
            className="custom-btn into-btn"
           onClick={() => router.push(`book/${doctor.doctoora_id}`)}
          >
            View Bio
          </button>
        </div>
      </div> */}

      {/* {doctor === undefined ? null : (
        <Modal
          open={viewBio}
          onOk={closeShowBio}
          onCancel={closeShowBio}
          footer={null}
          className="modal-doc-bio"
        >
          <div className="modal-doc-main">
            <div className="img-holder">
              <img
                src={
                  doctor === undefined || doctor.dp === null
                    ? "https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png"
                    : doctor.dp
                }
                alt=""
              />
            </div>
            <div className="doctor-details">
              <p className="info-label">Fullname</p>
              <p className="info-answer">
                {" "}
                Dr {`${doctor.firstname} ${doctor.lastname}`}
              </p>

              <p className="info-label">Specialization</p>
              <p className="info-answer"> {doctor.specialization}</p>

              <p className="info-label">Bio</p>
              <p className="info-answer">
                {" "}
                {doctor.bio === null ? "Empty" : doctor.bio}
              </p>

              <p className="info-label available-header">Available Schedule </p>

              {doctor.appointment_intervals.length > 0 ? (
                doctor.appointment_intervals.map((item, index) => (
                  <div className="available-for">
                    <Row>
                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">Visit Type</p>
                        <p className="info-answer">{item.type}</p>
                      </Col>
                      {item.type !== "Video Consultation" && (
                        <Col lg={12} xs={24} sm={24}>
                          <p className="info-label">Location</p>
                          <p className="info-answer">{item.location}</p>
                        </Col>
                      )}

                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">Day of the Week</p>
                        <p className="info-answer">{item.day}</p>
                      </Col>
                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">Start Time</p>
                        <p className="info-answer">{item.start}</p>
                      </Col>
                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">End Time</p>
                        <p className="info-answer">{item.end}</p>
                      </Col>
                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">Session</p>
                        <p className="info-answer">
                          {item.session}
                          <span
                            style={{ textTransform: "lowercase !important" }}
                          >
                            min
                          </span>
                        </p>
                      </Col>
                      <Col lg={12} xs={24} sm={24}>
                        <p className="info-label">Price</p>
                        <p className="info-answer">
                          ₦{numeral(item.price).format("0,0")}
                        </p>
                      </Col>
                    </Row>
                  </div>               
                ))
              ) : (
                <p className="none-found">There are no available schedules</p>
              )}
            </div>
          </div>
          <div className="action-holder">
            <button
              className="custom-btn into-btn"
              onClick={() => router.push(`book/${doctor.doctoora_id}`)}
            >
              Book Dr {`${doctor.firstname} ${doctor.lastname}`}
            </button>
          </div>
        </Modal>
      )} */}
    </>
  );
};

export default Doctor;
