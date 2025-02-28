import React, { useState,  useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button, Alert } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);


 useEffect(() => {
          AOS.init({
            duration: 4000,  
            easing: "ease-in-out",
            once: true,      
          });
        }, []);


  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    
    email: Yup.string()
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3}$/, "Invalid email format")
    .required("Required"),
    message: Yup.string().required("Message is required"),
  });

  

  const onSubmit = (values, { setSubmitting, resetForm }) => {
   
    setTimeout(() => {
      setSubmitted(true); 
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    
    <div className="contact-page"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Container className="py-5">
        <h2>Contact Us</h2>
        {submitted && (
          <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
            Submitted successfully!
          </Alert>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  className="form-control"
                  rows="5"
                />
                <ErrorMessage name="message" component="div" className="text-danger" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Contact;
