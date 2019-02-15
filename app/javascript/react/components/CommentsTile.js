import React from 'react';

const CommentsTile = (props) => {
  return (

    <div className='box'>
  		<div className='content'>
  			<div className='name'>
  				<h5>{props.user}</h5>
  			</div>
  		</div>
  	 <div className='row text'>
  	 	<br/><p>{props.description}</p>
  	 </div>
  	</div>
  
  );
}

export default CommentsTile;
