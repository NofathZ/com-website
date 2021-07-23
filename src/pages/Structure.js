import { useEffect } from 'react'
import './Structure.scss'
import Head from '../components/Structure/Head'
import SupportingOrgans from '../components/Structure/SupportingOrgans'
import Member from '../components/Structure/Member'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from 'aos'

function Structure() {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  return(
    <>
      <Navbar />
      <div className="structure-container-one">
        <div className="container-md d-flex justify-content-center align-items-center" style={{paddingTop:"64px", marginBottom:"64px"}}>
          <h1 className="heading-one">Structure</h1>
        </div>
        <Head />
      </div>
      <div className="structure-container-two">
        <SupportingOrgans />
        <div style={{backgroundColor:"white", borderRadius:"100px 100px 0 0"}}>
          <Member />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Structure