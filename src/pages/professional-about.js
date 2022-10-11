import AboutPage from 'components/about'
import React from 'react'
import ProfessionalNav from 'components/nav/professionalNav'
import Footer from 'components/footer'

const Index= () => {
  return (
    <>
    <AboutPage />
    </>
  )
}

export default Index

Index.getLayout = (page) => {
    return (
      <>
        <ProfessionalNav />
        {page}
        <Footer />
      </>
    );
  };