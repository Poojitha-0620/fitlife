import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthContext";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <AuthProvider>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
    </AuthProvider>
   
  </React.StrictMode>
);

reportWebVitals();
