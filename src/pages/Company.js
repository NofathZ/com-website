import { useEffect } from 'react'
import './Company.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Company/Header'
import Footer from '../components/Footer'
import Teachera from '../components/Company/Teachera'


function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <>
      <Navbar />
      <Header />
      <Teachera />
      <Footer />
    </>
  )
}

export default Company