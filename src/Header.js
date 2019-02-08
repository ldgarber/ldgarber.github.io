import React from "react"; 
import { Link } from 'react-router-dom'; 
import SocialIcons from "./SocialIcons"; 

class Header extends React.Component { 
  render() {
    return (
      <div>
        <h1><Link to={"/"}>Leah D. Garber</Link></h1>
        <SocialIcons />
        <ul className="right-side-links">
          <li><Link className="link" to={"/code"}>Projects</Link></li>
        </ul>
      </div>
    );  
  }
}

export default Header; 
