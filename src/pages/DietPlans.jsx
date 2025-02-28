import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaAppleAlt } from "react-icons/fa";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

const DietPlans = () => {
 
  const dietPlans = [
    {
      id: "1",
      name: "Keto Diet",
      meals: "Breakfast: Avocado toast; Lunch: Salad with chicken; Dinner: Grilled fish,follow these diet",
      calories: 1500,
    },
    {
      id: "2",
      name: "Mediterranean Diet",
      meals: "Breakfast: Yogurt with fruit; Lunch: Hummus & veggies; Dinner: Pasta with tomato sauce",
      calories: 1800,
    },
    {
      id: "3",
      name: "Vegan Diet",
      meals: "Breakfast: Smoothie bowl; Lunch: Quinoa salad; Dinner: Stir-fried tofu & veggies",
      calories: 1600,
    },
    {
      id: "4",
      name: "Paleo Diet",
      meals: "Breakfast: Eggs with spinach; Lunch: Grilled steak & vegetables; Dinner: Sweet potato & chicken",
      calories: 1700,
    },
  ];

  return (
    <Container className="mt-4 diet-container">
      <h1 className="mb-4">Diet Plans Overview</h1>
        <Link to="/dashboard">
            <Button variant="secondary" className="m-2">Back to Dashboard</Button>
          </Link>
      <Row>
        {dietPlans.map((plan) => (
          <Col md={6} key={plan.id} data-aos="fade-up">
            <Card className="mb-4 shadow">
              <Card.Header className="d-flex align-items-center">
                <FaAppleAlt size={30} className="me-2 text-success" />
                <strong>{plan.name}</strong>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Meal Plan:</strong> {plan.meals}
                </Card.Text>
                <Card.Text>
                  <strong>Daily Calories:</strong> {plan.calories}
                </Card.Text>
                <Link to={`/diet/${plan.id}`}>
                  <Button variant="outline-success" size="sm">
                     View Details
                  </Button>
                </Link>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col data-aos="fade-up">
          <Card className="shadow">
            <Card.Body>
              <h5>Diet Plan Summary</h5>
              <p>
                Your diet plan is designed to help you achieve a balanced and healthy lifestyle.
                Monitor your daily calorie intake and diversify your meals to meet your nutritional goals.
              </p>
              <Button variant="outline-success" size="sm">
                View Detailed Analytics
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DietPlans;
