import React from 'react';
import { Modal, Button, ListGroup, Image } from 'react-bootstrap';

const Cart = ({ show, handleClose, productsArr }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsArr.length > 0 ? (
          <ListGroup>
            {productsArr.map((product, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <Image src={product.imageUrl} thumbnail width="50" height="50" className="me-3" />
                <div>
                  <h6>{product.title}</h6>
                  <p>Price: ${product.price}</p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;