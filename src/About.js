import React, { Component } from "react"; 
import Navbar from "./Navbar"; 

class About extends Component { 
  render() {
    return (
      <div className="about">
        <Navbar />
        <p>This is an about page</p>
      </div>
    )
  } 
} 

export default About; 
