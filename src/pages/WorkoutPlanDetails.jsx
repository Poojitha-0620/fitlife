// src/pages/WorkoutPlanDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import hit from "../assets/hit.avif";
import strength from "../assets/strength.png";
import cardio from "../assets/cardio.jpg";
import medit from "../assets/medit.jpg";
import eat from "../assets/eat.webp";
import hydrate from "../assets/hydrate.webp";


const workouts = [
  {
    id: 1,
    name: "Full Body HIIT",
    description: (
        <div>
          <p>Full Body HIIT (High-Intensity Interval Training)</p>
          <p>Full Body HIIT is a dynamic and efficient workout regimen that targets multiple muscle groups in a short period. The workout alternates between short bursts of intense exercises and brief recovery periods. The key benefit of Full Body HIIT is its ability to burn a large number of calories in a relatively short time, making it ideal for individuals looking to lose fat, build muscle, and improve cardiovascular fitness.</p>
          <p><strong>What It Includes:</strong></p>
          <p>A typical Full Body HIIT workout combines various exercises such as squats, push-ups, burpees, jumping jacks, and lunges, engaging both the upper and lower body. These exercises are performed at maximum intensity for about 20 to 45 seconds, followed by rest periods of 10 to 30 seconds, depending on the specific training protocol.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li><strong>Efficient Calorie Burn:</strong> Full Body HIIT accelerates metabolism, allowing for higher calorie burn even after the workout.</li>
            <li><strong>Improved Endurance:</strong> The constant alternation between high intensity and rest helps improve stamina and cardiovascular health.</li>
            <li><strong>Time-Saving:</strong> HIIT is known for being short and effective, making it ideal for busy schedules.</li>
            <li><strong>Muscle Toning:</strong> Engaging multiple muscle groups in a single session helps tone and strengthen the entire body.</li>
          </ul>
          <p>This workout method is scalable to different fitness levels, requiring minimal equipment, and is particularly useful for individuals who want maximum results in a short period.</p>
        </div>
      ),
      image: hit,
  },
  {
    id: 2,
    name: "Strength Training",
    description: (
        <div>
          <p><strong>Strength Training</strong></p>
          <p>Strength training, also known as resistance training, involves using resistance to build muscle strength and endurance. This type of training engages various muscle groups, helping to improve overall strength, flexibility, and muscle tone. The resistance can come from free weights, machines, resistance bands, or bodyweight exercises.</p>
          <p><strong>What It Includes:</strong></p>
          <p>Strength training exercises include movements such as squats, deadlifts, bench presses, lunges, rows, and overhead presses. These exercises target different muscle groups and are typically performed in sets and reps, focusing on progressive overload (gradually increasing weight or resistance over time) to build strength.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li><strong>Increased Muscle Mass:</strong> Strength training helps increase muscle mass, leading to a more toned and defined physique.</li>
            <li><strong>Boosted Metabolism:</strong> Building muscle increases your resting metabolic rate, which helps in burning more calories even when at rest.</li>
            <li><strong>Improved Bone Health:</strong> Regular strength training can enhance bone density and reduce the risk of osteoporosis.</li>
            <li><strong>Enhanced Functional Strength:</strong> Strength training improves overall physical performance, making daily tasks easier and reducing injury risks.</li>
          </ul>
          <p>Strength training can be adapted to all fitness levels, from beginners to advanced athletes. Whether you're lifting weights, using resistance bands, or performing bodyweight exercises, strength training is a vital component of any fitness routine.</p>
        </div>
      ),
      image: strength,
  },
  {
    id: 3,
    name: "Cardio & Nutrition",
    description: (
        <div>
       
          <p>Cardio exercises, also known as aerobic exercises, involve activities that increase the heart rate and improve the efficiency of the cardiovascular system. These exercises include running, cycling, swimming, dancing, and other rhythmic activities that engage large muscle groups. Combined with proper nutrition, cardio can help improve endurance, heart health, and overall fitness.</p>
          <p><strong>What It Includes:</strong></p>
          <p>Cardio workouts can vary in intensity, from moderate exercises like brisk walking to high-intensity interval training (HIIT). It is recommended to engage in at least 150 minutes of moderate-intensity cardio or 75 minutes of vigorous-intensity cardio per week. Nutrition plays a crucial role in fueling the body for cardio activities and aiding in recovery.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li><strong>Improved Cardiovascular Health:</strong> Regular cardio exercises strengthen the heart, improve circulation, and reduce the risk of heart disease.</li>
            <li><strong>Weight Management:</strong> Cardio helps burn calories and fat, making it a key component of any weight loss or weight maintenance plan.</li>
            <li><strong>Boosted Endurance:</strong> Consistent cardio workouts increase stamina and endurance, making physical activities feel easier over time.</li>
            <li><strong>Enhanced Mental Health:</strong> Cardio exercises are known to release endorphins, helping to reduce stress, anxiety, and depression.</li>
          </ul>
          <p><strong>Nutrition for Cardio:</strong></p>
          <p>A balanced diet is essential for maximizing the benefits of cardio exercise. Carbohydrates provide the necessary energy for intense workouts, while protein aids in muscle recovery. Healthy fats, vitamins, and minerals also play a role in maintaining energy levels and supporting overall health. Proper hydration is crucial, as it helps maintain performance and prevent dehydration during cardio sessions.</p>
          <p>For optimal results, combine regular cardio exercise with a nutrient-rich diet and a consistent sleep schedule to enhance performance and recovery.</p>
        </div>
      ),
      image: cardio,
  },
  {
    id: 4,
    name: "Yoga & Mindfulness",
    description: (
        <div>
          <p>Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to enhance flexibility, strength, and mental clarity. Mindfulness, a key element of yoga, involves being fully present in the moment, focusing on your breath and body, and cultivating a non-judgmental awareness of your thoughts and feelings.</p>
          <p><strong>What It Includes:</strong></p>
          <p>Yoga includes a variety of physical postures (asanas), which can range from gentle stretches to more advanced poses. Breathing exercises (pranayama) are incorporated to help control energy flow and reduce stress. Meditation and mindfulness practices in yoga focus on achieving a calm and centered mind, improving emotional balance, and reducing mental clutter.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li><strong>Improved Flexibility & Strength:</strong> Regular yoga practice enhances flexibility, builds muscle strength, and improves posture.</li>
            <li><strong>Enhanced Mental Clarity:</strong> The focus on breathing and mindfulness helps improve concentration, mental clarity, and emotional resilience.</li>
            <li><strong>Better Sleep:</strong> Mindfulness and yoga practices, particularly before bed, promote a relaxed state, making it easier to fall asleep and enjoy restorative rest.</li>
            <li><strong>Improved Emotional Well-being:</strong> Mindfulness allows for non-judgmental observation of emotions, fostering emotional balance, better coping with challenging situations.</li>
          </ul>
          <p><strong>Yoga & Nutrition:</strong></p>
          <p>Yoga practitioners often focus on a balanced, healthy diet to support their practice. Consuming fresh, plant-based foods that are rich in vitamins, minerals, and antioxidants helps to nourish the body and enhance physical performance. Hydration is also key in maintaining energy and flexibility during yoga sessions. Additionally, mindfulness extends to food choices, encouraging a balanced and conscious approach to eating.</p>
          <p>Incorporating mindfulness into daily life can extend beyond yoga, helping individuals develop a calmer, more grounded approach to everyday challenges and interactions.</p>
        </div>
      ),
      image: medit,
  },
  {
    id: 5,
    name: "Core & Healthy Eating",
    description: (
        <div>
          <p>Core training involves exercises designed to strengthen the muscles in your abdomen, lower back, and pelvis. A strong core is crucial for maintaining good posture, supporting proper body mechanics, and preventing injuries. It plays a key role in balance and stability during physical activities.</p>
          <p><strong>What It Includes:</strong></p>
          <p>Core exercises target key muscles such as the rectus abdominis, obliques, and lower back muscles. Examples of core exercises include planks, crunches, leg raises, Russian twists, and stability ball exercises. These exercises help to improve muscle endurance, stability, and coordination in the abdominal region and the entire trunk of the body.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li><strong>Improved Posture:</strong> Strengthening the core helps maintain proper spinal alignment, leading to better posture throughout daily activities.</li>
            <li><strong>Enhanced Athletic Performance:</strong> Athletes benefit from a strong core as it provides a solid foundation for explosive movements and better control during physical activities.</li>
            <li><strong>Improved Functional Strength:</strong> A strong core supports functional strength, which translates into better performance in everyday tasks like lifting, bending, or twisting.</li>
          </ul>
          <p><strong>Healthy Eating for Core Health:</strong></p>
          <p>Eating a balanced diet is essential to fuel the body for optimal performance, including maintaining a strong core. A healthy eating plan should include:</p>
          <ul>
            <li><strong>Lean Proteins:</strong> Sources such as chicken, fish, tofu, and legumes support muscle growth and repair.</li>
            <li><strong>Healthy Fats:</strong> Avocados, nuts, seeds, and olive oil are important for reducing inflammation and supporting overall health.</li>
            <li><strong>Hydration:</strong> Staying hydrated is vital for digestion, muscle function, and overall well-being.</li>
          </ul>
          <p>A combination of core strengthening exercises and a nutritious diet can lead to a stronger, more resilient body, improving both physical fitness and overall health.</p>
        </div>
      ),
      image: eat,
  },
  {
    id: 6,
    name: "Leg Day & Hydration",
    description: (
        <div>
          <p><strong>Leg Day</strong> is a dedicated workout session focusing on strengthening and developing the muscles in your lower body. A solid leg workout not only builds muscle but also enhances overall athletic performance, stability, and balance.</p>
          <p><strong>What It Includes:</strong></p>
          <p>Leg day exercises primarily target muscles like the quadriceps, hamstrings, glutes, and calves. Some key exercises include:</p>
          <ul>
            <li><strong>Squats:</strong> A compound movement that works the entire lower body, including the glutes, quadriceps, and hamstrings.</li>
            
            <li><strong>Calf Raises:</strong> Isolates the calves for better lower leg development.</li>
          </ul>
          <p><strong>Benefits of Leg Day:</strong></p>
          <ul>
            <li><strong>Strengthens Major Muscle Groups:</strong> Building muscle in the legs contributes to overall strength and performance.</li>
            <li><strong>Improved Balance and Stability:</strong> Stronger legs provide better balance and coordination for other exercises and daily activities.</li>
            <li><strong>Enhanced Athletic Performance:</strong> Leg day is key for improving running speed, jumping ability, and overall power in sports.</li>
          </ul>
      
         
          <p><strong>Hydration Tips for Leg Day:</strong></p>
          <ul>
            <li><strong>Drink water regularly:</strong> Ensure you’re drinking enough water before, during, and after your workout. A general guideline is to drink 16-20 oz of water 2-3 hours before exercising and 8 oz every 20 minutes during the workout.</li>
            <li><strong>Electrolyte Balance:</strong> Consider drinking an electrolyte-rich beverage if you're doing intense leg exercises to replace lost electrolytes.</li>
            <li><strong>Post-Workout Hydration:</strong> After leg day, continue drinking water to aid muscle recovery and help reduce fatigue and soreness.</li>
          </ul>
          <p>Combining intense leg workouts with proper hydration ensures maximum muscle growth, stamina, and faster recovery. So, don’t skip hydration, especially on leg day!</p>
        </div>
      ),
      image: hydrate,
  },
];

function WorkoutPlanDetails() {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === parseInt(id));

  if (!workout) {
    return (
      <Container className="mt-4">
        <h2>Plan Not Found</h2>
        <p>The workout plan you are looking for does not exist.</p>
        <Link to="/workout">
          <Button variant="secondary">Back to Workouts</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="shadow"   style={{backgroundImage: `url(${workout.image})`,backgroundSize: "cover", backgroundPosition: "center",color: "white",
          height: "100vh",
          padding: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffe0",
          position: "relative",
        }}>
            <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            position: "absolute",
            top:0,
            left:0,
            right: 0,
            bottom: 0,
            padding: "20px",
            borderRadius: "10px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: -1,
          }}
        ></div>
        
        <Card.Body>
          <Card.Title>{workout.name}</Card.Title>
          <Card.Text>{workout.description}</Card.Text>
          <Link to="/workout">
            <Button variant="secondary">Back to Workouts</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default WorkoutPlanDetails;
