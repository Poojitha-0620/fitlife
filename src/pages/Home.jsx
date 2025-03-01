import React, { useContext,  useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import healthy from "../assets/healthy.jpg";
import balance from "../assets/balance.webp";
import fitness3 from "../assets/fitness3.jpg";
import contact from "../assets/contact.webp";
import success4 from  "../assets/success4.webp";

function Home() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();  
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <Carousel fade indicators controls className="hero-carousel" data-aos="fade-down">
          <Carousel.Item>
            <img className="d-block w-100 hero-img" src={hero} alt="Fitness Motivation" />
            <Carousel.Caption data-aos="zoom-in">
              <h1 className="display-3 fw-bold">Welcome to FitLife</h1>
              <p className="fs-5">Your Personalized Fitness & Diet Planner for a Healthy Lifestyle.</p>
              <Link to="/signup">
                <Button variant="warning" size="lg" className="fw-bold mt-3 glow-btn">Get Started</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 hero-img" src={balance} alt="Fitness Motivation" />
            <Carousel.Caption data-aos="zoom-in">
              <h1 className="display-3 fw-bold">Balance Your Mind & Body</h1>
              <p className="fs-5">Track your fitness journey with our progress monitoring tools.</p>
              <Link to="/login">
                <Button variant="warning" size="lg" className="fw-bold mt-3 glow-btn">Get Started</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item data-aos="zoom-in">
            <img
              className="d-block w-100 hero-img"
              src={healthy}
              alt="Healthy Eating"
            />
            <Carousel.Caption>
              <h1 className="display-3 fw-bold">Eat Healthy, Stay Strong</h1>
              <p className="fs-5">Explore our expert diet plans tailored just for you.</p>
              <Link to="/diet">
                <Button variant="warning" size="lg" className="fw-bold mt-3 glow-btn">Get Started</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

         

        </Carousel>
      ) : (
        <Carousel fade indicators controls className="hero-carousel" data-aos="fade-down">
          <Carousel.Item data-aos="fade-up">
            <img className="d-block w-100 hero-img" src={fitness3} alt="Stay Fit" />
            <Carousel.Caption  
              style={{
                position: "absolute", top: "5%", left: "50%", color: "black",
                transform: "translateX(-50%)", textAlign: "center", width: "100%",
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "space-between", height: "100%"
              }}
            >
              <div style={{ marginBottom: "auto" }}>
                <h1 className="display-3 fw-bold"> Welcome, <span style={{ fontStyle: "italic" }}>{user?.name || "User"}!</span></h1>
                <p className="fs-5">Manage your fitness journey in one place.</p>
               
                
              </div>
              <div style={{ marginTop: "auto", paddingBottom: "50px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Button variant="dark"  onClick={() => navigate('/memorygame')} className="memory-game-btn glow-btn" style={{padding:"10px",position:"relative",top:"7px",right:"10px"}}>
                  Play Workout Memory Game
                </Button>
                <Link to="/dashboard">
                  <Button variant="dark" size="lg" className="fw-bold mt-3 glow-btn">Go to Dashboard</Button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          
          <Carousel.Item>
              <img className="d-block w-100 hero-img" src={contact} alt="Set Goals" />
              <Carousel.Caption data-aos="zoom-in"
               style={{
                position: "absolute", top: "5%", left: "50%", color: "black",
                transform: "translateX(-50%)", textAlign: "center", width: "100%",
               height: "100%"
              }}>
                <h1 className="display-3 fw-bold">Have Questions? Get in Touch</h1>
                <p className="fs-5">We are here to help you on your fitness journey.</p>
                <Link to="/contact">
                  <Button variant="dark" size="lg" className="fw-bold mt-3 glow-btn">Contact Us</Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
              <img className="d-block w-100 hero-img" src={success4} alt="Achieve Success" />
              <Carousel.Caption data-aos="zoom-in" style={{
                position: "absolute", top: "1%", left: "50%", color: "black",
                transform: "translateX(-40%)", textAlign: "center", width: "100%",
               height: "100%"
              }}>
                <h1 className="display-3 fw-bold">Stay Committed & Achieve More</h1>
                <p className="fs-5">Your journey to success starts with consistency.</p>
                <Button variant="dark" size="lg" onClick={logout} className="fw-bold mt-1 glow-btn">
                  Logout
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
        

        </Carousel>
      )}

           
            <section className="features-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Why Choose FitLife?</h2>
          <Row className="g-4">
            {[
              { icon: <FaDumbbell size={40} className="text-primary glow-icon" />, title: "Personalized Workouts", text: "Custom workout plans based on your fitness level." },
              { icon: <FaAppleAlt size={40} className="text-success glow-icon" />, title: "Healthy Diet Plans", text: "Nutrition-rich meal plans tailored for you." },
              { icon: <FaHeartbeat size={40} className="text-danger glow-icon" />, title: "Track Your Progress", text: "Monitor your BMI & health improvements." },
              { icon: <FaStar size={40} className="text-warning glow-icon" />, title: "Expert Guidance", text: "Get fitness & diet tips from professionals." }
            ].map((feature, index) => (
              <Col md={3} key={index}>
                <Card className="text-center p-3 shadow feature-card animated-border" data-aos="flip-left">
                  {feature.icon}
                  <Card.Body >
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">What Our Users Say</h2>
          <Row>
            {[
              { text: `"FitLife transformed my fitness journey! The workouts, diet plans are easy to follow."`, author: "Sarah M." },
              { text: `"I love the progress tracking feature. It keeps me motivated every day!"`, author: "James P." },
              { text: `"Highly recommend FitLife! The personalized plans work wonders."`, author: "Emily R." }
            ].map((testimonial, index) => (
              <Col md={4} key={index}>
                <Card className="p-3 shadow animated-border" data-aos="fade-right" >
                  <Card.Body data-aos="fade-left">
                    <Card.Text>{testimonial.text}</Card.Text>
                    <h5 className="fw-bold">- {testimonial.author}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section className="cta-section text-center text-white py-5 bg-primary">
        <Container>
          <h2 className="fw-bold">Start Your Fitness Journey Today!</h2>
          <p>Join thousands of users achieving their health goals with FitLife.</p>
          {!isAuthenticated && (
            <Link to="/login">
              <Button variant="light" size="lg" className="fw-bold glow-btn">Join Now</Button>
            </Link>
          )}
        </Container>
      </section>
    </>
  );
}

export default Home;
