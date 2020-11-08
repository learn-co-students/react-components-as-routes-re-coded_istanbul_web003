import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: "darkblue",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Login
          </NavLink>
        </div>
      );
    }
  }
  
  export default Navbar;