import ContactPage from 'components/contact'
import ProfessionalNav from 'components/nav/professionalNav'
import Footer from 'components/footer'


const Index = () => {
    return (
      <>
      <ContactPage />
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
      )
  }