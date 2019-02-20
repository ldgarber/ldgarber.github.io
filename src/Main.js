import React, { Component } from "react";
import {
  Route, 
  Redirect, 
  Switch, 
  HashRouter, 
} from "react-router-dom"; 
import Header from "./Header"; 
import Home from "./Home"; 
import Code from "./Code";  
import CodeBlog from "./CodeBlog"; 
import Music from "./Music"; 
import About from "./About"; 

const NotFoundRedirect = () => <Redirect to="/"/>
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/code" component={Code}/> 
              <Route path="/code/:id" component={CodeBlog} />
              <Route path="/music" component={Music}/>
              <Route path="/about" component={About}/>
              <Route component={NotFoundRedirect} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
