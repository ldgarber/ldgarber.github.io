import React from "react"; 
import github_icon from "./assets/github_icon.png"; 
import linkedin_icon from "./assets/linkedin_icon.png"; 

class SocialIcons extends React.Component {
  render() {
    return (
      <ul class="social-icons">
        <li class="d-inline">
          <a href="https://github.com/ldgarber" target="_blank" rel="noopener noreferrer">
            <img class="social-icon" src={github_icon} alt="github icon"/>
          </a>
        </li>
        <li class="d-inline">
          <a href="https://linkedin.com/in/leahdgarber" target="_blank" rel="noopener noreferrer">
            <img class="social-icon" src={linkedin_icon} alt="github icon"/>
          </a>
        </li>
      </ul>
    ); 
  } 
} 

export default SocialIcons; 
