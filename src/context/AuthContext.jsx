// src/context/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initially, no user is logged in
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated login method
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Simulated signup method
  const signup = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Logout method
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // Optional: Update user profile data
  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }));
  };
 

  


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, signup, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
