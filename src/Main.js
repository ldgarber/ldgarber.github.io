import React, { Component } from "react";
import {
  Route, 
  NavLink, 
  HashRouter
} from "react-router-dom"; 
import Home from "./Home"; 
import Code from "./Code";  
import Music from "./Music"; 
import Contact from "./Contact"; 
import github_icon from "./assets/github_icon.png"; 
import linkedin_icon from "./assets/linkedin_icon.png"; 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Leah D. Garber</h1>
          <ul class="social-icons">
            <li class="d-inline">
              <a href="https://github.com/ldgarber">
                <img class="social-icon" src={github_icon} alt="github icon"/>
              </a>
            </li>
            <li class="d-inline">
              <a href="https://linkedin.com/in/leahdgarber">
                <img class="social-icon" src={linkedin_icon} alt="github icon"/>
              </a>
            </li>
          </ul>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/code">Code</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/> 
            <Route path="/code" component={Code}/> 
            <Route path="/music" component={Music}/>
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
