import { useState, useEffect } from 'react'
import './Member.scss'
import styled from 'styled-components'
import AOS from 'aos'
import backoffice from '../../api/backoffice'
import CompanyFounderPhoto from '../../asset/img/Structure/CompanyFounder.png'
import CommunityFounderPhoto from '../../asset/img/Structure/CommunityFounder.png'
import CompanyCoFounderPhoto from '../../asset/img/Structure/CompanyCoFounder.png'
import CommunityCoFounderPhoto from '../../asset/img/Structure/CommunityCoFounder.png'

const dataHead = [
  [
    {
      role: "Founder",
      name: "Daffa Tyora Hamedya",
      photo: CompanyFounderPhoto
    },
    {
      role: "Co-Founder",
      name: "Mohammad Ilham Ramadhan Heru",
      photo: CompanyCoFounderPhoto
    }
  ],
  [
    {
      role: "Founder",
      name: "Daffa Tyora Hamedya",
      photo: CommunityFounderPhoto
    },
    {
      role: "Co-Founder",
      name: "Mohammad Ilham Ramadhan Heru",
      photo: CommunityCoFounderPhoto
    }
  ]
]

const dataOtherMember = [
  [
    {
      role: "Co-Founder",
      name: "Annisa Nur Handayani"
    },
    {
      role: "Co-Founder",
      name: "Adisti Sekar Palupi"
    },
    {
      role: "Co-Founder",
      name: "Larassayu Arvaneira Evanthe"
    },
  ],
  [
    {
      role: "Co-Founder",
      name: "Annisa Tahta Ramadhani"
    },
    {
      role: "Co-Founder",
      name: "Erdyavika Claudia Apriwanti"
    },
    {
      role: "Co-Founder",
      name: "Salsabila Naqiyya Qoriroh"
    },
  ]
]

const MemberCardImg = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 20px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`

function Member() {
  
  const [companyOtherMember, setCompanyOtherMember] = useState([])
  const [communityOtherMember, setCommunityOtherMember] = useState([])

  useEffect(async () => {
    AOS.init({duration: 500});
    await backoffice.get('/api/v1/user/members').then(resp => {
      setCompanyOtherMember(resp.data.data.Company)
      setCommunityOtherMember(resp.data.data.Community)
    })
  }, [])
  return(
    <>
      <div className="container-lg" style={{paddingTop:"90px", paddingBottom:"160px"}}>
        <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"72px"}}>
          <h1 className="heading-three heading-underline">Member</h1>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md line-split">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"32px"}}>
              <p className="lead-two heading-underline">Company</p>
            </div>
            <div className="head-member">
              {dataHead[0].map(data => (
                <div className="member-card">
                  <MemberCardImg source={data.photo} />
                  <div className="member-card-title">
                    <p className="lead-three" style={{textAlign:"center"}}>{data.role}</p>
                  </div>
                  <div className="member-card-name">
                    <p className="lead-one" style={{textAlign:"center"}}>{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="other-member">
              {companyOtherMember.map(data => (
                <div className="member-card">
                  <MemberCardImg source={data.image.url} />
                  <div className="member-card-title">
                    <p className="lead-three" style={{textAlign:"center"}}>{data.role}</p>
                  </div>
                  <div className="member-card-name">
                    <p className="lead-one" style={{textAlign:"center"}}>{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"32px"}}>
              <p className="lead-two heading-underline">Community</p>
            </div>
            <div className="head-member">
              {dataHead[1].map(data => (
                <div className="member-card">
                  <MemberCardImg source={data.photo} />
                  <div className="member-card-title">
                    <p className="lead-three" style={{textAlign:"center"}}>{data.role}</p>
                  </div>
                  <div className="member-card-name">
                    <p className="lead-one" style={{textAlign:"center"}}>{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="other-member">
              {communityOtherMember.map(data => (
                <div className="member-card">
                  <MemberCardImg source={data.image.url} />
                  <div className="member-card-title">
                    <p className="lead-three" style={{textAlign:"center"}}>{data.role}</p>
                  </div>
                  <div className="member-card-name">
                    <p className="lead-one" style={{textAlign:"center"}}>{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Member