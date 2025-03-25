

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About us</Nav.Link>
            <Nav.Link href="">Products</Nav.Link>
          </Nav>
          <Nav> {/* Separate Nav for alignment */}
            <Nav.Link href="#cart">
              <FaShoppingCart className="cart-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
