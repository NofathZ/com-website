import './Member.scss'

function Member() {
  return(
    <>
      <div className="container-lg">
        <h1>Member</h1>
        <div className="row">
          <div className="col-md">
            <div className="head-member">
              <div className="member-card"></div>
              <div className="member-card"></div>
            </div>
            <div className="other-member">
              <div className="member-card"></div>
              <div className="member-card"></div>
              <div className="member-card"></div>
            </div>
          </div>
          <div className="col-md" style={{border:"2px solid black"}}>
            <div className="head-member">
              <div className="member-card"></div>
              <div className="member-card"></div>
            </div>
            <div className="other-member">
              <div className="member-card"></div>
              <div className="member-card"></div>
              <div className="member-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Member