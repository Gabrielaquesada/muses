import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

export const PostingTile = (props) => {
  return (
    <div>
    <p>{props.description}</p>
   </div>
  );
}

export default PostingTile;
