import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Router from "./Components/Router";
// import Home from './Components/Home';
import { GoogleOAuthProvider } from "@react-oauth/google";
  
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="429749268597-k4a8a10655imquhvkq7h20mq99ftjprd.apps.googleusercontent.com">
      <Router />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
