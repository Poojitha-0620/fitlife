import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import choco from "../assets/choco.png"
import almond1 from "../assets/almond1.jpg";
import banana from "../assets/banana.jpg";
import peanut from "../assets/peanut.jpg";
import straw from "../assets/straw.jpg";
import blue from "../assets/blue.jpg";
import detox from "../assets/detox.jpg";
import oats from "../assets/oats.jpg";
import coco from "../assets/coco.webp";
import mango from "../assets/mango.jpg";
import whey from "../assets/whey.jpg";
import veganshake from "../assets/veganshake.jpg";
import coffee from "../assets/coffee.jpg";
import berry from "../assets/berry.jpg";
import double from "../assets/double.jpg";

const proteinShakes = [
  //  Classic Protein Shakes
  { id: 1, name: "Chocolate Power Shake 🍫", price: 70, image: choco, category: "Classic Protein Shakes" },
  { id: 2, name: "Vanilla Almond Boost 🌰", price: 120, image: almond1, category: "Classic Protein Shakes" },
  { id: 3, name: "Strawberry Muscle Fuel 🍓", price: 80, image: straw, category: "Classic Protein Shakes" },
  { id: 4, name: "Banana Nut Strength Shake 🍌", price: 60, image: banana, category: "Classic Protein Shakes" },
  { id: 5, name: "Peanut Butter Protein Punch 🥜", price: 75, image: peanut, category: "Classic Protein Shakes" },

  //  Healthy & Special Diet Shakes
  { id: 6, name: "Green Detox Protein Shake 🥬", price: 65, image: detox, category: "Healthy & Special Diet Shakes" },
  { id: 7, name: "Oats & Honey Energy Shake 🍯", price: 75, image: oats, category: "Healthy & Special Diet Shakes" },
  { id: 8, name: "Blueberry Antioxidant Shake 🫐", price: 85, image: blue, category: "Healthy & Special Diet Shakes" },
  { id: 9, name: "Coconut Protein Delight 🥥", price: 50, image: coco, category: "Healthy & Special Diet Shakes" },
  { id: 10, name: "Mango Muscle Builder 🥭", price: 70, image: mango, category: "Healthy & Special Diet Shakes" },

  // Advanced & High-Performance Shakes
  { id: 11, name: "Whey Power Blend 🥛", price: 40, image: whey, category: "Advanced & High-Performance Shakes" },
  { id: 12, name: "Vegan Plant Protein Shake 🌱", price: 80, image: veganshake, category: "Advanced & High-Performance Shakes" },
  { id: 13, name: "Coffee Mocha Protein Kick ☕", price: 105, image: coffee, category: "Advanced & High-Performance Shakes" },
  { id: 14, name: "Super Berry Recovery Shake 🍇", price: 130, image: berry, category: "Advanced & High-Performance Shakes" },
  { id: 15, name: "Double Chocolate Mass Gainer 🍫💪", price: 55, image: double, category: "Advanced & High-Performance Shakes" },
];


function ProteinShakes() {
  const { addToCart } = useContext(CartContext);
  const [userInput, setUserInput] = useState("");

  
  const filteredShakes = proteinShakes.filter((shake) =>
    shake.name.toLowerCase().includes(userInput.toLowerCase()) ||
    shake.price.toString().includes(userInput) 
  );
  
   
  


  const categories = [...new Set(filteredShakes.map((shake) => shake.category))];
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: "ease-in-out",
      once: true,     
    });
  }, []);

  return (
    <Container  className="py-5 mt-5 overall" data-aos="fade-down">
      <h1 className="text-center fw-bold mb-2 pro">Protein Shakes</h1>
      <p className="text-center text-muted fs-5"><i>Blend, Shake, and Energize!</i></p>


     
      <div className="text-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search Protein Shakes... 🔍"
          className="w-50 mx-auto new"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          />
      </div>

     
      {filteredShakes.length === 0 ? (
        <div className="text-center">
          <p className="text-danger fw-bold">No results found for "{userInput}"</p>
          <img src="https://www.fawnincorporation.in/wp-content/uploads/2023/11/not.jpg" alt="not found" width="250" />
        </div>
      ) : (
       
        categories.map((category) => (
          <div key={category}>
            <h3 className="mt-4 text-primary excite" data-aos="fade-right">{category}</h3>
            <Row>
              {filteredShakes
                .filter((shake) => shake.category === category)
                .map((shake) => (
                  <Col md={4} key={shake.id} className="mb-4">
                    <Card className="shadow square" data-aos="zoom-in-up">
                      <Card.Img variant="top" src={shake.image} alt={shake.name}  className="img-fluid mx-auto d-block"  style={{ width: "414px", height: "300px", objectFit: "cover"   }}/>
                      <Card.Body className="text-center">
                        <Card.Title>{shake.name}</Card.Title>
                        <Card.Text>₹{shake.price}</Card.Text>
                        <Button variant="info" onClick={() => addToCart(shake)} >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        ))
      )}
    </Container>
  );
}

export default ProteinShakes;
