import './VisionMission.scss'
import styled from 'styled-components'
import LenteraLogo from '../../asset/img/Community/LenteraLogo.png'

const CommunityImage = styled.div`
  min-width: 418px;
  height: 360px;
  background: url(${props => props.source});
  background-position: center center;

  @media screen and (max-width: 425px) {
    min-width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

function VisionMission() {
  return(
    <div className="vision-mission-container-community" style={{marginBottom:"70px"}}>
      <div className="container d-flex justify-content-between align-items-center" style={{columnGap:"100px"}}>
        <CommunityImage source={LenteraLogo} data-aos="zoom-in" />
        <div className="vision-mission">
          <p className="body-one" style={{textAlign:"justify"}}>Mewujudkan stabilitas perekonomian Indonesia yang berkelanjutan dengan pendukungan dan pengembangan di dunia bisnis.</p>
          <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "1rem"}}>  
            <p className="lead-three heading-underline" style={{textAlign:"center"}}><b>Our Missions</b></p>
          </div>
          <ul>
            <li className="body-one" style={{textAlign:"justify"}}>Mengedukasi calon pengusaha di Indonesia melalui pemberian ilmu dan pengembangan potensi diri dengan basis teknologi dan kultural.</li>
            <li className="body-one" style={{textAlign:"justify"}}>Mengoptimalkan aktivitas calon pengusaha dengan memberikan keleluasaan dalam bertindak secara nyata.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMission