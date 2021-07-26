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

function Teachera() {
  return(
    <div className="teachera-container">
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Lentera Artha</h3>
      </div>
      <h5 className="lead-five" style={{textAlign:"center"}}>Introducing our Founder and Co-Founder</h5>
      <LeftQuote
      source={DaffaPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Founder & Head Mediator"
      name="Daffa Tyora Hamedya"
      />
      <RightQuote
      source={IlhamPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Head Mastermind"
      name="Mohammad Ilham Ramadhan Heru"
      />
      <LeftQuote
      source={AnnisaTahtaPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Mastermind"
      name="Annisa Tahta Ramadhani"
      />
      <RightQuote
      source={DeaPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Human Resource Developer"
      name="Erdyavika Claudia Apriwanti"
      />
      <LeftQuote
      source={SalsabilaPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Founder & Head of Operational Manager"
      name="Salsabila Naqiyya Qoriroh"
      />
      <Rounded bgcolor="bg-emerald-green-50" />
      <VisionMission />
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Core Values</h3>
      </div>
      <CoreValues />
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"28px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Main Bodies</h3>
      </div>
      <MainBodies />
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Core Team</h3>
      </div>
      <div className="container text-center" style={{marginBottom: "58px"}}>
        <img src={CoreTeamImage} alt="" style={{width: "100%"}} />
      </div>
    </div>
  )
}

export default Teachera