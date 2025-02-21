import React from "react";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1>404 Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
    </Container>
  );
}

export default NotFound;
