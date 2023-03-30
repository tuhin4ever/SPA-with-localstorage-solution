import { useState } from "react";

import "./App.css";

import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="home-container col-md-8">
          
      </div>

      <Contact></Contact>
    </div>
  );
}

export default App;
