import React, { Component } from "react"; 
import Post from "./Post.js"; 
 
class Posts extends Component { 
  render() {
    const posts = this.props.posts.map((post, i) => 
      <Post post={post} key={i} />
    ); 

    return (
      <div className="posts-container">
        {posts} 
      </div>
    ); 
  }
} 

export default Posts; 
