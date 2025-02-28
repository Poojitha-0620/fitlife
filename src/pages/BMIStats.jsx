import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeartbeat, FaChartBar, FaLightbulb } from "react-icons/fa"; 
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const BMIStats = () => {
  // Dummy data for BMI statistics
  const bmiData = {
    currentBMI: 22.5,
    advice: "Maintain a balanced diet and regular exercise for optimal health. Hope you follow balanced diet",
    bmiHistory: [
      { date: "2025-02-01", bmi: 23.0 },
      { date: "2025-02-12", bmi: 22.8 },
      { date: "2025-02-24", bmi: 22.5 },
      { date: "2025-02-28", bmi: 22.3 },
    ],
  };

  return (
    <Container className="mt-4 bmi-container">
      <h1 className="mb-4">BMI Stats & Health Insights</h1>
      <Row>
        <Col md={6} data-aos="fade-up">
          <Card className="mb-4 shadow text-center">
            <Card.Body>
              <FaHeartbeat size={45} className="text-warning mb-3" />
              <Card.Title>Current BMI</Card.Title>
              <Card.Text style={{ fontSize: "2rem" }}>
                {bmiData.currentBMI}
              </Card.Text>
              <Button variant="outline-warning" size="sm">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} data-aos="fade-up">
          <Card className="mb-4 shadow text-center">
            <Card.Body>
              <FaLightbulb size={50} className="text-primary mb-2" /> 
              <Card.Title>Health Insights</Card.Title>
              <Card.Text>{bmiData.advice}</Card.Text>
              <Button variant="outline-warning" size="sm">Get Recommendations</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row data-aos="fade-up">
        <Col>
          <Card className="shadow">
            <Card.Header className="d-flex align-items-center">
              <FaChartBar className="me-2" />
              BMI History
            </Card.Header>
            <Card.Body>
              {bmiData.bmiHistory.map((entry, index) => (
                <div key={index} className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <span>{entry.date}</span>
                  <span>{entry.bmi}</span>
                </div>
              ))}
              <Button variant="outline-warning" size="sm">View Detailed Chart</Button>
              <Link to="/dashboard">
                <Button variant="secondary" className="ms-2">Back to Dashboard</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BMIStats;
