import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

  <Router>
    <div>
      <h1>Home!</h1>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>

  document.getElementById('root')
