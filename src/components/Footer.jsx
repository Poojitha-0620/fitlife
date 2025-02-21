// src/components/Footer.js
import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";



  const Footer = React.forwardRef((props, ref) => {
   
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        {/* Branding */}
        <div className="mb-2">
          <img
            src={logo} // update with your logo path
            alt="FitLife Logo"
            style={{ height: "40px" }}
          />
        </div>
        <p>&copy; {new Date().getFullYear()} FitLife. All Rights Reserved.</p>
        {/* Social Media Links */}
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
});

export default Footer;
