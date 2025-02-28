import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import {FaHome,FaDumbbell,FaAppleAlt,FaCalculator,FaUserAlt,FaUserPlus,FaEnvelope,FaSignOutAlt,
  FaTachometerAlt,FaShoppingCart} from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import "../Styles/Navbar.css";

function NavigationBar() {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom me-auto" style={{marginLeft:"-50px"}}>
          <img src={logo} alt="FitLife Logo" className="navbar-logo" />
          <span >FitLife</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto" style={{marginRight:"-60px"}}>
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FaHome  /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/workout" className="nav-link-custom">
              <FaDumbbell  /> Workout
            </Nav.Link>
            <Nav.Link as={Link} to="/diet" className="nav-link-custom ">
              <FaAppleAlt  /> Diet Plan
            </Nav.Link>
            <Nav.Link as={Link} to="/bmi" className="nav-link-custom">
              <FaCalculator /> BMI 
            </Nav.Link>
         {/* Dropdown */}
            <NavDropdown className="nav-link-custom" title={<><GiMuscleUp  className="nav-icon" />Fitness Gear</>} id="nutrition-equipment-dropdown" >
              <NavDropdown.Item as={Link} to="/proteinshakes">Protein Shakes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/healthyfood">Healthy Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/workoutequipments">Workout Equipments</NavDropdown.Item>
            </NavDropdown>

            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">
                  <FaTachometerAlt  /> Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-link-custom">
                  <FaSignOutAlt/> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-link-custom">
                  <FaUserAlt  /> Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="nav-link-custom">
                  <FaUserPlus/> Signup
                </Nav.Link>
              </>
            )}

           
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              <FaEnvelope  /> Contact
            </Nav.Link>

           
            <Nav.Link className="nav-link-custom" as={Link} to="/cart">
          <FaShoppingCart />  <span className="badge bg-warning">{cart.length}</span>
        </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
