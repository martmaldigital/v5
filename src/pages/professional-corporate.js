import CorporatePage from 'components/corporate'
import ProfessionalNav from 'components/nav/professionalNav'
import Footer from 'components/footer'
const Index = () => {
  return (
    <>
    <CorporatePage />
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