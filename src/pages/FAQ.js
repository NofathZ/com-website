import { useEffect } from 'react'
import './FAQ.scss'
import QuestionPlusAnswer from '../components/QNA/QuestionPlusAnswer'
import ContactUs from '../components/QNA/ContactUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function QNA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <>
      <Navbar />
      <QuestionPlusAnswer />
      <ContactUs />
      <Footer />
    </>
  )
}

export default QNA