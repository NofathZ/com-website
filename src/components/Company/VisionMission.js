import './VisionMission.scss'
import styled from 'styled-components'
import EderaLogo from '../../asset/img/Company/EderaLogo.png'

const CompanyImage = styled.div`
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
    <div className="vision-mission-container-company" style={{marginBottom:"70px"}}>
      <div className="container d-flex justify-content-between align-items-center" style={{columnGap:"100px"}}>
        <div className="vision-mission">
          <p className="body-one" style={{textAlign:"justify"}}>Mewujudkan Indonesia kreatif dan inovatif dengan pendukungan dan pengembangan industri periklanan, musik, film, video, dan animasi, serta tari.</p>
          <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "1rem"}}>  
            <p className="lead-three heading-underline" style={{textAlign:"center"}}><b>Our Missions</b></p>
          </div>
          <ul>
            <li className="body-one" style={{textAlign:"justify"}}>Mengedukasi calon insan kreatif dan inovatif di indonesia melalui penanaman pemahaman dan penumbuhan keterampilan dengan basis teknologi dan kultural.</li>
            <li className="body-one" style={{textAlign:"justify"}}>Meningkatkan produktivitas calon insan kreatif dan inovatif dengan memberikan ruang karya seluas-luasnya.</li>
          </ul>
        </div>
        <CompanyImage source={EderaLogo} />
      </div>
    </div>
  )
}

export default VisionMission