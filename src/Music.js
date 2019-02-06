import React from "react"; 
import ContentPage from "./ContentPage"; 
import Gallery from 'react-grid-gallery'; 
import IMAGES from './_images'; 

const Music = () => (
  <ContentPage>
    <p>Music</p>
    <Gallery images={IMAGES} />
  </ContentPage>
); 

export default Music; 
