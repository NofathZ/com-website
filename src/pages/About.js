import { useEffect } from 'react'
import './About.scss'
import Navbar from '../components/Navbar'
import LatarBelakang from '../components/About/LatarBelakang'
import Milestone from '../components/About/Milestone'
import Footer from '../components/Footer'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <>
      <Navbar />
      <div className="container-md" style={{marginTop:"64px", marginBottom:"64px"}}>
        <h1 className="heading-one d-block">About Us</h1>
      </div>
      <div style={{marginBottom:"58px"}}>
        <LatarBelakang />
      </div>
      <div style={{marginBottom:"50px"}}>
        <Milestone />
      </div>
      <Footer />
    </>
  )
}

export default About