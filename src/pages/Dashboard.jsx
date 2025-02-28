import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle, FaDumbbell, FaAppleAlt, FaCalculator, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import "aos/dist/aos.css";


function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  // Dummy progress data
  const progressData = {
    workouts: 5,
    dietStatus: "On Track",
    bmi: 22.5,
  };

  // Dummy recent activities
  const recentActivities = [
    { date: "2025-02-01", activity: "Full Body HIIT", calories: 500 },
    { date: "2025-02-02", activity: "Strength Training", calories: 400 },
    { date: "2025-02-03", activity: "Yoga", calories: 200 },
  ];

  // Dummy upcoming goals
  const upcomingGoals = [
    { date: "2025-03-10", goal: "Increase bench press by 5kg" },
    { date: "2025-03-15", goal: "Lose 1kg" },
    { date: "2025-03-20", goal: "Try a new vegan recipe" },
  ];

  return (
    <Container fluid className="mt-5 pt-5">
      <Row>
       
        <Col md={3} className="bg-light p-3" data-aos="fade-right">
          <div className="d-flex flex-column align-items-center mb-3">
            <FaUserCircle size={80} className="text-primary" />
            <h4 className="mt-1">
              
                 Welcome, {user && (user.firstName || user.name) ? (user.firstName || user.name) : "Guest"}!
            </h4>
          </div>
          <ListGroup variant="flush">
            <ListGroup.Item as={Link} to="/dashboard/profile" action>
              Profile
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/dashboard/workout-progress" action>
              Workout Progress
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/dashboard/diet-plans" action>
              Diet Plans
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/dashboard/bmi-stats" action>
              BMI Stats
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/dashboard/settings" action>
              Settings
            </ListGroup.Item>
            
          </ListGroup>

          <Button variant="danger" onClick={logout} className="mt-3 w-100">
           Logout
          </Button>
        </Col>

        
        <Col md={9} data-aos="fade-up">
          
          <Card className="mb-4 shadow mt-3">
            <Card.Body className="text-center">
              <h1 >Welcome to Your Dashboard</h1>
              <p>Track your progress and achieve your fitness goals!</p>
            </Card.Body>
          </Card>




          
          <Row className="mb-4">
            <Col md={4} data-aos="fade-up">
              <Card className="shadow text-center">
                <Card.Body>
                  <FaDumbbell size={40} className="mb-2 text-primary" />
                  <Card.Title>Workout Progress</Card.Title>
                  <Card.Text>
                    {progressData.workouts} workouts this week
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    as={Link} 
                    to="/dashboard/workout-progress"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up">
              <Card className="shadow text-center">
                <Card.Body>
                  <FaAppleAlt size={40} className="mb-2 text-success" />
                  <Card.Title>Diet Plans</Card.Title>
                  <Card.Text>{progressData.dietStatus}</Card.Text>
                  <Button 
                    variant="outline-success" 
                    size="sm" 
                    as={Link} 
                    to="/dashboard/diet-plans"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up">
              <Card className="shadow text-center">
                <Card.Body>
                  <FaCalculator size={40} className="mb-2 text-warning" />
                  <Card.Title>BMI Stats</Card.Title>
                  <Card.Text>Your BMI is {progressData.bmi}</Card.Text>
                  <Button 
                    variant="outline-warning" 
                    size="sm" 
                    as={Link} 
                    to="/dashboard/bmi-stats"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          

          
          <Row className="mb-4" data-aos="fade-up">
            <Col>
              <Card className="shadow">
                <Card.Header className="d-flex align-items-center">
                  <FaChartLine className="me-2" /> Recent Activities
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Calories Burned</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivities.map((act, index) => (
                        <tr key={index}>
                          <td>{act.date}</td>
                          <td>{act.activity}</td>
                          <td>{act.calories}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         
          <Row data-aos="fade-up">
            <Col>
              <Card className="shadow">
                <Card.Header className="d-flex align-items-center">
                  <FaCalendarAlt className="me-2" /> Upcoming Goals
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    {upcomingGoals.map((goal, index) => (
                      <li key={index} className="mb-2">
                        <strong>{goal.date}:</strong> {goal.goal}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
