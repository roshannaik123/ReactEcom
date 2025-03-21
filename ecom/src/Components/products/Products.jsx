import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'; // Import necessary components

const Products = () => {
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

  return (
    <Container>
      <Row>
        {productsArr.map((item, index) => (
          <Col key={index} md={3} className="mb-4"> {/* Use Bootstrap grid system for layout */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text> {/* Use Card.Text for price */}
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;