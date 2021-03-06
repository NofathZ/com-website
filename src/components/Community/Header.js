import './Header.scss'

function Header() {
  return(
    <div className="header-community">
        <div className="container hero">
            <div className="row">
              <div className="col text-center community-head-left">
                <h1 className="title-one text-color-white">Exhibition</h1>
              </div>
              <div className="col text-center">
                <h1 className="title-one text-color-white">Virtual Expo</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header