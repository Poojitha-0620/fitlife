import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


import { FaCalculator, FaWeight, FaRulerVertical, FaInfoCircle, FaAppleAlt } from "react-icons/fa";

function BMI() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State for BMI calculator inputs and results
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  // Function to calculate BMI and set appropriate message
  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    }
  };

  // Data for BMI categories with icons and advice
  const bmiCategories = [
    {
      category: "Underweight",
      range: "Less than 18.5",
      advice: "Consider consulting a nutritionist to gain weight healthily.",
      icon: <FaInfoCircle className="text-info" />,
    },
    {
      category: "Normal weight",
      range: "18.5 - 24.9",
      advice: "Great! Maintain your balanced diet and exercise.",
      icon: <FaInfoCircle className="text-success" />,
    },
    {
      category: "Overweight",
      range: "25 - 29.9",
      advice: "A combination of diet and exercise may help improve your health.",
      icon: <FaInfoCircle className="text-warning" />,
    },
    {
      category: "Obesity",
      range: "30 and above",
      advice: "Consult with a healthcare provider for guidance.",
      icon: <FaInfoCircle className="text-danger" />,
    },
  ];

  // Data for additional health tips
  const healthTips = [
    {
      tip: "Stay Hydrated",
      detail: "Drink plenty of water throughout the day.",
      icon: <FaAppleAlt className="text-primary" />,
    },
    {
      tip: "Regular Exercise",
      detail: "Aim for at least 150 minutes of moderate exercise per week.",
      icon: <FaAppleAlt className="text-primary" />,
    },
    {
      tip: "Balanced Diet",
      detail: "Include a variety of fruits, vegetables, and whole grains in your meals.",
      icon: <FaAppleAlt className="text-primary" />,
    },
  ];

  return (
    <>
     
      <section
        className="bmi-hero text-center text-white d-flex align-items-center"
        data-aos="fade-up"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(240, 196, 248), rgb(142, 25, 239), rgb(240, 196, 248), rgb(142, 25, 239), rgb(240, 196, 248), rgb(142, 25, 239), rgb(240, 196, 248), rgb(142, 25, 239))",
          backgroundrepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 100px",
          height: "100vh",
          paddingBlockStart:"100px",
            
        }}
      >
        <div style={{ height: '100%' }} />
        <Container>
          <h1 className="display-4 fw-bold">BMI Calculator</h1>
          <p className="fs-5">Check your Body Mass Index and get personalized health insights.</p>
        </Container>
      </section>

      
      <Container className="my-5" data-aos="fade-up">
        <Form onSubmit={calculateBMI}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>
                  <FaWeight className="me-2" /> Weight (kg)
                </Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight in kg"
                  className="none"  />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formHeight">
                <Form.Label>
                  <FaRulerVertical className="me-2" /> Height (cm)
                </Form.Label>
                <Form.Control
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height in cm"
                  className="none" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="d-flex align-items-center">
            <FaCalculator className="me-2" /> Calculate BMI
          </Button>
        </Form>

        {bmi && (
          <Alert variant="info" className="mt-4" data-aos="fade-up">
            Your BMI is: <strong>{bmi}</strong> ({message})
          </Alert>
        )}
      </Container>

      
      <Container className="my-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4">BMI Categories</h2>
        <Row className="g-4">
          {bmiCategories.map((item, index) => (
            <Col md={3} key={index}>
              <Card className="shadow h-100  animated-border">
                <Card.Body className="text-center">
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <Card.Title>{item.category}</Card.Title>
                  <Card.Text>{item.range}</Card.Text>
                  <Card.Text>{item.advice}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     
      <Container className="my-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4">Health Tips</h2>
        <Row className="g-4">
          {healthTips.map((tip, index) => (
            <Col md={4} key={index}>
              <Card className="shadow h-100 animated-border">
                <Card.Body className="text-center">
                  <div style={{ fontSize: "2rem" }}>{tip.icon}</div>
                  <Card.Title>{tip.tip}</Card.Title>
                  <Card.Text>{tip.detail}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default BMI;
