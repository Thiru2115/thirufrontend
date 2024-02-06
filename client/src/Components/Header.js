import React, { useState } from "react";

import Modal from "react-modal";
import "../Style/header.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";



const Header = () => {
  const location = useLocation();
  const isHomeOrHomePage =
    location.pathname === "/" || location.pathname === "/home";
  const [modalIsOpen, setIsOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gLogin, setGlogin] = useState(false);

  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const Signup = async () => {
    const Data = { username, email, password };
    try {
      const response = await axios.post("/signup", Data);
      console.log(response.data.username, "Signup SuccessFully");
      setsignupOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const Login = async () => {
    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      console.log(response.data.user, "Successfully logged in");
      setGlogin(true);
      setUserName(response.data.user.username);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const opensignup = () => {
    setsignupOpen(true);
  };
  const closesignup = () => {
    setsignupOpen(false);
  };
  const logOut = () => {
    setGlogin(false);
  };


  return (
    <nav className={`parent ${isHomeOrHomePage ? "black-bg" : "blue-bg"}`}>
      {!isHomeOrHomePage && <Link to="/ " className="child_logo">Te!</Link>}
      <div className="buttons">
        {!gLogin ? (
          <div className="right-buttons">
            <button className="child_1login" onClick={openModal}>
              Login
            </button>
            <button className="child_2create" onClick={opensignup}>
              Create an account
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button className="btn text-white fw-bold mlogin text-center ">
              {username}
            </button>
            <button
              className="btn text-white bg-transparent fw-bold acc"
              onClick={logOut}
            >
              LogOut
            </button>
          </div>
        )}
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <form className="modal-form">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button type="button" className="submit" onClick={Login}>
                Login
              </button>
              <button type="button" className="cancel" onClick={closeModal}>
                Cancel
              </button>
              <GoogleLogin 
                style={customStyles}
                onSuccess={(credentialResponse) => {
                  setGlogin(true);
                  const result = jwtDecode(credentialResponse.credential);
                  setUserName(result.given_name);
                  console.log(username);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              
         
            </div>
          </form>
        </Modal>
        <Modal isOpen={signupOpen} style={customStyles}>
          <form className="modal-form">
            <h2>Create an account</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button
                type="button"
                className="Createanaccount"
                onClick={Signup}
              >
                Create an Account
              </button>
              <button type="button" className="cancel" onClick={closesignup}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </nav>
  );
};

export default Header;
