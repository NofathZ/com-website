import { useEffect } from 'react'
import './SupportingOrgans.scss'
import styled from 'styled-components'
import AOS from 'aos'

const dataSupport = [
  {
    role: "HRD",
    name: "Arifin"
  },
  {
    role: "Secretary",
    name: "Rafika Aulia Rahmadian Salya"
  },
  {
    role: "Ambassador",
    name: "Talitha Thedya Tsany"
  },
  {
    role: "Finance Officer",
    name: "Febbianti Mifta Salsabilla"
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
            <StructureBoxImg source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
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