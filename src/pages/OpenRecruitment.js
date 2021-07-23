import './OpenRecruitment.scss'
import Header from '../components/Oprek/Header'
import Navbar from '../components/Navbar'
import Role from '../components/Oprek/Role'
import FormApply from '../components/Oprek/FormApply'
import Footer from '../components/Footer'

function OpenRecruitment() {
  return(
    <>
      <Navbar />
      <Header />
      <Role />
      <FormApply />
      <Footer />
    </>
  )
}

export default OpenRecruitment