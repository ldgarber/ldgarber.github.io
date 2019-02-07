import React from "react"; 
import Cell from "./Cell"; 

class Board extends React.Component { 
  constructor(props) {
    super(props); 
    this.state = {
      cells: Array(9).fill(null), 
      xIsNext: true, 
    } 
  } 

  renderCell(i) {
    return (
      <Cell 
        value={this.state.cells[i]} 
        onClick={() => this.handleClick(i)}
      />
    ); 
  } 

  handleClick(i) {
    const cells = this.state.cells.slice(); 
    if (cells[i] === null) {
      cells[i] = this.state.xIsNext ? 'X' : 'O'; 
      this.setState({
        cells: cells, 
        xIsNext: !this.state.xIsNext, 
      }); 
    }
  } 

  calculateWinner() {
    let squares = this.state.cells; 
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if (squares.every((item) => item != null)) {
      return 'Tie'
    }
    return null;
  }


  render() {
    const winner = this.calculateWinner(); 
    let status; 
    if (winner) {
      status = "Winner: " + winner; 
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
    }

    return (
      <div className="tic-tac-toe">
        <div className="status">{status}</div>
        <div className="row">
          <div className="column">{this.renderCell(0)}</div>
          <div className="column">{this.renderCell(1)}</div>
          <div className="column">{this.renderCell(2)}</div>
        </div>
        <div className="row">
          <div className="column">{this.renderCell(3)}</div>
          <div className="column">{this.renderCell(4)}</div>
          <div className="column">{this.renderCell(5)}</div>
        </div>
        <div className="row">
          <div className="column">{this.renderCell(6)}</div>
          <div className="column">{this.renderCell(7)}</div>
          <div className="column">{this.renderCell(8)}</div>
        </div>
      </div>
    ) 
  } 
} 


export default Board; 

