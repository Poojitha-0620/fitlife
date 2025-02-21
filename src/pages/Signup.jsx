import React, { useContext } from "react";
import { Container, Row, Col, Form as BootstrapForm, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
 
import Sign from "../assets/signup.webp";

function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    message: "",
  };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/, "Invalid email format")
    .required("Required"),

    gender: Yup.string().required("Select your gender"),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%!?&])[A-Za-z\d@$%!?&]{6,}$/,
      "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character"
    )
    .required("Required"),
    message: Yup.string().required("Required"),
  });

  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    
    signup({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      gender: values.gender,
      message: values.message,
    });
    setSubmitting(false);
    navigate("/");
  };

  return (
    <Container fluid className="signup-page" style={{ paddingTop: "70px" }}>
      <Row className="min-vh-100">
        {/* Left Column: Signup Form */}
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center form-column"
        >
          <div className="signup-form-wrapper p-4 shadow bg-white mt-5">
            <h2 className="mb-4 text-center" mt-5>Sign Up</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* First Name */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>First Name</BootstrapForm.Label>
                    <Field
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter your first name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Last Name */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                    <Field
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter your last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Email */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Email</BootstrapForm.Label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Gender (Radio Buttons) */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Gender</BootstrapForm.Label>
                    <div className="d-flex gap-3">
                      <label>
                        <Field type="radio" name="gender" value="male" />
                        <span className="ms-1">Male</span>
                      </label>
                      <label>
                        <Field type="radio" name="gender" value="female" />
                        <span className="ms-1">Female</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Password */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Create a password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Message */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Message</BootstrapForm.Label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="3"
                      className="form-control"
                      placeholder="Tell us about yourself"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  {/* Submit Button */}
                  <Button type="submit" disabled={isSubmitting} className="w-100">
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>

        {/* Right Column: Image/Text */}
        <Col
          md={7}
          className="d-none d-md-flex align-items-center justify-content-center text-column"
        >
          <div className="text-center text-success px-4">
           
            <h2 className="text-danger mt-3">🏋️ Ready to Get Fit? Sign Up Now!</h2>
            <p className="text-success">Let's get connected.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
