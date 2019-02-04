import React from "react"; 
import Cell from "./Cell"; 

const Board = () => (
    <div>
      <div className="row">
        <div className="column"><Cell /></div>
        <div className="column"><Cell /></div>
        <div className="column"><Cell /></div>
      </div>
      <div className="row">
        <div className="column"><Cell /></div>
        <div className="column"><Cell symbol="O"/></div>
        <div className="column"><Cell /></div>
      </div>
      <div className="row">
        <div className="column"><Cell symbol="X" /></div>
        <div className="column"><Cell /></div>
        <div className="column"><Cell /></div>
      </div>
    </div>
) 

export default Board; 
