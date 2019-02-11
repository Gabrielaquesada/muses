import React from 'react';

const CommentsTile = (props) => {
  return (


    <div class="row">
    <div className="large-2 columns">{props.user}</div>
    <div className="large-10 columns">{props.description}</div>
    </div>

  );
}

export default CommentsTile;
