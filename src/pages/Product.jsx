import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    AOS.init({ duration: 1000 });

    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center" data-aos="fade-down">Our Products</h2>

      
      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

     
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id} data-aos="fade-up">
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </Row>
    </Container>
  );
}

export default Products;
