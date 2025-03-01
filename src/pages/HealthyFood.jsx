import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import not from "../assets/not.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import  avacado from "../assets/avacado.jpg";
import kale from "../assets/kale.jpg";
import parfait from "../assets/parfait.jpg";
import spinach from "../assets/spinach.jpg";
import energy from "../assets/energy.jpg";
import chiaseed from "../assets/chiaseed.jpg";
import granola from "../assets/granola.jpg";
import chickpea from "../assets/chickpea.jpg";
import salmon from "../assets/salmon.jpg";
import brown from "../assets/brown.jpg";
import sweetpotato from "../assets/sweetpotato.jpg";
import lentil from "../assets/lentil.jpg";
import pesto from "../assets/pesto.jpg";
import stuffed from "../assets/stuffed.jpg";
import fruit from "../assets/fruit.jpg";


const healthyFoods = [
  //  Superfoods & Salads
  { id: 1, name: "Quinoa & Avocado Salad 🥗", price:100, image: avacado, category: "Superfoods & Salads" },
  { id: 2, name: "Kale & Chickpea Bowl 🥬", price: 150, image: kale, category: "Superfoods & Salads" },
  { id: 3, name: "Greek Yogurt Parfait 🍓", price: 180, image: parfait, category: "Superfoods & Salads" },
  { id: 4, name: "Spinach & Berry Smoothie 🫐", price: 60, image: spinach, category: "Superfoods & Salads" },

  //  High-Protein Snacks
  { id: 5, name: "Almond Butter Energy Balls 🌰", price: 80, image: energy, category: "High-Protein Snacks" },
  { id: 6, name: "Chia Seed Pudding 🍯", price: 90, image: chiaseed, category: "High-Protein Snacks" },
  { id: 7, name: "Protein Granola Bars 🍫", price: 120, image: granola, category: "High-Protein Snacks" },
  { id: 8, name: "Roasted Chickpeas Crunch 🌶", price: 70, image: chickpea, category: "High-Protein Snacks" },

  //  Nutritious Meals
  { id: 9, name: "Grilled Salmon & Veggies 🐟", price: 100, image: salmon, category: "Nutritious Meals" },
  { id: 10, name: "Brown Rice & Tofu Stir-fry 🍛", price: 200, image: brown, category: "Nutritious Meals" },
  { id: 11, name: "Sweet Potato & Black Bean Bowl 🍠", price: 105, image: sweetpotato, category: "Nutritious Meals" },
  { id: 12, name: "Lentil & Spinach Soup 🥣", price: 65, image: lentil, category: "Nutritious Meals" },
  { id: 13, name: "Zucchini Noodles with Pesto 🌿", price: 70, image: pesto, category: "Nutritious Meals" },
  { id: 14, name: "Stuffed Bell Peppers 🌶", price: 40, image: stuffed, category: "Nutritious Meals" },
  { id: 15, name: "Oatmeal & Fresh Fruits 🍎", price: 80, image: fruit, category: "Nutritious Meals" },
];

function HealthyFood() {
  const { addToCart } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState("");

  
  const filteredFoods = healthyFoods.filter((food) =>
    food.name.toLowerCase().includes(searchInput.toLowerCase()) || 
    food.price.toString().includes(searchInput)
  );

  
  const categories = [...new Set(healthyFoods.map((food) => food.category))];
   useEffect(() => {
      AOS.init({
        duration: 1000,  
        easing: "ease-in-out",
        once: true,     
      });
    }, []);

  return (
    <Container className="py-5 mt-5 overall" data-aos="fade-down">
      <h2 className="text-center fw-bold mb-4 mt-2 pro">Healthy Food</h2>
      <p className="text-center text-muted fs-5"><i>Nutritious, Delicious, and Full of Life!</i></p>

     
      <Form className="mb-4 text-center">
        <Form.Control
          type="text"
          placeholder="Search for healthy food... 🔍"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-50 mx-auto new"
        />
      </Form>

      {filteredFoods.length === 0 ? (
        <div className="text-center">
          <p className="text-danger fw-bold">No results found for "{searchInput}"</p>
          <img src={not} alt="Not found" width="200px" />
        </div>
      ) : (
        categories.map((category) => (
          <div key={category}>
            <h3 className="mt-4 text-primary excite" data-aos="fade-right">{category}</h3>
            <Row>
              {filteredFoods
                .filter((food) => food.category === category)
                .map((food) => (
                  <Col md={4} key={food.id} className="mb-4">
                    <Card className="shadow square"  data-aos="zoom-in-up">
                      <Card.Img variant="top" src={food.image} alt={food.name} className="healthfood"/>
                      <Card.Body className="text-center">
                        <Card.Title>{food.name}</Card.Title>
                        <Card.Text>₹{food.price}</Card.Text>
                        <Button variant="info" onClick={() => addToCart(food)}>
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        ))
      )}
    </Container>
  );
}

export default HealthyFood;
