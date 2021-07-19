import './Role.scss'
import RoleCard from './RoleCard'

function Role() {
  return(
    <>
      <div className="container-md">
        <div className="row">
          <div className="col role-container">
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
          </div>
          <div className="col role-container">
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Role