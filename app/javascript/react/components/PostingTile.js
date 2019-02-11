import React from 'react';
import { Link } from 'react-router';

const PostingTile = (props) => {
	if (props.comments_length > 0) {
		return(
			<div>
			<p>{props.user} : {props.description} </p>
			<Link to={`/postings/${props.id}`}><button className='button-message'>{props.comments_length}<i className='fas fa-comment-dots'></i></button></Link>
			</div>
		)
	} else {
		return(
			<div>
			<p>{props.user} : {props.description} </p>
			<Link to={`/postings/${props.id}`}><button className='button-message'><i className='far fa-comment-dots'></i></button></Link>
			<br/>
			</div>
		)
	}
}

	export default PostingTile;
