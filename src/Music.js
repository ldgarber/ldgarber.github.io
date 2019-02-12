import React from "react"; 
import ContentPage from "./ContentPage"; 
import Gallery from 'react-grid-gallery'; 
import IMAGES from './constants/_images'; 

const SpotifyPlayer = (props) => (
  <div>
    <iframe className="spotify-player centered" title="winter" src={props.src} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
  </div>
);  

const Music = () => (
  <ContentPage>
    <h2>Hear Me On</h2>
    <SpotifyPlayer src="https://open.spotify.com/embed/album/0HK6rPJCdWLhj5lF7NFMiU" />
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
