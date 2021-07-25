import { useEffect } from 'react'
import './Milestone.scss'
import styled from 'styled-components'
import AOS from 'aos'
import MilestoneAprilLeftPhoto from '../../asset/img/About/MilestoneAprilLeft.png'
import MilestoneAprilRightPhoto from '../../asset/img/About/MilestoneAprilRight.png'
import MilestoneJulyPhoto from '../../asset/img/About/MilestoneJuly.png'

const MilestoneAprilImageLeft = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  border-radius: 0 50px 50px 0;
`
const MilestoneAprilImageRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  border-radius: 50px 0 0 50px;
`
const MilestoneAprilImageLeftSmall = styled.div`
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  margin-right: 2px;
  border-radius: 20px;
`
const MilestoneAprilImageRightSmall = styled.div`
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  margin-left: 2px;
  border-radius: 20px;
`

const MilestoneJulyImgBox = styled.div`
  width: 720px;
  height: 420.3px;
  border-radius: 50px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`

function Milestone() {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  return(
    <>
      <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "58px"}}>
        <h1 className="heading-three heading-underline">Milestone</h1>
      </div>
      <div className="milestone-container">
        <div className="milestone-april-container milestone-april-normal" style={{marginBottom:"32px"}} >
          <MilestoneAprilImageLeft source={MilestoneAprilLeftPhoto} data-aos="fade-right" />
          <div className="milestone-april-content">
            <h1 className="lead-three" style={{textAlign:"center"}}><b>April 2021</b></h1>
            <h1 className="lead-three" style={{textAlign:"center"}}><b>Our first discussion about COM</b></h1>
            <p className="body-one" style={{textAlign:"justify", marginTop:"32px"}}>Kami berkumpul secara daring dari Indonesia-Jerman dan mulai bercerita akan cita-cita pengabdian dan dedikasi pada tanah air Indonesia dimulai dari COM. Dukungan keadaan dalam situasi pandemi membuat kami sadar akan banyaknya pemuda/-i Indonesia yang juga memiliki ide-ide gemilang untuk berkontribusi kepada Indonesia, sehingga persatuan adalah jalan yang kami pilih untuk maju bersama-sama.</p>
          </div>
          <MilestoneAprilImageRight source={MilestoneAprilRightPhoto} data-aos="fade-left" />
        </div>
        
        <div className="milestone-april-container milestone-april-small" style={{marginBottom:"32px"}}>
          <div className="container">
            <h1 className="lead-three" style={{textAlign:"center"}}><b>April 2021</b></h1>
            <h1 className="lead-three" style={{textAlign:"center"}}><b>Our first discussion about COM</b></h1>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{marginTop:"32px", marginBottom:"32px"}}>
            <MilestoneAprilImageLeftSmall source={MilestoneAprilLeftPhoto} />
            <MilestoneAprilImageRightSmall source={MilestoneAprilRightPhoto} />
          </div>
          <div className="container">
            <p className="body-one" style={{textAlign:"justify"}}>Kami berkumpul secara daring dari Indonesia-Jerman dan mulai bercerita akan cita-cita pengabdian dan dedikasi pada tanah air Indonesia dimulai dari COM. Dukungan keadaan dalam situasi pandemi membuat kami sadar akan banyaknya pemuda/-i Indonesia yang juga memiliki ide-ide gemilang untuk berkontribusi kepada Indonesia, sehingga persatuan adalah jalan yang kami pilih untuk maju bersama-sama.</p>
          </div>
        </div>
        
        <div className="container-lg">
          <h1 className="lead-three" style={{textAlign:"center"}}><b>July 2021</b></h1>
          <h1 className="lead-three" style={{textAlign:"center"}}><b>Gathering of all founder and co-founders of our first company and community</b></h1>
          <div className="milestone-july-container" style={{marginTop:"58px"}}>
            <div className="d-none d-lg-block milestone-july-content-left" style={{marginRight:"5px"}}>
              <div className="d-flex justify-content-center align-items-center milestone-july-content-left-box" data-aos="fade-left">
                <h1 className="lead-two heading-underline" style={{textAlign:"center"}}><b>Company</b></h1>
                <p style={{textAlign:"center"}}>Heterogeneous<br/>as the key</p>
              </div>
            </div>
            <div className="milestone-july-img-container">
              <MilestoneJulyImgBox source={MilestoneJulyPhoto} data-aos="zoom-in" />
            </div>
            <div className="d-none d-lg-block milestone-july-content-right" style={{marginLeft:"5px"}}>
              <div className="d-flex justify-content-center align-items-center milestone-july-content-right-box" data-aos="fade-right">
                <h1 className="lead-two heading-underline" style={{textAlign:"center"}}><b>Community</b></h1>
                <p style={{textAlign:"center"}}>Majority<br/>for consideration</p>
              </div>
            </div>
            <div className="d-lg-none container-lg milestone-july-content-small">
              <div className="milestone-july-content-left-small">
                <div className="d-flex justify-content-center align-items-center milestone-july-content-left-box" style={{marginTop:"5px"}} data-aos="fade-left">
                  <h1 className="lead-two heading-underline"><b>Company</b></h1>
                  <p style={{textAlign:"center"}}>Heterogeneous<br/>as the key</p>
                </div>
              </div>
              <div className="milestone-july-content-right-small">
                <div className="d-flex justify-content-center align-items-center milestone-july-content-right-box" style={{marginTop:"5px"}} data-aos="fade-right">
                  <h1 className="lead-two heading-underline"><b>Community</b></h1>
                  <p style={{textAlign:"center"}}>Majority<br/>for consideration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Milestone