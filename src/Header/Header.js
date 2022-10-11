import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link as RR_Link, Outlet } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={RR_Link}>
            Steven G. Opferman
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <Container className="mainContent">
        <Outlet />
      </Container>
    </>
  );
}
