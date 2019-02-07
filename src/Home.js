import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
import SocialIcons from "./SocialIcons"; 
import Board from "./TicTacToe/Board"; 

class Home extends Component { 
  render() {
    return (
      <div className="home">
        <div className="centered">
          <h1>WELCOME</h1>
          <p>I am a coder and musician living in NYC</p>
          <br></br>
          
          <p><Link to={"/code"}>Check out my PROJECTS</Link></p>
          
          <p>Or find me on social media</p>
          <SocialIcons />
          <Board />
        </div>
      </div>
    )
  } 
} 

export default Home; 
