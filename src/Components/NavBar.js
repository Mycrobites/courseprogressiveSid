import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSignOut = () => {
    //
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Progressive Minds</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item" onClick={handleSignOut}>
              <Link className="nav-link" to="/">
                Log Out
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
