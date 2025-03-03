import React, { useContext, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Settings = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

 
  const initialValues = {
    notifications: user?.settings?.notifications || "enabled",
    privacy: user?.settings?.privacy || "public",
    theme: user?.settings?.theme || "light",
  };

  // Validation schema
  const validationSchema = Yup.object({
    notifications: Yup.string().required("Select an option"),
    privacy: Yup.string().required("Select your privacy setting"),
    theme: Yup.string().required("Select a theme"),
  });

  const handleSave = (values, { setSubmitting }) => {
    updateUser({ settings: values });
    setSuccessMessage("Settings updated successfully!");
    setSubmitting(false);
   
    navigate("/dashboard");
    
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="settings-wrapper">
    <Container className="mt-4 settings-container">
      <Card className="shadow p-3 ">
        <Card.Body>
          <h3>Account Settings</h3>
          {successMessage && (
            <p className="text-success mt-3">{successMessage}</p>
          )}
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSave}  enableReinitialize validateOnMount >
            {({ isSubmitting, isValid }) => (
              <Form>
                <Row className="mb-3">
                  <Col md={6} className="settings-group">
                    <Form.Group controlId="formNotifications">
                      <Form.Label>Notifications</Form.Label>
                      <Field as="select"  name="notifications" className="settings-select set" >
                        <option  value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                      </Field>
                      <ErrorMessage  name="notifications"  component="div"  className="settings-error"  />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="settings-group">
                    <Form.Group controlId="formPrivacy">
                      <Form.Label>Profile Privacy</Form.Label>
                      <Field as="select"  name="privacy"  className="settings-select set" >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                      </Field>
                      <ErrorMessage  name="privacy" component="div" className="settings-error"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6} className="settings-group">
                    <Form.Group controlId="formTheme" >
                      <Form.Label>Theme</Form.Label>
                      <Field  as="select"  name="theme"  className="settings-select " >
                        <option  value="light">Light</option>
                        <option value="dark">Dark</option>
                      </Field>
                      <ErrorMessage  name="theme"  component="div"  className="settings-error"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit"  variant="success"  className="settings-btn"  disabled={isSubmitting || !isValid}>
                  Save Settings
                </Button>
                <Link to="/dashboard">
      <Button variant="secondary" className="settings-btn mt-2 ms-2 ">Back to Dashboard</Button>
    </Link>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default Settings;
