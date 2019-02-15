import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import PostingsShowTile from '../components/PostingsShowTile';
import CommentsTile from '../components/CommentsTile';
import CommentsFormContainer from '../containers/CommentsFormContainer'


class PostingsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      username: "",
      comments: []
    }
      this.addNewComments = this.addNewComments.bind(this)
  }
  componentDidMount() {
    let id = this.props.params.id;
    fetch(`/api/v1/postings/${id}`)
      .then(response => {
        let responseBody = response.json();
        return responseBody;
      })
      .then(responseBody => {

        this.setState({
          username: responseBody.user_name,
          description: responseBody.description,
          comments: responseBody.comments

        });
      });
  }

  addNewComments(formPayload) {
    let jsonStringInfo = JSON.stringify(formPayload);

    fetch(`/api/v1/postings/${this.props.params.id}/comments`, {
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
      let newComments = [responseBody, ...this.state.comments]
      this.setState({
        comments: newComments
      })
    });
  }

  render() {
      let comments = this.state.comments.map(comment => {

        return(
          
          <CommentsTile
           key={comment.id}
           id={comment.id}
           user={comment.user_name}
           description={comment.description}
           price={comment.price_rating}

          />
        )
      })
  	    return(
          <div>
              <PostingsShowTile
                key={this.props.params.id}
                id={this.props.params.id}
                username={this.state.username}
                description={this.state.description}
                comments={this.state.comments}
              />
              <div>
                <CommentsFormContainer
                  addNewComments={this.addNewComments}
                />
              </div>
              <div>
              {comments}
            </div>
          </div>
        )
      }
    }



export default PostingsShowContainer;
