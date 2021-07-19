import './About.scss'
import Navbar from '../components/Navbar'
import LatarBelakang from '../components/About/LatarBelakang'
import Milestone from '../components/About/Milestone'

function About() {
  return(
    <>
      <Navbar />
      <div className="container-md">
        <h1>About Us</h1>
      </div>
      <LatarBelakang />
      <Milestone />
    </>
  )
}

export default About