import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDumbbell, FaHeartbeat, FaRunning, FaMountain, FaBicycle, FaUtensils, FaCoffee, FaAppleAlt, FaCookieBite, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";
import { GiMeditation } from "react-icons/gi";
import apple1 from "../assets/apple1.jpg";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  return (
    <footer className=" text-light py-4 back">
      <Container >
        {/* Top Block */}
        <Row className="text-center">
        <Col xs={12} className="mb-1">
            <img src={logo} alt="FitLife Logo" style={{ height: "90px" }} />
            
          </Col>

          {/* Exercise Programs */}
          <Col xs={12} md={3} className="mb-3">
            <h5 className="fs-3">Exercise Programs</h5>
            <ul className="list-unstyled " style={{fontSize:"20px"}}>
              <li className="hover-effect "><FaDumbbell className="me-2" /> Strength</li>
              <li className="hover-effect"><FaHeartbeat className="me-2" /> Cardio</li>
              <li className="hover-effect"><GiMeditation  className="me-2" /> Flexibility</li>
              <li className="hover-effect"><FaRunning className="me-2" /> HIIT</li>
              <li className="hover-effect"><FaMountain className="me-2" /> Endurance</li>
              <li className="hover-effect"><FaBicycle className="me-2" /> Functional</li>
            </ul>
          </Col>

          {/* Nutritional Plans */}
          <Col xs={12} md={3} className="mb-3">
            <h5 className="fs-3">Nutritional Plans</h5>
            <ul className="list-unstyled" style={{fontSize:"20px"}}>
              <li className="hover-effect"><FaCoffee className="me-2" /> Breakfast</li>
              <li className="hover-effect"><FaUtensils className="me-2" /> Lunch</li>
              <li className="hover-effect"><FaAppleAlt className="me-2" /> Dinner</li>
              <li className="hover-effect"><FaCookieBite className="me-2" /> Snacks</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={3} className="mb-3">
            <h5   className="fs-3">Quick Links</h5>
            <ul className="list-unstyled" style={{fontSize:"20px"}}>
              <li ><Link to="/" className="text-light quick-link">Home</Link></li>
              <li><Link to="/workout" className="text-light quick-link">Workout</Link></li>
              <li><Link to="/dietplan" className="text-light quick-link">Diet Plan</Link></li>
              <li><Link to="/bmi" className="text-light quick-link">BMI</Link></li>
              <li><Link to="/cart" className="text-light quick-link">Cart</Link></li>
              {!user ? (
                <>
                  <li><Link to="/login" className="text-light quick-link">Login</Link></li>
                  <li><Link to="/signup" className="text-light quick-link">Sign Up</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/dashboard" className="text-light quick-link">Dashboard</Link></li>
                  <li><Link to="/logout" className="text-light quick-link">Logout</Link></li>
                </>
              )}
            </ul>
          </Col>

          {/* Contact & Follow Us */}
          <Col xs={12} md={3} className="mb-3">
            <h5 className="fs-3">Contact Us</h5>
            <p className="hover-effect"><FaPhone className="me-2 hover-effect" /> +91-987-654-321</p>
            <h5 className="fs-3">Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Down Block */}
        <Row className="text-center mt-2">
          {/* Stay Connected */}
          <Col xs={12} className="mb-3">
            <h5 className="fs-3" style={{fontSize:"20px"}}>Stay Connected</h5>
            <p><FaEnvelope className="me-2" /> Subscribe to our newsletter</p>
            <Form>
              <Form.Group className="d-flex justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="me-2"
                  style={{ maxWidth: "300px" }}
                />
                <Button variant="info" className="mb-2" type="submit">Join</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Copyrights */}
        <p className="mt-1 text-center copy">&copy; {new Date().getFullYear()} FitLife. All Rights Reserved.</p>
      </Container>
      <style jsx>{`
       .back{
          background: url(${apple1}) no-repeat center center/cover;
          border-top: 5px solid #28a745;
          padding-bottom: 10px;
          width:100vw;
        }
        .hover-effect {
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }
        .hover-effect:hover {
          color: #28a745;
          text-decoration:underline;
        }
        .quick-link {
          text-decoration: none;
          transition: text-decoration 0.3s ease-in-out;
        }
        .quick-link:hover {
          text-decoration: underline;
          color: #28a745;
        }
          
        .social-link {
          color: #ddd;
          transition: transform 0.3s ease-in-out;
        }
        .social-link:hover {
          transform: scale(1.1);
          color: #28a745;
        }
          .copy:hover{
          color:#e0204d;
          cursor:pointer;
          }
      `}</style>
    </footer>
  );
};

export default Footer;
