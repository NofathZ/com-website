import { useEffect } from 'react'
import './Community.scss'
import Navbar from '../components/Navbar'
import Header from '../components/Community/Header'
import Footer from '../components/Footer'
import Lentera from '../components/Community/Lentera'


function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <>
      <Navbar />
      <Header />
      <Lentera />
      <Footer />
    </>
  )
}

export default Community