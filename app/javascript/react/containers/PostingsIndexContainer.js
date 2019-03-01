import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import PostingTile from '../components/PostingTile';
import PostingsFormContainer from './PostingsFormContainer';
import LinksComponent from '../components/LinksComponent';

class PostingsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: [],
      comments: []
    }
    this.addNewPostings = this.addNewPostings.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/postings')
    .then(response => response.json())
    .then(body => {
      let allPostings = body;
      this.setState({
        postings: allPostings,
        comments: allPostings.comments
      });
    });
  }


  addNewPostings(formPayload) {
    let jsonStringInfo = JSON.stringify(formPayload);
    fetch(`/api/v1/postings`, {
      method: "POST",
      body: jsonStringInfo,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw error;
      }
    })
    .then(responseBody=> responseBody.json())
    .then(responseBody => {
      let newPostings = [responseBody, ...this.state.postings]
      this.setState({
        // postings: this.state.postings.concat(responseBody)
        postings: newPostings
      })
    });
  }

  render() {
    let postings = this.state.postings.map(posting => {

	     return(
	        <PostingTile
	          key={posting.id}
	          id={posting.id}
            user={posting.user_name}
            photo={posting.user_photo}
	          description={posting.description}
            comments_length={posting.comments.length}
            location={posting.location}
	        />
	      )
	    })

    return (

  <div className='something'>
    <div className='grid-x'>
      <div className='cell small-3'>

        <LinksComponent/>
      </div>
      <div className='cell small-9'>
        <div className='grid-x grid-padding-y'>
            <PostingsFormContainer
              addNewPostings={this.addNewPostings}/>
        </div>
        <div className='cell'>
        {postings}
        </div>
      </div>
    </div>
    </div>
    )
  }
}


export default PostingsIndexContainer;
