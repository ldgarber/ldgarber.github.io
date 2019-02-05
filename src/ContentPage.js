import React, { Component } from "react"; 
import Navbar from "./Navbar"; 

class ContentPage extends Component { 
  render() {
    return (
      <div className="content-page">
        <Navbar />
        {this.props.children}
      </div>
    )
  } 
} 

export default ContentPage; 
