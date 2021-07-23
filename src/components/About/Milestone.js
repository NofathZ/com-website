import './Milestone.scss'
import FotoTes from '../../asset/img/tes.png'
import styled from 'styled-components'

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
  // background-color: black;
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
  width: 600px;
  height: 400px;
  border-radius: 50px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`

function Milestone() {
  return(
    <>
      <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "58px"}}>
        <h1 className="heading-three heading-underline">Milestone</h1>
      </div>
      <div className="milestone-container">
        <div className="milestone-april-container milestone-april-normal" style={{marginBottom:"32px"}}>
          {/* <div className="milestone-april-img-left"></div> */}
          <MilestoneAprilImageLeft source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
          <div className="milestone-april-content">
            <h1 className="lead-three" style={{textAlign:"center"}}>April 2021</h1>
            <h1 className="lead-three" style={{textAlign:"center"}}>Our first discussion about COM</h1>
            <p className="body-one" style={{textAlign:"justify", marginTop:"32px"}}>Kami berkumpul secara daring dari Indonesia-Jerman dan mulai bercerita akan cita-cita pengabdian dan dedikasi pada tanah air Indonesia dimulai dari COM. Dukungan keadaan dalam situasi pandemi membuat kami sadar akan banyaknya pemuda/-i Indonesia yang juga memiliki ide-ide gemilang untuk berkontribusi kepada Indonesia, sehingga persatuan adalah jalan yang kami pilih untuk maju bersama-sama</p>
          </div>
          {/* <div className="milestone-april-img-right"></div> */}
          <MilestoneAprilImageRight source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
        </div>
        
        <div className="milestone-april-container milestone-april-small" style={{marginBottom:"32px"}}>
          <div className="container">
            <h1 className="lead-three" style={{textAlign:"center"}}>April 2021</h1>
            <h1 className="lead-three" style={{textAlign:"center"}}>Our first discussion about COM</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{marginTop:"32px", marginBottom:"32px"}}>
            {/* <div className="milestone-april-img-left-small"></div>
            <div className="milestone-april-img-right-small"></div> */}
            <MilestoneAprilImageLeftSmall source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
            <MilestoneAprilImageRightSmall source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
          </div>
          <div className="container">
            <p className="body-one" style={{textAlign:"justify"}}>Kami berkumpul secara daring dari Indonesia-Jerman dan mulai bercerita akan cita-cita pengabdian dan dedikasi pada tanah air Indonesia dimulai dari COM. Dukungan keadaan dalam situasi pandemi membuat kami sadar akan banyaknya pemuda/-i Indonesia yang juga memiliki ide-ide gemilang untuk berkontribusi kepada Indonesia, sehingga persatuan adalah jalan yang kami pilih untuk maju bersama-sama</p>
          </div>
        </div>
        
        
        <div className="container-lg">
          <h1 className="lead-three" style={{textAlign:"center"}}>July 2021</h1>
          <h1 className="lead-three" style={{textAlign:"center"}}>Gathering of all founder and co-founders of our first company and community</h1>
          <div className="milestone-july-container" style={{marginTop:"58px"}}>
            <div className="d-none d-lg-block milestone-july-content-left">
              <div className="d-flex justify-content-center align-items-center milestone-july-content-left-box">
                <h1 className="lead-two heading-underline">Company</h1>
                <p style={{textAlign:"center"}}>Heterogeneous as the key</p>
              </div>
            </div>
            <div className="milestone-july-img-container">
              {/* <div className="milestone-july-img-box"></div> */}
              <MilestoneJulyImgBox source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
            </div>
            <div className="d-none d-lg-block milestone-july-content-right">
              <div className="d-flex justify-content-center align-items-center milestone-july-content-right-box">
                <h1 className="lead-two heading-underline">Community</h1>
                <p style={{textAlign:"center"}}>Majority for consideration</p>
              </div>
            </div>
            <div className="d-lg-none container-lg milestone-july-content-small">
              <div className="milestone-july-content-left-small">
                <div className="d-flex justify-content-center align-items-center milestone-july-content-left-box">
                  <h1>Company</h1>
                  <p>Heterogeneous as the key</p>
                </div>
              </div>
              <div className="milestone-july-content-right-small">
                <div className="d-flex justify-content-center align-items-center milestone-july-content-right-box">
                  <h1>Community</h1>
                  <p>Majority for consideration</p>
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