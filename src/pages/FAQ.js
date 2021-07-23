import './FAQ.scss'
import QuestionPlusAnswer from '../components/QNA/QuestionPlusAnswer'
import ContactUs from '../components/QNA/ContactUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function QNA() {
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