// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navbar.scss'
import COMLogo from '../asset/img/com_logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavbarComp() {
  return(
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            <img src={COMLogo}></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span class="navbar-text">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/structure">Structure</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COM
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <Link class="dropdown-item" to="/company">Company</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/community">Community</Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/oprec">Open Recruitment</Link>
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