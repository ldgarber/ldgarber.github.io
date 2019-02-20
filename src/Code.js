import React from "react"; 
import ContentPage from "./ContentPage"; 
import Posts from "./Posts"; 
import POSTS from "./constants/_code_posts"; 

const Code = () => (
  <ContentPage>
    <Posts posts={POSTS} />
  </ContentPage>
); 

export default Code; 
