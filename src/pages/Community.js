import { useEffect } from 'react'
import './Community.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Community/Header'
import Footer from '../components/Footer'
import Lentera from '../components/Community/Lentera'
import Title from '../components/templates/Title'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration: 500})
  }, [])
  return(
    <>
      <Navbar />
      <div className="bg-emerald-green-50">
        <Header />
        <Title
        title="Lentera Artha"
        subtitle="Introducing our Founder and Co-Founder"
        bgcolor="bg-emerald-green-50"
        />
      </div>
      <Lentera />
      <Footer />
    </>
  )
}

export default Community