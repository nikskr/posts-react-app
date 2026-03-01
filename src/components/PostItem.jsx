import React, { useRef } from "react";
import MyButton from "./UI/button/MyButton";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from 'react-router';

function PostItem({post, number, remove, ...props}) {

  const nodeRef = useRef(null);
  const router = useNavigate();
    return (
      <CSSTransition nodeRef={nodeRef} timeout={500} classNames='item' {...props} appear>
        <div ref={nodeRef} className='post'>
          <div className='post__content'>
            <strong>{number}. {post.title}</strong>
            <div>
              {post.body}
            </div>
          </div>
          <div className='post__btns'>
            <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
        </div>
      </CSSTransition>
     );
}

export default PostItem;