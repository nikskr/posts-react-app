import React, { useRef } from "react";
import MyButton from "./UI/button/MyButton";
import { CSSTransition } from "react-transition-group";

function PostItem({post, number, remove, ...props}) {

  const nodeRef = useRef(null);

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
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
        </div>
      </CSSTransition>
     );
}

export default PostItem;