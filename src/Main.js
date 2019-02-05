import React, { Component } from "react";
import {
  Route, 
  Link, 
  HashRouter
} from "react-router-dom"; 
import Home from "./Home"; 
import Code from "./Code";  
import Music from "./Music"; 
import About from "./About"; 
import github_icon from "./assets/github_icon.png"; 
import linkedin_icon from "./assets/linkedin_icon.png"; 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Link to="/"><h1>Leah D. Garber</h1></Link>
          <ul class="social-icons">
            <li class="d-inline">
              <a href="https://github.com/ldgarber" target="_blank" rel="noopener noreferrer">
                <img class="social-icon" src={github_icon} alt="github icon"/>
              </a>
            </li>
            <li class="d-inline">
              <a href="https://linkedin.com/in/leahdgarber" target="_blank" rel="noopener noreferrer">
                <img class="social-icon" src={linkedin_icon} alt="github icon"/>
              </a>
            </li>
          </ul>
          <ul class="right-side-links">
            <li><Link className="link" to="/code">Projects</Link></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/code" component={Code}/> 
            <Route path="/music" component={Music}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
