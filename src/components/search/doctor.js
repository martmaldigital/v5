import React, { useState } from "react";
import { Col, Row, Rate, Checkbox, Modal, Button } from "antd";
import numeral from "numeral";
import Image from "next/image";

const Doctor = ({ openDrawer, doctor }) => {
  const [viewBio, setViewBio] = useState(false);

  const closeShowBio = () => {
    setViewBio(false);
  };

  return (
    <>
      <div className="doccard">
        <div className="img-holder">
          <img
            src={
              doctor === undefined || doctor.dp === null
                ? "https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png"
                : doctor.dp
            }
            alt=""
          />

          {/* {
                doc.accept_coin === 1 && <p className="accepts-coin">
                  Accepts coin
              </p>
              } */}

          {/* {
                doc.practices !== undefined ?
                  doc.practices.length > 0 &&
                  <div className="show-grouping" onClick={() => this.openViewGroupPractice()}>
                    <Badge count={doc.practices.length}>
                      <span className="grouping-text">
                        Group Practices &nbsp;&nbsp;</span>
                    </Badge>
                  </div>
                  : null
              } */}
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

          {/* <ReactStars
                count={5}
                value={doc.review}
                size={24}
                color2={'#FDBF00'}
                edit={false}
              /> */}
        </div>

        <div className="actions">
          {/* <button
                className="custom-btn prime-btn"
                onClick={() => this.showSlots()}
              >
                View Slots
           </button> */}
          <button
            className="custom-btn prime-btn"
            onClick={() => setViewBio(true)}
          >
            View Bio
          </button>
          {/* <button className="custom-btn view-btn" onClick={() => this.viewBio()}>
                View Bio
          </button> */}
        </div>
      </div>

      {doctor === undefined ? null : (
        <Modal
          visible={viewBio}
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
              {/* <Checkbox.Group */}

              {doctor.appointment_intervals.length > 0 ? (
                doctor.appointment_intervals.map((item, index) => (
                  // <Checkbox value={item} key={index}>
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
                  // </Checkbox>
                ))
              ) : (
                <p className="none-found">There are no available schedules</p>
              )}

              {/* </Checkbox.Group> */}
            </div>
          </div>
          <div className="action-holder">
            <button
              className="custom-btn prime-btn"
              onClick={() => openDrawer(doctor)}
            >
              Book Dr {`${doctor.firstname} ${doctor.lastname}`}
            </button>
          </div>
        </Modal>
      )}

      {/* -------------------------------------------------------------
    --------------------------------------------------------- */}
    </>
  );
};

export default Doctor;
