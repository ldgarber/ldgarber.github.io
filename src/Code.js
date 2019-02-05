import React from "react"; 
import ContentPage from "./ContentPage"; 
import Posts from "./Posts"; 
import posts from "./_code_posts"; 

const Code = () => (
  <ContentPage>
    <Posts posts={posts} />
  </ContentPage>
); 

export default Code; 
