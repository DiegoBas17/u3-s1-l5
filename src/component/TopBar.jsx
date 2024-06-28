import { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import { Search } from "react-bootstrap-icons";
import imgProfile from "../assets/kids_icon.png";

class TopBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logoNetflix" height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tv Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#home">
                <Search />
              </Nav.Link>
              <Nav.Link href="#link">KIDS</Nav.Link>
              <Nav.Link href="#link">
                <img src={imgProfile} alt="imgProfiloKids" height={50} />
              </Nav.Link>
              <NavDropdown title="" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="#action/3.1">Profilo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Impostazioni
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Contattaci
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default TopBar;
