import { useState } from "react";

import "./App.css";

import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import SideCart from "./components/sideCart/sideCart";

function App() {
  return (
    <div>
      <div className="header  m-auto mb-4 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>

      <Contact></Contact>
    </div>
  );
}

export default App;
