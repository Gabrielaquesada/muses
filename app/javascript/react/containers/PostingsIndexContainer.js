import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import PostingTile from '../components/PostingTile';

class PostingsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/postings')
    .then(response => response.json())
    .then(body => {
      let allPostings = body;
      this.setState({ postings: allPostings });
    });
  }

  render() {
    let postings = this.state.postings.map(posting => {
	      return(
	        <PostingTile
	          key={posting.id}
	          id={posting.id}
	          description={posting.description}
	        />
	      )
	    })

    return (
      <div>
      {postings}
      </div>
    )
  }
}


export default PostingsIndexContainer;
