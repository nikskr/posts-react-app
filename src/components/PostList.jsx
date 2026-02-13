import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";

function PostList({posts, title, remove}) {

  if (posts.length === 0) {
    return (<h1 style={{textAlign: 'center', marginTop: '20px'}}>No posts found</h1>);
  } 

  return (
  <div>
    <h1 style={{textAlign: 'center', marginTop: '20px'}}>
      {title}
    </h1>
    <TransitionGroup>
      {posts.map((post, index) =>
          <PostItem key={post.id} remove={remove} number={index + 1} post={post}/>
      )}
    </TransitionGroup>
  </div>
  );
}

export default PostList;