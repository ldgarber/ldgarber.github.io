import React, { Component } from "react"; 
import Navbar from "./Navbar"; 

class Music extends Component { 
  render() {
    return (
      <div className="music">
        <Navbar />
        <p>This is a music page</p>
      </div>
    )
  } 
} 

export default Music; 
