import './MainBodies.scss'

function MainBodies() {
  return(
    <div>
      <div className="d-flex justify-content-center main-container-community" style={{columnGap: "40px", marginBottom: "40px"}}>
        <div className="main-body body-two d-flex align-items-center bg-emerald-green-20 text-center"><b className="mx-auto">Board of Advisors</b></div>
        <div className="main-body body-two d-flex align-items-center bg-emerald-green-20 text-center"><b className="mx-auto">Owner</b></div>
        <div className="main-body body-two d-flex align-items-center bg-emerald-green-20 text-center"><b className="mx-auto">Board of Experts</b></div>
      </div>
      <div className="d-flex justify-content-center main-container-community" style={{columnGap: "40px"}}>
        <div className="main-body body-two d-flex align-items-center bg-emerald-green-20 text-center"><b className="mx-auto">Board of Directors</b></div>
        <div className="main-body body-two d-flex align-items-center bg-emerald-green-20 text-center"><b className="mx-auto">Board of Supervisors</b></div>
      </div>
    </div>
  )
}

export default MainBodies