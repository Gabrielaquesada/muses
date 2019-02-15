import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import CommentField from '../components/CommentField';



class CommentsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      description: this.state.description
  };
    this.props.addNewComments(formPayload);
    this.handleClear()
  }

  handleClear() {
    this.setState({
      description: ''
    })
  }

  render() {
	    return(
	      <form className="comment-field" onSubmit={this.handleSubmit}>
        <CommentField
	          content={this.state.description}
	          label=""
	          name="Post"
	          handleChange={this.handleDescriptionChange}
	        />
	        <div className="send-button">
	          <input className="button" type="submit" value="Comment" />
	        </div>
	      </form>
	    )
	  }
	}


export default CommentsFormContainer;
