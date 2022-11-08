import { Col, Row, Rate } from "antd";
import Image from "next/image";




const Doctor = ({ openDrawer, doctor, availableDays }) => {


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
              <button className="custom-btn into-btn" onClick={() => openDrawer(doctor)}>
              Book Professional
            </button>
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
        </>
  );
};

export default Doctor;
