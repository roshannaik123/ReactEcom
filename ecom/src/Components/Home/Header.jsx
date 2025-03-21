import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Products from '../products/Products';

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Content */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
            {/* Navigation Links (Left Side) */}
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">STORE</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
            </Nav>

            {/* Cart Button (Right Side) */}
            <Button variant="secondary" size="lg" active>
              Cart
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Products/>
    </>
  );
};

export default Header;