import './Teachera.scss'
import RightQuote from '../templates/RightQuote'
import LeftQuote from '../templates/LeftQuote'
import DaffaPhoto from '../../asset/img/Company/DaffaTeachera.jpg'
import IlhamPhoto from '../../asset/img/Company/IlhamTeachera.jpg'
import AnnisaNurPhoto from '../../asset/img/Company/AnnisaTeachera.jpg'
import AdistiPhoto from '../../asset/img/Company/AdisTeachera.jpg'
import LarasPhoto from '../../asset/img/Company/LarasTeachera.jpg'
import Rounded from '../templates/Rounded'
import VisionMission from './VisionMission'
import CoreValues from './CoreValues'
import MainBodies from './MainBodies'
import CoreTeamImage from '../../asset/img/Company/diagram.png'

function Teachera() {
  return(
    <div>
      <div className="teachera-container">
        <div data-aos="fade-right">
          <RightQuote
          source={DaffaPhoto}
          quote="“Maknai kreativitas dalam berkarya.\nJunjung inovasi lewat kreasi”"
          position="Founder & Chief Executive Officer"
          name="Daffa Tyora Hamedya"
          />
        </div>
        <div data-aos="fade-left">
          <LeftQuote
          source={IlhamPhoto}
          quote="“Creative Industry isn’t something new but we will make it creative!”"
          position="Co-Founder & President Commissioner"
          name="Mohammad Ilham Ramadhan Heru"
          />
        </div>
        <div data-aos="fade-right">
          <RightQuote
          source={AnnisaNurPhoto}
          quote="“Creative industry input is basically wild ideas and strong will”"
          position="Co-Founder & Vice President Commissioner"
          name="Annisa Nur Handayani"
          />
        </div>
        <div data-aos="fade-left">
          <LeftQuote
          source={AdistiPhoto}
          quote="“Industri kreatif merupakan wadah berbagi ekspresi, karya, dan proses”"
          position="Co-Founder & Human Resource Developer"
          name="Adisti Sekar Palupi"
          />
        </div>
        <div data-aos="fade-right">
          <RightQuote
          source={LarasPhoto}
          quote="“Kreativitas dimunculkan dengan\nmencoba hal baru dan mengambil risiko”"
          position="Co-Founder & Chief Operating Officer"
          name="Larassayu Arvaneira Evanthe"
          />
        </div>
      </div>
      <Rounded text="Enhance Understanding, Raising Skills" bgcolor="bg-tangerine-orange-50" />
      <VisionMission />
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Pillars</h3>
      </div>
      <CoreValues />
      <div style={{background: "#C4C4C4", paddingBottom: "55px", paddingTop: "55px"}}>
        <div className="d-flex justify-content-center align-items-center" style={{marginBottom: "58px"}}>
          <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Main Bodies</h3>
        </div>
        <MainBodies />
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Core Team</h3>
      </div>
      <div className="container text-center coreteam-image-company" style={{marginBottom: "58px"}}>
        <img src={CoreTeamImage} alt="" data-aos="zoom-in" />
      </div>
    </div>
  )
}

export default Teachera