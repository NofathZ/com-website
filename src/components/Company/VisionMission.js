import './VisionMission.scss'
import styled from 'styled-components'

const CompanyImage = styled.div`
  min-width: 418px;
  height: 360px;
  background: #C4C4C4;
`

function VisionMission() {
  return(
    <div className="vision-mission-container" style={{marginBottom:"70px"}}>
      <div className="container d-flex justify-content-between align-items-center" style={{columnGap:"100px"}}>
        <div className="vision-mission">
          <p className="body-one" style={{textAlign:"justify"}}>Mewujudkan Indonesia kreatif dan inovatif dengan pendukungan dan pengembangan industri periklanan, musik, film, video, dan animasi, serta tari.</p>
          <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "1rem"}}>  
            <p className="lead-three heading-underline" style={{textAlign:"center"}}><b>Our Missions</b></p>
          </div>
          <ul>
            <li className="body-one" style={{textAlign:"justify"}}>Mengedukasi calon insan kreatif dan inovatif di indonesia melalui penanaman pemahaman dan penumbuhan keterampilan dengan basis teknologi dan kultur.</li>
            <li className="body-one" style={{textAlign:"justify"}}>Meningkatkan produktivitas partisipan dengan memberikan ruang karya seluas-luasnya.</li>
          </ul>
        </div>
        <CompanyImage />
      </div>
    </div>
  )
}

export default VisionMission