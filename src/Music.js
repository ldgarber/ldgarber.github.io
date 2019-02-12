import React from "react"; 
import ContentPage from "./ContentPage"; 
import Gallery from 'react-grid-gallery'; 
import IMAGES from './constants/_images'; 

const loaderStyle = {
  height: "300", 
  width: "300", 
  backgroundImage: 'url("/images/loader.gif")',
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
} 

const SpotifyPlayer = (props) => (
  <div className="loader-behind-iframe" style={ loaderStyle } >
    <iframe className="spotify-player centered" title="winter" src={props.src} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
  </div>
);  

const Music = () => (
  <ContentPage>
    <div className="music-section">
      <h2>Hear Me On</h2>
      <SpotifyPlayer src="https://open.spotify.com/embed/album/0HK6rPJCdWLhj5lF7NFMiU" />
    </div>
    <div className="music-section">
      <h2>Photo Gallery</h2>
      <Gallery  
        id="music-gallery"
        images={IMAGES} 
        rowHeight={300}
        enableImageSelection={false}
        margin={3}
      />
    </div>
  </ContentPage>
); 

export default Music; 
