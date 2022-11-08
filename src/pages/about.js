import React, {useState} from 'react'
import PatientNav from "components/nav/patientNav";
import Headtags from "components/seo";
import dynamic from 'next/dynamic';

const Getstarted = dynamic(()=> import('components/modal/getstarted'))
const AboutPage = dynamic(()=> import('components/about'))

const About = () => {
  const [visible, setVisible] = useState(false);


  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
     <Headtags
        title="Doctoora - About Us - Patient-focused digital integrated healthcare system in Nigeria"
        desc="Doctoora is a digital integrated healthcare system for affordable care connecting patients, healthcare professionals and healthcare facilities in Lagos, Nigeria"
        keywords="family memberships, N32,500 family membership, healthcare services, unlimited access, features, benefits"
      />
      <PatientNav />
      <AboutPage
      link={openModal}
      />
      <Getstarted onOk={closeModal} onCancel={closeModal} open={visible} />
    </>
  );
};

export default About;
