import './Role.scss'
import { useEffect, useState } from 'react'
import RoleCard from './RoleCard'
import AOS from 'aos'
import backoffice from '../../api/backoffice'
import TestImej from '../../asset/img/tesimej.png'

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
              <h1 className="lead-five heading-underline">Company</h1>
            </div>
            <div className="role-container" data-aos="fade-left">
              {RoleCompany.map(data => (
                <RoleCard name={data.name} photo={data.logo.url} requirement={data.requirement} description={data.description} />
              ))}
            </div>
          </div>
          <div className="col-md role-wrapper">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"70px"}}>
              <h1 className="lead-five heading-underline">Community</h1>
            </div>
            <div className="role-container" data-aos="fade-right">
              {RoleCommunity.map(data => (
                <RoleCard name={data.name} photo={data.logo.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Role