import React, { useRef, useEffect,useState } from "react";
import { Container, Row, Col, Card, Button, ProgressBar  } from "react-bootstrap";
import { Link } from "react-router-dom";
import diet from "../assets/diet.webp";
import ketoDiet from "../assets/ketoDiet.webp";
import med from "../assets/med.jpg";
import vegan from "../assets/vegan.jpg";
import Paleo from "../assets/Paleo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiFruitBowl } from "react-icons/gi";

function Diet() {
  const [flipped, setFlipped] = useState({});
  const [selectedHabit, setSelectedHabit] = useState(null);
 const dietPlansRef = useRef(null);

   useEffect(() => {
      AOS.init({
        duration: 3000,  
        easing: "ease-in-out",
        once: true,      
      });
    }, []);

  // Sample diet plans data
  const dietPlans = [
    {
      id: "1",
      name: "Keto Diet",
      description: "A low-carb, high-fat diet focusing on ketosis for weight loss.",
      image: ketoDiet,
    },
    {
      id: "2",
      name: "Mediterranean Diet",
      description: "Emphasizes fruits, vegetables, whole grains, and healthy fats.",
      image: med,
    },
    {
      id: "3",
      name: "Vegan Diet",
      description: "Excludes all animal products, focusing on plant-based foods.",
      image: vegan,
    },
    {
      id: "4",
      name: "Paleo Diet",
      description: "Based on foods presumed to be eaten by early humans.",
      image: Paleo,
    },
  ];

  // Sample daily food habits data
  const foodHabits = [
    {
      id: 1,
      title: "Stay Hydrated",
      description:
        "Drink at least 8 glasses of water a day to maintain proper hydration.",
        calories: 0
    },
    {
      id: 2,
      title: "Eat More Fruits & Veggies",
      description:
        "Aim for 5 servings of colorful fruits and vegetables each day.",
        calories: 200 
    },
    {
      id: 3,
      title: "Limit Processed Foods",
      description:
        "Choose whole grains, lean proteins, and fresh produce over processed snacks.",
        calories: 150
    },
    {
      id: 4,
      title: "Practice Portion Control",
      description:
        "Use smaller plates and mindful eating to avoid overeating.",
        calories: 100
    },
  ];

  // Function to scroll down to the diet plans section
  const scrollToDietPlans = () => {
    if (dietPlansRef.current) {
      dietPlansRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <>
      
      <section data-aos="fade-down"
        className="diet-hero d-flex align-items-start text-white"
        style={{
          background: `url(${diet}) center/cover no-repeat`,
          backgroundPosition: "center 100px",
          height: "220vh",
        }}
      >
        <Container className="text-center pt-2"  >
          <h1 className="display-4 fw-bold text-dark">
            Healthy Eating for a Better Life
          </h1>
          <p className="fs-5 text-dark">
            Discover the perfect diet plan and daily habits for your well-being.
          </p>
          <Button variant="warning" size="lg" onClick={scrollToDietPlans} className="glow-btn">
            Explore Now
          </Button>
        </Container>
        <img src={<GiFruitBowl />} alt="Fruit" className="floating-icon" style={{ top: "20%", left: "10%" }} />

      </section>

      
      <section   ref={dietPlansRef} className="py-5" >
        <Container>
          <h2 className="text-center fw-bold mb-4">Recommended Diet Plans</h2>
          <Row className="g-4">
            {dietPlans.map((plan) => (
              <Col md={3} key={plan.id}>
              
                <Card className="shadow " data-aos="zoom-in-up">
                  <Card.Img variant="top" src={plan.image} alt={plan.name} style={{ width: "100%",  height: "200px", objectFit: "cover", borderRadius: "10px",  }} />
                  <Card.Body>
                    <Card.Title>{plan.name}</Card.Title>
                    <Card.Text>{plan.description}</Card.Text>
                    <Link to={`/diet/${plan.id}`}>
                      <Button variant="primary" className="glow-button">View Plan</Button>
                    </Link>
                  </Card.Body>
                </Card>
     
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     
      <section className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Daily Food Habits</h2>
        <Row className="g-4">
          {foodHabits.map((habit) => (
            <Col md={6} key={habit.id}>
              <div
                className={`flip-card ${flipped[habit.id] ? "flipped" : ""}`}
                onMouseEnter={() => toggleFlip(habit.id, true)}  // 🔥 Flip on hover
                onMouseLeave={() => toggleFlip(habit.id, false)} // 🔥 Unflip when cursor leaves
                onTouchStart={() => toggleFlip(habit.id, true)}  // 📱 Flip on touch (mobile)
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card.Body>
                      <Card.Title>{habit.title}</Card.Title>
                      <Card.Text>{habit.description}</Card.Text>
                    </Card.Body>
                  </div>
                  <div className="flip-card-back">
                    <Card.Body>
                      <Card.Title>Calories Intake</Card.Title>
                      <ProgressBar now={(habit.calories || 0) / 3} label={`${habit.calories || 0} kcal`} animated className={`custom-progress ${habit.calories === 0 ? "zero-calories" : ""}`}
  style={{
    color: habit.calories ? "white" : "black", 
  }}/>
                    </Card.Body>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Diet;
