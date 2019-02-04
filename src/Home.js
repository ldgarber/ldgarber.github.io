import React, { Component } from "react"; 
import Game from "./TicTacToe/Game"; 

class Home extends Component { 
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div className="tictactoe">
          <Game />
        </div>
      </div>
    )
  } 
} 

export default Home; 
