import './Role.scss'
import { useEffect } from 'react'
import RoleCard from './RoleCard'
import AOS from 'aos'

function Role() {
  useEffect(() => {
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
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
            </div>
          </div>
          <div className="col-md role-wrapper">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"70px"}}>
              <h1 className="lead-five heading-underline">Community</h1>
            </div>
            <div className="role-container" data-aos="fade-right">
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
              <RoleCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Role