// src/pages/DietPlanDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import ketoDiet from "../assets/ketoDiet.webp";
import med from "../assets/med.jpg";
import vegan from "../assets/vegan.jpg";
import Paleo from "../assets/Paleo.jpg";

const dietPlans = [
  {
    id: "1",
    name: "Keto Diet",
    description:
        "The Keto diet, short for the ketogenic diet, is a low-carbohydrate, high-fat diet that has gained popularity for its potential to aid in weight loss and improve overall health. By drastically reducing carbohydrate intake and replacing it with fat, the body enters a state called ketosis. In this state, the body starts burning fat for fuel instead of carbohydrates, leading to weight loss."+
        "The typical macronutrient ratio for the Keto diet is about 70-75% fat, 20-25% protein, and 5-10% carbohydrates. Foods commonly included in the Keto diet are meat, fish, eggs, dairy, nuts, seeds, and low-carb vegetables like leafy greens. Foods high in carbohydrates, such as bread, pasta, and sugary snacks, are strictly avoided."+
        "While the Keto diet has been praised for its effectiveness in weight management and promoting mental clarity, it may not be suitable for everyone. It is important to consult with a healthcare provider before starting the diet, as it can have side effects like the 'Keto flu' during the initial transition period."+
        "In conclusion, the Keto diet offers a structured approach to weight loss through carbohydrate restriction, but it requires careful planning and consideration of individual health needs.",
    image: ketoDiet,
  },
  {
    id: "2",
    name: "Mediterranean Diet",
    description:
      "The Mediterranean Diet: A Path to Health and Longevity" +
      " The Mediterranean diet is a heart-healthy eating pattern inspired by the traditional foods of countries bordering the Mediterranean Sea, such as Greece, Italy, and Spain."+ 
      "It emphasizes fresh fruits and vegetables, whole grains, legumes, nuts, olive oil, and lean proteins, particularly fish.One of the key benefits of the Mediterranean diet is its role in promoting heart health. The high intake of healthy fats, such as those found in olive oil and nuts, helps reduce bad cholesterol and inflammation."+ 
      "Additionally, the diet is rich in antioxidants and fiber, which support digestion and overall well-being.Studies have shown that this diet can lower the risk of chronic diseases like heart disease, diabetes, and certain cancers."+
      " It also promotes brain health, potentially reducing the risk of cognitive decline and Alzheimer’s disease.Unlike restrictive diets, the Mediterranean diet is sustainable and enjoyable, encouraging balance and moderation. With its focus on wholesome, natural foods, it offers a delicious and nutritious approach to long-term health.",
    image: med,
  },
  {
    id: "3",
    name: "Vegan Diet",
    description:
      "Vegan Diet: A Healthy and Ethical Choice"+
      "A vegan diet excludes all animal products, focusing on plant-based foods like fruits, vegetables, grains, legumes, nuts, and seeds. It offers numerous health benefits, such as reducing the risk of heart disease, diabetes, and certain cancers, due to its high fiber and antioxidant content."+
      "Veganism also supports animal welfare by avoiding the exploitation of animals for food. Additionally, it is environmentally friendly, as animal agriculture contributes to pollution, deforestation, and climate change."+
      "While a vegan diet is healthy, it's important to ensure proper intake of nutrients like B12, iron, and omega-3s, often through fortified foods or supplements. Overall, a well-balanced vegan diet can promote a healthier body and a more sustainable planet.",
    image: vegan,
  },
  {
    id: "4",
    name: "Paleo Diet",
    description:
      "Paleo Diet: Eating Like Our Ancestors"+
      "The Paleo diet is based on the premise of eating foods that our ancient ancestors would have consumed. This diet emphasizes whole, unprocessed foods and excludes grains, legumes, dairy, and processed foods."+
      "The Paleo diet includes lean meats, fish, fruits, vegetables, nuts, and seeds, which are rich in essential nutrients, healthy fats, and proteins. By focusing on these natural, nutrient-dense foods, the diet promotes better digestion, weight management, and overall health. The absence of grains and legumes means reduced intake of processed carbohydrates and sugars, which can help stabilize blood sugar levels and support heart health."+
       "In addition to health benefits, the Paleo diet encourages sustainable eating practices, avoiding processed and factory-farmed foods, which is better for the environment. While some critics point out the lack of dairy and grains, proponents argue that this diet mimics our evolutionary history and leads to a healthier lifestyle.",
    image: Paleo,
  },
];

function DietPlanDetails() {
  const { id } = useParams();
  const plan = dietPlans.find((plan) => plan.id === id);


  if (!plan) {
    return (
      <Container className="mt-4">
        <h2>Plan Not Found</h2>
        <p>The diet plan you are looking for does not exist.</p>
        <Link to="/diet">
          <Button variant="secondary">Back to Diet Plans</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="shadow" 
      style={{
        background: "radial-gradient(circle,#d4fc79, #96e6a1)",
        padding: "20px",
        borderRadius: "15px",
      }}>
        <Card.Img variant="top" src={plan.image} alt={plan.name} style={{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "auto",
    margin: "0 auto",
    borderRadius: "15px",

  }} />
        
        <Card.Body>
          <Card.Title>{plan.name}</Card.Title>
          <Card.Text>{plan.description}</Card.Text>
          <Link to="/diet">
            <Button variant="secondary">Back to Diet Plans</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DietPlanDetails;
