import React from "react";

function CommentItem({comm}) {

    return (
        <div className='comments__item ' key={comm.id}>
            <h3>{comm.name}</h3>
            <div>{comm.body}</div>
        </div>
     );
}

export default CommentItem;