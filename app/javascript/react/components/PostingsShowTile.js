import React from 'react';

const PostingsShowTile = (props) => {
  return (
    <h6>{props.username} : {props.description}</h6>
  );
}

export default PostingsShowTile;
