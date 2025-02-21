// src/pages/Profile.jsx
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Set initial form values from user data
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setInitialValues({
        firstName: user.firstName || user.name || "",
        lastName: user.lastName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  // Validation schema using Yup with a case-insensitive email regex
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/i, "Invalid email format")
      .required("Email is required"),
  });

  const handleSave = (values, { setSubmitting }) => {
    updateUser(values);
    setEditing(false);
    setSuccessMessage("Profile updated successfully!");
    setSubmitting(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Profile Card */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={profile} alt="Profile" />
            <Card.Body className="text-center">
              <Card.Title>
                {user?.firstName || user?.name} {user?.lastName}
              </Card.Title>
              <Card.Text>{user?.email}</Card.Text>
              <Button variant="primary" onClick={() => setEditing(true)}>
                Edit Profile
              </Button>
              <Link to="/dashboard">
      <Button variant="secondary" className="ms-2">Back to Dashboard</Button>
    </Link>
           
            </Card.Body>
          </Card>
        </Col>

        {/* Edit Profile Form */}
        <Col md={8}>
          {editing && (
            <Card className="shadow p-3">
              <Card.Body>
                <h3>Edit Profile</h3>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSave}
                  validateOnMount={true}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form>
                      <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Field
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="Enter first name"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Field
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Enter last name"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Button
                        variant="success"
                        type="submit"
                        disabled={isSubmitting || !isValid}
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setEditing(false)}
                        className="ms-2"
                      >
                        Cancel
                      </Button>
                    </Form>
                  )}
                </Formik>
                {successMessage && (
                  <p className="text-success mt-3">{successMessage}</p>
                )}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
