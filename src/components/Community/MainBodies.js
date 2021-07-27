import './MainBodies.scss'

function MainBodies() {
  return(
    <div style={{marginBottom:"70px"}}>
      <div className="d-flex justify-content-center" style={{columnGap: "40px", marginBottom: "40px"}}>
        <div className="main-body body-two bg-emerald-green-20 text-center"><b>Boards of Advisors</b></div>
        <div className="main-body body-two bg-emerald-green-20 text-center"><b>Owner</b></div>
        <div className="main-body body-two bg-emerald-green-20 text-center"><b>Boards of Experts</b></div>
      </div>
      <div className="d-flex justify-content-center" style={{columnGap: "40px"}}>
        <div className="main-body body-two bg-emerald-green-20 text-center"><b>Boards of Advisors</b></div>
        <div className="main-body body-two bg-emerald-green-20 text-center"><b>Boards of Advisors</b></div>
      </div>
    </div>
  )
}

export default MainBodies