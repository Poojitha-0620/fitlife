import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import dumbbells from "../assets/dumbbells.webp";
import tread from "../assets/tread.webp";
import mat from "../assets/mat.jpg";
import kettlebell from "../assets/kettlebell.jpg";
import band from "../assets/band.jpg";
import bike from "../assets/bike.webp";


const equipmentList = [
  { id: 1, name: "Dumbbells", price: 2000, image: dumbbells, category: "Weights & Strength" },
  { id: 2, name: "Treadmill", price: 15000, image: tread, category: "Cardio Equipment" },
  { id: 3, name: "Yoga Mat", price: 500, image: mat, category: "Yoga & Flexibility" },
  { id: 4, name: "Kettlebell", price: 1800, image: kettlebell, category: "Weights & Strength" },
  { id: 5, name: "Resistance Bands", price: 800, image: band, category: "Yoga & Flexibility" },
  { id: 6, name: "Exercise Bike", price: 12000, image: bike, category: "Cardio Equipment" },
];

const WorkoutEquipments = () => {
  const { addToCart } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

 
  const filteredEquipments = equipmentList.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    item.price.toString().includes(searchInput)
  );

  
  const categories = [...new Set(filteredEquipments.map((item) => item.category))];

  return (
    <Container className="py-5 mt-5" data-aos="fade-down">
      <h1 className="text-center fw-bold mb-2">Workout Equipments</h1>
      <p className="text-center text-muted fs-5"><i>Level Up Your Workouts! 💪</i></p>

      
      <div className="text-center mb-4">
        <Form.Control type="text" placeholder="Search Workout Equipments... 🔍" className="w-50 mx-auto" value={searchInput}  onChange={(e) => setSearchInput(e.target.value)}/>
      </div>

      
      {filteredEquipments.length === 0 ? (
        <div className="text-center">
          <p className="text-danger fw-bold">No results found for "{searchInput}"</p>
          <img src="https://www.fawnincorporation.in/wp-content/uploads/2023/11/not.jpg" alt="not found" width="250" />
        </div>
      ) : (
        
        categories.map((category) => (
          <div key={category}>
            <h3 className="mt-4 text-primary" data-aos="fade-right">{category}</h3>
            <Row>
              {filteredEquipments
                .filter((item) => item.category === category)
                .map((item) => (
                  <Col md={4} key={item.id} className="mb-4">
                    <Card className="shadow" data-aos="zoom-in-up">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        className="img-fluid mx-auto d-block"
                        style={{ width: "414px", height: "300px", objectFit: "cover" }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>₹{item.price}</Card.Text>
                        <Button variant="primary" onClick={() => addToCart(item)}>
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
};

export default WorkoutEquipments;
