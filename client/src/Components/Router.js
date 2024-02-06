import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"; // Change this line

import Home from "./Home";
import Header from "./Header";
import Filter from "./Filter";

import Details from "./Details";

 

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />  
        <Routes>
        
          <Route exact path="/" Component={Home} />
          <Route path="/Home" Component={Home} />
          <Route path="/Filter" Component={Filter} />

          <Route path='/Details' Component={Details} />
         
        </Routes>
      </BrowserRouter>
    );
  }
}
