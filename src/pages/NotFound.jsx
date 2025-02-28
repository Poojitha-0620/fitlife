import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png"

function NotFound() {
  return (
    <Container className="text-center " style={{marginTop:"110px",}}>
      
      <h1 >404 Not Found</h1>
      <img src={oops} alt="" style={{width:"340px"}}/>
      <p >The page you are looking <br /> for doesn't exist.</p>
      <Link to='/'><button style={{padding:'7px',background:"black",color:"white",borderRadius:"5px",marginBottom:"5px"}}>Go Back To Home Page</button></Link>
      
     
      
    </Container>
  );
}

export default NotFound;
