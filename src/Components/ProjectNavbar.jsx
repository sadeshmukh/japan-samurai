import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Tilt from "react-tilt";

function ProjectNavbar() {
  return (
    <Navbar
      variant="dark"
      className="px-5 projnav fixed-top opacity-75"
      expand="lg"
    >
      <Container fluid>
        <NavLink to="/" className="navbar-brand fw-bold" id="project-brand">
          Samurai
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/beliefs" className="nav-link">
              Beliefs
            </NavLink>
            <NavLink to="/weapons" className="nav-link ">
              Battle
            </NavLink>
            <NavLink to="/clothing" className="nav-link">
              Clothing
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNavbar;
