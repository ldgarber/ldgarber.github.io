import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
import POSTS from "./constants/_code_posts"; 

const Post = (props) => {
  const post = props.post; 

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div className="post-link" id="post-link-dark"><a href={post.link} target="_blank" rel="noopener noreferrer">Link to the project</a></div> 
      { !!(post.blog) &&
        <Link className="post-link" key={post.id} to={{ pathname: `/code/${post.id}` }}>Blog Post</Link>
      } 
    </div>
  ); 
} 
 
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
