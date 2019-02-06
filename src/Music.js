import React from "react"; 
import ContentPage from "./ContentPage"; 
import Gallery from 'react-grid-gallery'; 
import IMAGES from './constants/_images'; 

const Music = () => (
  <ContentPage>
    <h2>Photo Gallery</h2>
    <Gallery  
      id="music-gallery"
      images={IMAGES} 
      rowHeight={300}
      enableImageSelection={false}
      margin={3}
    />
  </ContentPage>
); 

export default Music; 
