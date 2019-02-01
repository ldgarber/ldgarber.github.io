import React, { Component } from "react";
import {
  Route, 
  NavLink, 
  HashRouter
} from "react-router-dom"; 
import Home from "./Home"; 
import Stuff from "./Stuff"; 
import Contact from "./Contact"; 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Leah Garber</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink>
            <li><NavLink to="/stuff">Stuff</NavLink>
            <li><NavLink to="/contact">Contact</NavLink>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/> 
            <Route path="/stuff" component={Stuff}/> 
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
