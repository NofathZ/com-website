import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavbarComp() {
  return(
    <>
      <nav className="navbar navbar-dark navbar-expand-md sticky-top text-light bg-dark navigation-clean">
          <div className="container"><a className="navbar-brand" href="#">Company Name</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item"><a className="nav-link active" href="#">First Item</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Second Item</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
                      <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">Dropdown </a>
                          <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  )
}

export default NavbarComp