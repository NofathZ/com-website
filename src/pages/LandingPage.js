import { useEffect } from 'react'
import './LandingPage.scss'
import Navbar from '../components/Navbar'
import Header from '../components/LandingPage/Header'
import COMTarget from '../components/LandingPage/COMTarget'
import COMVision from '../components/LandingPage/COMVision'
import COMMission from '../components/LandingPage/COMMission'
import COMPilar from '../components/LandingPage/COMPilar'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration: 500})
  }, [])
  return(
    <>
      <Navbar />
      <div className="bg-tangerine-orange-20">
        <Header />
        <COMTarget />
      </div>
      <COMVision />
      <COMMission />
      <div className="pt-5 mt-5 bg-emerald-green-20 green-section">
        <COMPilar />
      </div>
      <Footer />
    </>
  )
}

export default LandingPage