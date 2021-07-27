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
    <div className="teachera-container">
      <div className="d-flex justify-content-center align-items-center" style={{paddingTop:"58px", marginBottom: "58px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Teachera</h3>
      </div>
      <h5 className="lead-five" style={{textAlign:"center"}}>Introducing our Founder and Co-Founder</h5>
      <RightQuote
      source={DaffaPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Founder & Chief Executive Officer"
      name="Daffa Tyora Hamedya"
      />
      <LeftQuote
      source={IlhamPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & President Commisioner"
      name="Mohammad Ilham Ramadhan Heru"
      />
      <RightQuote
      source={AnnisaNurPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Vice President Commisioner"
      name="Annisa Nur Handayani"
      />
      <LeftQuote
      source={AdistiPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Head Resource Developer"
      name="Adisti Sekar Palupi"
      />
      <RightQuote
      source={LarasPhoto}
      quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
      position="Co-Founder & Chief Operating Officer"
      name="Larassayu Arvaneira Evanthe"
      />
      <Rounded bgcolor="bg-tangerine-orange-50" />
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