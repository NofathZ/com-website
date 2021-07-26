import './Header.scss'

function Header() {
  return(
    <div className="header-company">
        <div className="container hero">
            <div className="row">
              <div className="col text-center company-head-left">
                <h1 className="title-one text-color-white">Edutech <br></br>Platform</h1>
              </div>
              <div className="col text-center">
                <h1 className="title-one text-color-white">Tutoring <br></br> Agency</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header