// src/components/Navbar.js
import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import logo from "../assets/logo.png";
import {
  FaHome,
  FaDumbbell,
  FaAppleAlt,
  FaCalculator,
  FaUserAlt,
  FaUserPlus,
  FaEnvelope,
  FaSignOutAlt,
  FaTachometerAlt,
  
} from "react-icons/fa";
import "../Styles/Navbar.css";

function NavigationBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img src={logo} alt="FitLife Logo" className="navbar-logo" />
          <span>FitLife </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/workout" className="nav-link-custom">
              <FaDumbbell className="me-1" /> Workout
            </Nav.Link>
            <Nav.Link as={Link} to="/diet" className="nav-link-custom">
              <FaAppleAlt className="me-1" /> Diet Plan
            </Nav.Link>
            <Nav.Link as={Link} to="/bmi" className="nav-link-custom">
              <FaCalculator className="me-1" /> BMI Calculator
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">
                  <FaTachometerAlt className="me-1" /> Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-link-custom">
                  <FaSignOutAlt className="me-1" /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-link-custom">
                  <FaUserAlt className="me-1" /> Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="nav-link-custom">
                  <FaUserPlus className="me-1" /> Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                  <FaEnvelope className="me-1" /> Contact
                </Nav.Link>
              </>
            )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
