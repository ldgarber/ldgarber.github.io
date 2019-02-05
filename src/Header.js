import React from "react"; 
import { Link } from 'react-router-dom'; 
import SocialIcons from "./SocialIcons"; 

class Header extends React.Component { 
  render() {
    return (
      <div>
        <Link to={"/"}><h1>Leah D. Garber</h1></Link>
        <SocialIcons />
        <ul class="right-side-links">
          <li><Link className="link" to={"/code"}>Projects</Link></li>
        </ul>
      </div>
    );  
  }
}

export default Header; 
