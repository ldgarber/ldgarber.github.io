import React from "react"; 

const Post = (props) => {
  const post = props.post; 

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div className="post-link"><a href={post.link} target="_blank" rel="noopener noreferrer">Link here</a></div>
    </div>
  ); 
}

export default Post; 
