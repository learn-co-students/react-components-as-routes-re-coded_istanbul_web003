import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = () => <h1>Home!</h1>;

 const About = () => <h1>This is my about component!</h1>;

ReactDOM.render(
  (<Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>),
  document.getElementById('root')
);
