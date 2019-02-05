import React from "react"; 
import {
  NavLink, 
} from "react-router-dom"; 

const Navbar = () => (
  <div>
    <ul className="header">
      <li><NavLink to="/code">Code</NavLink></li>
      <li><NavLink to="/music">Music</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </div>
); 

export default Navbar; 
