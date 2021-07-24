import { useEffect } from 'react'
import './SupportingOrgans.scss'
import styled from 'styled-components'
import AOS from 'aos'
import HRDPhoto from '../../asset/img/Structure/arifin.png'
import SecretaryPhoto from '../../asset/img/Structure/RafikaAulia.png'
import AmbassadorPhoto from '../../asset/img/Structure/Talitha.png'
import FinanceOfficerPhoto from '../../asset/img/Structure/Mifta.png'

const dataSupport = [
  {
    role: "HRD",
    name: "Arifin",
    photo: HRDPhoto
  },
  {
    role: "Secretary",
    name: "Rafika Aulia Rahmadian Salya",
    photo: SecretaryPhoto
  },
  {
    role: "Ambassador",
    name: "Talitha Thedya Tsany",
    photo: AmbassadorPhoto
  },
  {
    role: "Finance Officer",
    name: "Febbianti Mifta Salsabilla",
    photo: FinanceOfficerPhoto
  }
]

const StructureBoxImg = styled.div`
  width: 240px;
  height: 320px;
  border-radius: 20px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`

function SupportingOrgans() {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  return(
    <div className="container" style={{marginTop:"120px"}}>
      <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"60px"}}>
        <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>Supporting Organs</h3>
      </div>
      <div className="support-organs-img-container">
        {dataSupport.map(data => (
          <div className="structure-box" data-aos="fade-up">
            <StructureBoxImg source={data.photo} />
            <div className="structure-box-title">
              <p className="lead-three">{data.role}</p>
            </div>
            <div className="structure-box-name">
              <p className="lead-one">{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupportingOrgans