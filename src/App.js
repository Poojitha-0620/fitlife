import React, { useRef, useEffect, } from "react";

import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import WorkoutProgress from "./pages/WorkoutProgress";
import DietPlans from "./pages/DietPlans";
import BMIStats from "./pages/BMIStats";
import Settings from "./pages/Settings";
import AuthProvider from "./context/AuthContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import WorkoutPlanDetails from "./pages/WorkoutPlanDetails";
import Diet from "./pages/Diet";
import DietPlanDetails from "./pages/DietPlanDetails";
import BMI from "./pages/BMI";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const footerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   
    <AuthProvider>
      <Header footerRef={footerRef} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<WorkoutPlanDetails />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/diet/:id" element={<DietPlanDetails />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/workout-progress" element={<WorkoutProgress />} />
        <Route path="/dashboard/diet-plans" element={<DietPlans />} />
        <Route path="/dashboard/bmi-stats" element={<BMIStats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer ref={footerRef} />
    </AuthProvider>
  
  );
}

export default App;
