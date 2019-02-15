import React from 'react';

const PostingsShowTile = (props) => {
  return (
    <div className='box'>
  		<div className='content'>
  			<div className='name'>
  				<h5>{props.username}</h5>

  			</div>
  		</div>
  	 <div className='row text'>
  	 	<br/><p>{props.description}</p>
  	 </div>
  	</div>
  );
}

export default PostingsShowTile;
