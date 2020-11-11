import React from "react";
import ContentPage from "./ContentPage";

const About = () => {
  const aboutText =
    `I'm a Software Engineer in Test at Unite Us, where I work on technology to address the Social Determinants of Health.\
  I take pride in ensuring the quality of data, UI/UX, and holistic functionality.\
  I also enjoy web development, making websites such as this one,
    using Ruby on Rails, React.js, HTML and CSS.`

  return(
  <ContentPage>
    <div>
      <img id="about-photo" src="/images/about-photo.jpg" alt="Leah's face"/>
      <div className="centered" id="about-content">
        <h3>{"About Me"}</h3>
        <p>{aboutText}</p>
        <p>{"I am also a freelance trumpet player in the NYC and Northern NJ area"}</p>
      </div>
    </div>
  </ContentPage>
)};

export default About;
