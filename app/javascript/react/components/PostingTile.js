import React from 'react';
import { Link } from 'react-router';

const PostingTile = (props) => {

		return(
	<div className='box'>
		<div className='content'>
			<div className='name'>
				<h5>{props.user}</h5>
			</div>
		</div>
	 <div className='row text'>
	 	<br/><p>{props.description}</p>
	 	<Link to={`/postings/${props.id}`}><button className='button'>Comment</button></Link>
	 </div>
	</div>

		)
}

	export default PostingTile;
