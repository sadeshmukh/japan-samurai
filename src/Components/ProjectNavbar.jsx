import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ProjectNavbar() {
  return (
    <Navbar variant="dark" className="px-5 projnav fixed-top opacity-75">
      <NavLink to="/" className="navbar-brand fw-bold" id="project-brand">
        Japan Project
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            title="Samurai Life"
            menuVariant="dark"
            id="projnavdropdown"
            className="mx-3"
          >
            <NavDropdown.Item>
              <NavLink to="/beliefs" className="nav-link">
                Beliefs
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/weapons" className="nav-link ">
                Weapons
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/clothing" className="nav-link">
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
