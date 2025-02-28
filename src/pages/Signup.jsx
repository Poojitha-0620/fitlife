import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Form as BootstrapForm, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navigate function:", navigate);
  }, []);
  

    useEffect(() => {
          AOS.init({
            duration: 4000,  
            easing: "ease-in-out",
            once: true,      
          });
        }, []);

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "", 
    message: "",
  };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/, "Invalid email format")
    .required("Required"),

    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%!?&])[A-Za-z\d@$%!?&]{6,}$/,
      "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character"
    )
    .required("Required"),
    message: Yup.string().required("Required"),
    
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") 
      .required("Required"),
    


   
  });

  // Handle form submission
  const onSubmit = async(values, { setSubmitting }) => {
    try {
      await signup({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    });
    navigate("/"); 
  } catch (error) {
    console.error("Signup failed:", error);
  }
  setSubmitting(false);
};

  return (
    <Container fluid className="signup-page" style={{ paddingTop: "70px" }}>
      <Row className="min-vh-100">
        {/* Left Column: Signup Form */}
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center form-column"
        >
          <div className="signup-form-wrapper p-4 shadow bg-white mt-5" data-aos="fade-right" data-aos-offset="300"
              data-aos-easing="ease-in-sine">
            <h2 className="mb-4 text-center">Sign Up</h2>
            <Formik
              initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form data-aos="fade-right">
                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>First Name</BootstrapForm.Label>
                    <Field type="text" name="firstName" className="form-control" placeholder="Enter your first name"/>
                    <ErrorMessage name="firstName" component="div" className="text-danger"/>
                  </BootstrapForm.Group>

                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                    <Field  type="text"  name="lastName"  className="form-control"  placeholder="Enter your last name" />
                    <ErrorMessage  name="lastName" component="div"  className="text-danger" />
                  </BootstrapForm.Group>

                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Email</BootstrapForm.Label>
                    <Field type="email" name="email" className="form-control" placeholder="Enter your email"/>
                    <ErrorMessage name="email" component="div" className="text-danger"/>
                  </BootstrapForm.Group>
                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field  type="password"  name="password"  className="form-control"  placeholder="Create a password"  />
                    <ErrorMessage  name="password" component="div" className="text-danger"/> 
                  </BootstrapForm.Group>
                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                    <Field type="password" name="password2" className="form-control" placeholder="Confirm password" />
                    <ErrorMessage name="password2" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Message</BootstrapForm.Label>
                    <Field  as="textarea"  name="message"  rows="3"  className="form-control"  placeholder="Tell us about yourself" />
                    <ErrorMessage name="message"  component="div"  className="text-danger" />
                  </BootstrapForm.Group>

                  
                  <Button type="submit" disabled={isSubmitting} className="w-100">Sign Up</Button>
                  <p className="mt-3 text-center">Already have an account?{" "}
                   <Link to="/login" className="text-dark fw-bold">Login </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </Col>

       
        <Col
          md={7}
          className="d-none d-md-flex align-items-center justify-content-center text-column"
          data-aos="fade-left" 
          data-aos-duration="1000">
          <div className="text-center text-success px-4" data-aos="fade-left">
           
            <h1 className="text-danger mt-3">🏋️ Ready to Get Fit? Sign Up Now!</h1>
            <h3 className="text-success ">Let's get connected.</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Signup;   
