import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Footer =  () => {
  const { user } = useContext(AuthContext); 

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
         
          <Col xs={12} className="mb-3">
            <img src={logo} alt="FitLife Logo" style={{ height: "90px" }} />
            
          </Col>

          
          <Col xs={12} md={6} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
              <li className="mx-2"><Link to="/" className="text-light">Home</Link></li>
              <li className="mx-2"><Link to="/workout" className="text-light">Workout</Link></li>
              <li className="mx-2"><Link to="/dietplan" className="text-light">Diet Plan</Link></li>
              <li className="mx-2"><Link to="/bmi" className="text-light">BMI</Link></li>
              <li className="mx-2"><Link to="/proteinshakes" className="text-light">Protein Shakes</Link></li>
              <li className="mx-2"><Link to="/healthyfood" className="text-light">Healthy Food</Link></li>
              <li className="mx-2"><Link to="/workoutequipments" className="text-light">Workout Equipments</Link></li>
              <li className="mx-2"><Link to="/cart" className="text-light">Cart</Link></li>
              {!user ? (
                <>
                  <li className="mx-2"><Link to="/login" className="text-light">Login</Link></li>
                  <li className="mx-2"><Link to="/signup" className="text-light">Sign Up</Link></li>
                  <li className="mx-2"><Link to="/contact" className="text-light">Contact</Link></li>
                </>
              ) : (
                <>
                  <li className="mx-2"><Link to="/dashboard" className="text-light">Dashboard</Link></li>
                  <li className="mx-2"><Link to="/logout" className="text-light">Logout</Link></li>
                </>
              )}
            </ul>
          </Col>

         
          <Col xs={12} md={3} className="mb-3">
            <h5>Contact Us</h5>
            <p><FaPhone className="me-2" /> +91-987-654-321</p>
          </Col>

          
          <Col xs={12} md={3} className="mb-3">
            <h5>Follow Us</h5>
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
      </Container>
      <p className="mt-2 text-center">&copy; {new Date().getFullYear()} FitLife. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
