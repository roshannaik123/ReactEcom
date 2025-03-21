import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Products from '../products/Products';
import React, { useState } from 'react';
import Cart from '../cart/Cart';

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  const handleCart = () => {
    setCartOpen(true);
  };

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
            <Button variant="secondary" size="lg" active onClick={handleCart}>
              Cart
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Products Component */}
      <Products productsArr={productsArr} />

      {/* Cart Modal */}
      <Cart show={cartOpen} handleClose={() => setCartOpen(false)} productsArr={productsArr} />
    </>
  );
};

export default Header;