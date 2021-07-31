import './Lentera.scss'
import RightQuote from '../templates/RightQuote'
import LeftQuote from '../templates/LeftQuote'
import DaffaPhoto from '../../asset/img/Community/DaffaLentera.jpg'
import IlhamPhoto from '../../asset/img/Community/IlhamLentera.jpg'
import AnnisaTahtaPhoto from '../../asset/img/Community/AnnisaTahtaLentera.jpg'
import DeaPhoto from '../../asset/img/Community/DeaLentera.jpg'
import SalsabilaPhoto from '../../asset/img/Community/SalsabilaLentera.jpg'
import Rounded from '../templates/Rounded'
import VisionMission from './VisionMission'
import CoreValues from './CoreValues'
import MainBodies from './MainBodies'
import CoreTeamImage from '../../asset/img/Community/diagram.png'

function Lentera() {
  return(
    <div>
      <div className="lentera-container">
        <LeftQuote
        source={DaffaPhoto}
        quote="“Fokus bertindak demi stabilitas\nJalani aksi secara berkelanjutan”"
        position="Founder & Head Mediator"
        name="Daffa Tyora Hamedya"
        />
        <RightQuote
        source={IlhamPhoto}
        quote="“Bisnis, Bisnis, Bisnis\nSemuanya tentang memulai”"
        position="Co-Founder & Head Mastermind"
        name="Mohammad Ilham Ramadhan Heru"
        />
        <LeftQuote
        source={AnnisaTahtaPhoto}
        quote="“Seseorang yang berani mengambil tindakan\nbukan bermimpi ialah pengusaha sejati”"
        position="Co-Founder & Mastermind"
        name="Annisa Tahta Ramadhani"
        />
        <RightQuote
        source={DeaPhoto}
        quote="“Berbisnis bukan tentang keuntungan namun\nbagaimana kamu bisa membaca peluang”"
        position="Co-Founder & Human Resource Developer"
        name="Erdyavika Claudia Apriwanti"
        />
        <LeftQuote
        source={SalsabilaPhoto}
        quote="“You’re already success if you take the chance to try”"
        position="Co-Founder & Head of Operational Manager"
        name="Salsabila Naqiyya Qoriroh"
        />
      </div>
      <Rounded text="Provide Knowledge, Develop Self-Potential" bgcolor="bg-emerald-green-50" />
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
      <div className="container text-center coreteam-image-community" style={{marginBottom: "58px"}}>
        <img src={CoreTeamImage} alt="" />
      </div>
    </div>
  )
}

export default Lentera