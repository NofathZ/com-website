import './Role.scss'
import { useEffect, useState } from 'react'
import RoleCard from './RoleCard'
import AOS from 'aos'

function Role(props) {

  let RoleCompany = props.RoleCompany
  let RoleCommunity = props.RoleCommunity

  useEffect(async () => {
    AOS.init({duration: 500})
  }, [])
  return(
    <>
      <div className="container-md">
        <div className="row">
          <div className="col-md role-wrapper line-split">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"70px"}}>
              <h1 className="lead-five heading-underline"><b>Company</b></h1>
            </div>
            <div className="role-container" data-aos="fade-right">
              {RoleCompany.map(data => (
                <RoleCard name={data.name} photo={data.logo.url} requirement={data.requirement} description={data.description} />
              ))}
            </div>
          </div>
          <div className="col-md role-wrapper">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"70px"}}>
              <h1 className="lead-five heading-underline"><b>Community</b></h1>
            </div>
            <div className="role-container" data-aos="fade-left">
              {RoleCommunity.map(data => (
                <RoleCard name={data.name} photo={data.logo.url} requirement={data.requirement} description={data.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Role