import './Navbar.scss'
import COMLogo from '../asset/img/com_logo.svg'
import COMLogoSmall from '../asset/img/com_logo_small.svg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavbarComp() {
  return(
    <>      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-md">
          <Link className="navbar-brand" to='/'>
            <img className="d-none d-md-block" src={COMLogo}></img>
            <img className="d-md-none" src={COMLogoSmall}></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/structure">Structure</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COM
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item" to="/company">Company</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/community">Community</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/oprec">Open Recruitment</Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-md" style={{visibility:"hidden"}}>
          <Link className="navbar-brand" to={'/'}>
            <img className="d-none d-md-block" src={COMLogo}></img>
            <img className="d-md-none" src={COMLogoSmall}></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/structure">Structure</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COM
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item" to="/company">Company</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/community">Community</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/oprec">Open Recruitment</Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComp