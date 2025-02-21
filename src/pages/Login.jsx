import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Form as BootstrapForm, Button, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string().matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/, "Invalid email format")
        .required("Required"),
     password: Yup.string()
       .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%!?&])[A-Za-z\d@$%!?&]{6,}$/,
         "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character"
       )
       .required("Required"),
   
  });

  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
   
    const userName = values.email.split("@")[0];
    login({ email: values.email, name: userName });
    setSubmitting(false);
    navigate("/");
  };

  return (
    <div className="login-page">
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-box p-4 shadow">
          <h2 className="text-center mb-4">Your Fitness Awaits — Log In Now!</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Email Field */}
                <BootstrapForm.Group className="mb-3 position-relative">
                  <FaUser className="field-icon" />
                  <Field
                    type="email"
                    name="email"
                    className="form-control pl-5"
                    placeholder="Username (Email)"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger mt-1" />
                </BootstrapForm.Group>

                {/* Password Field */}
                <BootstrapForm.Group className="mb-3 position-relative">
                  <FaLock className="field-icon" />
                  <Field
                    type="password"
                    name="password"
                    className="form-control pl-5"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-danger mt-1" />
                </BootstrapForm.Group>

                {/* Remember Me & Forgot Password */}
                <Row className="mb-3">
                  <Col xs={6} className="d-flex align-items-center">
                    <Field type="checkbox" name="rememberMe" id="rememberMe" className="me-1" />
                    <label htmlFor="rememberMe" className="mb-0 text-white">
                      Remember Me
                    </label>
                  </Col>
                  <Col xs={6} className="text-end">
                    <Link to="/forgot-password" className="forgot-link text-white">
                      Forgot Password?
                    </Link>
                  </Col>
                </Row>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
}

export default Login;
