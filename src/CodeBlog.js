import React from "react"; 
import ContentPage from "./ContentPage"; 
import { Link } from "react-router-dom"; 
import POSTS from "./constants/_code_posts"; 

const CodeBlog = ({ match }) => {
  console.log("post blog component"); 
  const post = POSTS[parseInt(match.params.id, 10)]; 
  if (!post) { return <div>Post not found</div>; }

  return (
    <ContentPage>
      <div className="post">
        <Link to="/code" className="post-link" id="post-link-dark">{"< Back"}</Link>
        <div className="blog-text">
          <h1>{post.title}</h1>
          <p>{post.blog}</p>
        </div>
      </div>
    </ContentPage>
  ); 
} 
 
export default CodeBlog; 
