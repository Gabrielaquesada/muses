import React from 'react';
import { Link } from 'react-router';

const PostingTile = (props) => {

		return(
	<div className='box'>
		<div className='content'>
			<div className='name'>
				<h5><a className='font-autho' href={`/users/${props.id}`}>{props.user}</a></h5>
			</div>
		</div>
	 <div className='row text'>
	 	<br/><p>{props.description}</p><br/><p className='float-right'>{props.location}</p>
	 	<Link to={`/postings/${props.id}`}><button className='button'>Comment</button></Link>
	 </div>
	</div>

		)
}

	export default PostingTile;
