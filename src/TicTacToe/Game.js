import React from "react"; 
import Board from "./Board"; 

class Game extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { currentPlayer: "X" } 
  }; 

  toggleCurrentPlayer = () => {
    var player = (this.state.currentPlayer === "X") ? "O" : "X"; 
    this.setState({ currentPlayer: player }); 
  } 

  render() {
    return (
      <div>
        Now Playing: {this.state.currentPlayer}
        <Board currentPlayer={this.state.currentPlayer}/>
      </div>
    ) 
  } 
} 

export default Game; 
