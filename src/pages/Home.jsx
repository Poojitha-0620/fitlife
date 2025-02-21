
import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section1 text-center text-white d-flex align-items-center">
        <Container>
          {isAuthenticated ? (
            <>
              <h1 className="display-3 fw-bold">Welcome, {user.name}!</h1>
              <p className="fs-5">
                You are logged in to FitLife - your personalized fitness & diet planner.
              </p>
              <Button variant="warning" size="lg" onClick={logout} className="fw-bold mt-3">
                Logout
              </Button>
            </>
          ) : (
            <>
            
              <h1 className="display-3 fw-bold">Welcome to FitLife</h1>
              <p className="fs-5">
                Your Personalized Fitness & Diet Planner for a Healthy Lifestyle.
              </p>
              <Button variant="warning" size="lg" href="/workout" className="fw-bold mt-3">
                Get Started
              </Button>
            </>
          )}
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Why Choose FitLife?</h2>
          <Row className="g-4">
            <Col md={3}>
              <Card className="text-center p-3 shadow feature-card">
                <FaDumbbell size={40} className="mx-auto text-primary" />
                <Card.Body>
                  <Card.Title>Personalized Workouts</Card.Title>
                  <Card.Text>
                    Custom workout plans based on your fitness level.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center p-3 shadow feature-card">
                <FaAppleAlt size={40} className="mx-auto text-success" />
                <Card.Body>
                  <Card.Title>Healthy Diet Plans</Card.Title>
                  <Card.Text>
                    Nutrition-rich meal plans tailored for you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center p-3 shadow feature-card">
                <FaHeartbeat size={40} className="mx-auto text-danger" />
                <Card.Body>
                  <Card.Title>Track Your Progress</Card.Title>
                  <Card.Text>
                    Monitor your BMI & health improvements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center p-3 shadow feature-card">
                <FaStar size={40} className="mx-auto text-warning" />
                <Card.Body>
                  <Card.Title>Expert Guidance</Card.Title>
                  <Card.Text>
                    Get fitness & diet tips from professionals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">What Our Users Say</h2>
          <Row>
            <Col md={4}>
              <Card className="p-3 shadow">
                <Card.Body>
                  <Card.Text>
                    "FitLife transformed my fitness journey! The workouts and diet plans are easy to follow."
                  </Card.Text>
                  <h5 className="fw-bold">- Sarah M.</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 shadow">
                <Card.Body>
                  <Card.Text>
                    "I love the progress tracking feature. It keeps me motivated every day!"
                  </Card.Text>
                  <h5 className="fw-bold">- James P.</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 shadow">
                <Card.Body>
                  <Card.Text>
                    "Highly recommend FitLife! The personalized plans work wonders."
                  </Card.Text>
                  <h5 className="fw-bold">- Emily R.</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section text-center text-white py-5">
        <Container>
          <h2 className="fw-bold">Start Your Fitness Journey Today!</h2>
          <p>
            Join thousands of users achieving their health goals with FitLife.
          </p>
          {/* Only show the Join Now button if not logged in */}
          {!isAuthenticated && (
            <Link to="/login">
              <Button variant="light" size="lg" className="fw-bold">
                Join Now
              </Button>
            </Link>
          )}
        </Container>
      </section>
    </>
  );
}

export default Home;
