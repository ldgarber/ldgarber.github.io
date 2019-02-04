import React from "react"; 

class Cell extends React.Component { 
  handleClick = () => {
    console.log("CLicked!"); 
  } 
  render() {
    return (
      <div className="cell" onClick={this.handleClick}>
        {this.props.symbol}  
      </div>
    ) 
  } 
} 

export default Cell; 
