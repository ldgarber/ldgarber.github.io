import React, { Component } from "react";
import {
  Route, 
  HashRouter, 
} from "react-router-dom"; 
import Header from "./Header"; 
import Home from "./Home"; 
import Code from "./Code";  
import Music from "./Music"; 
import About from "./About"; 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
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
