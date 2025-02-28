import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import hit from "../assets/hit.avif";
import strength from "../assets/strength.png";
import cardio from "../assets/cardio.jpg";
import medit from "../assets/medit.jpg";
import eat from "../assets/eat.webp";
import hydrate from "../assets/hydrate.webp";

function Workout() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  const contentRef = useRef(null);

 
  const workouts = [
    {
      id: 1,
      name: "Full Body HIIT",
      description: "A high-intensity workout for fat loss,endurance.",
      image: hit,
    },
    {
      id: 2,
      name: "Strength Training",
      description: "Improve muscle tone with strength exercises.",
      image: strength,
    },
    {
      id: 3,
      name: "Cardio & Nutrition",
      description: "Combine running with a heart-healthy diet.",
      image: cardio,
    },
    {
      id: 4,
      name: "Yoga & Mindfulness",
      description: "Enhance flexibility and mental wellness.",
      image: medit,
    },
    {
      id: 5,
      name: "Core & Healthy Eating",
      description: "Build strong abs and fuel your body wisely.",
      image: eat,
    },
    {
      id: 6,
      name: "Leg Day & Hydration",
      description: "Powerful leg workouts and hydration tips.",
      image: hydrate,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
     
      <div className="hero-section2 text-center" data-aos="fade-up">
        <div className="hero-content">
          <h1>FitLife</h1>
          <h3>Your Fitness and Diet Planner</h3>
          <p>Achieve your health goals with personalized workouts and meal plans.</p>
          <Button variant="light" size="lg" onClick={scrollToContent}>
            Get Started
          </Button>
        </div>
      </div>

      
      <Container ref={contentRef} className="mt-4">
       
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search workouts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>

        
        <Row className="g-4">
          {filteredWorkouts.length > 0 ? (
            filteredWorkouts.map((workout) => (
              <Col md={6} lg={4} key={workout.id} data-aos="fade-up">
                <Card className="p-3 shadow workout-card">
                  <Card.Img variant="top" src={workout.image} alt={workout.name} className="workout-card-img"/>
                  <Card.Body>
                    <Card.Title>{workout.name}</Card.Title>
                    <Card.Text>{workout.description}</Card.Text>
                    
                    <Link to={`/workout/${workout.id}`}>
                      <Button variant="primary">Start Plan</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No workouts found.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Workout;
