import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ProjectNavbar() {
  return (
    <Navbar variant="light" className="px-5 projnav">
      <NavLink to="/" className="navbar-brand fw-bold">
        Japan Project
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavDropdown title="Samurai Life">
            <NavDropdown.Item>
              <NavLink to="/beliefs" className="nav-link text-dark">
                Beliefs
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/weapons" className="nav-link text-dark">
                Weapons
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/clothing" className="nav-link text-dark">
                Clothing
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ProjectNavbar;
