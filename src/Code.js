import React, { Component } from "react"; 
import Navbar from "./Navbar"; 
import Header from "./Header"; 

class Code extends Component { 
  render() {
    return (
      <div className="code">
        <Header />
        <Navbar />
        <p>This is a code page </p>
      </div>
    )
  } 
} 

export default Code; 
