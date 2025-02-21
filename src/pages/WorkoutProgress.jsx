// src/pages/WorkoutProgress.jsx
import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
const WorkoutProgress = () => {
  // Sample data for recent workouts
  const workoutData = [
    { date: "2025-02-01", workout: "Full Body HIIT", duration: "45 mins", calories: 500 },
    { date: "2025-02-03", workout: "Strength Training", duration: "60 mins", calories: 600 },
    { date: "2025-02-05", workout: "Cardio", duration: "30 mins", calories: 300 },
    { date: "2025-02-07", workout: "Yoga", duration: "40 mins", calories: 200 },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="mb-4 shadow">
            <Card.Header className="d-flex align-items-center">
              <FaDumbbell className="me-2" /> <strong>Workout Progress Overview</strong>
            </Card.Header>
            <Card.Body>
              <p>
                Below are your recent workouts. Track your duration, workout type, and calories burned.
              </p>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Workout Type</th>
                    <th>Duration</th>
                    <th>Calories Burned</th>
                  </tr>
                </thead>
                <tbody>
                  {workoutData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.workout}</td>
                      <td>{entry.duration}</td>
                      <td>{entry.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="primary" className="mt-3">
                View Detailed Analytics
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <h5>Progress Summary</h5>
              <p>
                Your overall workout performance is improving! Keep up the great work and consider
                increasing the intensity gradually. Consistency is key.
              </p>
              <Link to="/dashboard">
      <Button variant="secondary" className="mt-2">Back to Dashboard</Button>
    </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutProgress;
