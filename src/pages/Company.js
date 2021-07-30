import { useEffect } from 'react'
import './Company.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Company/Header'
import Footer from '../components/Footer'
import Teachera from '../components/Company/Teachera'
import Title from '../components/templates/Title'


function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <>
      <Navbar />
      <div className="bg-tangerine-orange-50">
        <Header />
        <Title
        title="Edera"
        subtitle="Introducing our Founder and Co-Founder"
        bgcolor="bg-tangerine-orange-50"
        />
      </div>
      <Teachera />
      <Footer />
    </>
  )
}

export default Company