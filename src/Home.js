import React, { Component } from "react"; 
import Board from "./Board"; 

class Home extends Component { 
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div className="tictactoe">
          <Board />
        </div>
      </div>
    )
  } 
} 

export default Home; 
