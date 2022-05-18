import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            DoBeDone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {user ? (
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>

                <Nav.Link
                  className="btn btn-warning text-dark px-4"
                  as={Link}
                  to="/login"
                  eventKey={2}
                >
                  Login
                </Nav.Link>
              </Nav>
            )}

            <Nav>
              {user ? (
                <Nav>
                  <button
                    onClick={() => signOut(auth)}
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </Nav>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
