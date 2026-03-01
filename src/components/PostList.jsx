import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";

function PostList({posts, title, remove}) {

  if (posts.length === 0) {
    return (<h1 style={{textAlign: 'center', marginTop: '10px'}}>No posts found</h1>);
  } 

  return (
  <div>
    <h1 style={{textAlign: 'center', marginTop: '10px'}}>
      {title}
    </h1>
    <TransitionGroup>
      {posts.map((post, index) =>
          <PostItem key={post.id} number={index + 1} remove={remove} post={post}/>
      )}
    </TransitionGroup>
  </div>
  );
}

export default PostList;