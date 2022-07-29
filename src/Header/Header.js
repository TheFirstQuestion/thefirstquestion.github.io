import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link as RR_Link, Outlet } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={RR_Link}>
            Steven G. Opferman
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={RR_Link} to="/timeline">
                Things I've Done
              </Nav.Link>
              <Nav.Link as={RR_Link} to="/resources">
                Resources
              </Nav.Link>
              <Button as={RR_Link} to="/contact" variant="dark">
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mainContent">
        <Outlet />
      </Container>
    </>
  );
}
