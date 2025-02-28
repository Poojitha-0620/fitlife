import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsCartX } from "react-icons/bs";
import AOS from "aos";

function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: true,
    });

    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalCost(total);
  }, [cart]);

  return (
    <Container className="py-5 mt-5">
      <h2 className="fw-bold" data-aos="fade-right">Your Cart</h2>
      <h4 className="fw-bold">Total Cost: ₹{totalCost.toFixed(2)}</h4>
          
      {cart.length === 0 ? (
        <div className="d-flex flex-column align-items-center mt-4">
          <BsCartX size={80} className="text-muted" data-aos="zoom-in-down"/>
          <p className="fs-5 mt-3" data-aos="zoom-out">Your cart is empty. Start shopping now!</p>
          <Button variant="primary" href="/proteinshakes" className="mb-3 p-3" data-aos="fade-up" data-aos-duration="1000">Browse Protein Shakes</Button>
          <Button variant="primary" href="/healthyfood" className="p-3" data-aos="fade-up" data-aos-duration="1000">Browse Healthy Foods</Button>
          <Button variant="primary" href="/workoutequipments" className="mb-3 p-3 mt-3" data-aos="fade-up" data-aos-duration="1000">Browse Workout Equipment</Button>
        </div>
      ) : (
        <>
          <Row>
            {cart.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} alt={item.name} style={{ width: "414px", height: "300px", objectFit: "cover" }}/>
                  <Card.Body className="text-center">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>₹{(item.price * item.quantity).toFixed(2)}</Card.Text>
                    
                    
                    <div className="d-flex justify-content-center align-items-center">
                      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                        -
                      </Button>
                      <span className="mx-2 fw-bold">{item.quantity}</span>
                      <Button variant="outline-success" size="sm" onClick={() => addToCart(item)}>
                        +
                      </Button>
                    </div>

                   
                    <Button variant="danger" size="sm" className="mt-2" onClick={() => removeFromCart(item.id, true)}>
                      Remove Item
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

         
          
        </>
      )}
    </Container>
  );
}

export default Cart;
